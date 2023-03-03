const getSpotifyAccessToken = async () => {
  try {
    const { access_token } = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/spotify/auth`,
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
