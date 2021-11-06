// import ROUTES from './getRoutes';

export const getArticleSlug = (title) =>
  title.replace(/\W/g, '-').replace(/-{2,}/g, '-');

export default (id, title, typeObject = null) => {
  if (typeObject?.isWitsdom) return `/article/${id}/${getArticleSlug(title)}`;
  if (typeObject?.isGallery) return `/gallery/${id}/${getArticleSlug(title)}`;
  if (typeObject?.isPhotostory)
    return `/photostory/${id}/${getArticleSlug(title)}`;
  return `/article/${id}/${getArticleSlug(title)}`;
};
