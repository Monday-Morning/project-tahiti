import ImageKit from 'imagekit-javascript';

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URLENDPOINT,
  authenticationEndpoint: `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}${process.env.NEXT_PUBLIC_IMAGEKIT_AUTHENTICATION_ENDPOINT}`,
});

export default imagekit;
