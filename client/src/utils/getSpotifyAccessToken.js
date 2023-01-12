const getSpotifyAccessToken = async () => {
  try {
    const { access_token } = await fetch(
      process.env.NODE_ENV !== 'production'
        ? 'https://mm.dashnet.in/api/admin/spotify/auth'
        : 'http://localhost:5000/admin/spotify/auth',
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
      },
    ).then((res) => {
      return res.json();
    });
    return access_token;
  } catch (error) {
    throw error;
  }
};

export default getSpotifyAccessToken;
