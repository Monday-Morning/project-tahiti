export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(400)
      .json({ error: 'Invalid HTTP method. Only POST requests are allowed.' });
  }

  if (req.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const body = req.body;
    if (!body) {
      res.status(400).send('Bad request (no body)');
      return;
    }

    const articleId = body.articleId;
    if (articleId) {
      await res.unstable_revalidate(`/article/${articleId}`);
      return res.json({
        revalidate: true,
        articleId: articleId,
      });
    }
  } catch (err) {
    return res.status(500).send('Error revalidating:', err);
  }
}
