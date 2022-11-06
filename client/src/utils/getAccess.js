import { parseCookies } from 'nookies';

export default async function getAccess(ctx, permissions) {
  try {
    const cookies = parseCookies(ctx);
    const res = await fetch(
      process.env.NODE_ENV === 'production'
        ? 'https://mm.dashnet.in/api/auth/check'
        : 'http://localhost:5000/auth/check',
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          authorization: cookies.firebaseToken,
        },
      },
    );

    const { data, error } = await res.json();

    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
}
