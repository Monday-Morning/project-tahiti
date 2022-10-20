import { parseCookies } from 'nookies';

export default async function getAccess(ctx, permissions) {
  if (!ctx || !permissions) return false;
  try {
    const cookies = parseCookies(ctx);
    const { data, error } = await fetch(
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
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}
