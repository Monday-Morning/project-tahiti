import ImageKit from 'imagekit';

// only for temporary devlopment purpose

export default async function handler(req, res) {
  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URLENDPOINT,
  });

  const authenticationParameters = imagekit.getAuthenticationParameters();
  res.send(authenticationParameters);
}
