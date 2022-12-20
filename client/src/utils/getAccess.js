import { parseCookies } from 'nookies';

export default async function getAccess({ ctx, permissions }) {
  try {
    const cookies = parseCookies(ctx);

    const data = await fetch(
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

    const _data = await data.json();
    return _data;
  } catch (error) {
    throw error;
  }
}
