import { useLocation } from 'react-router-dom';
// import ROUTES from './getRoutes';

export const getArticleSlug = (title) =>
  title.replace(/\W/g, '-').replace(/-{2,}/g, '-');

export default (id, title, typeObject = null) => {
  let artilceTypeObject = typeObject;
  const { pathname } = useLocation();

  if (!typeObject) {
    // const category = pathname.split('/')[1];
    const subCategory = pathname.split('/')[2];
    // const categoryName = ROUTES.CATEGORIES.filter(
    //   ({ shortName }) => shortName === category,
    // )[0].name;

    artilceTypeObject = {
      isWitsdom: subCategory === 'witsdom',
      isPhotostory: subCategory === 'photostory',
      isGallery: subCategory === 'gallery',
    };
  }
  const { isWitsdom, isGallery, isPhotostory } = artilceTypeObject;

  if (isWitsdom) return `/article/${id}/${getArticleSlug(title)}`;
  if (isGallery) return `/gallery/${id}/${getArticleSlug(title)}`;
  if (isPhotostory) return `/photostory/${id}/${getArticleSlug(title)}`;
  return `/article/${id}/${getArticleSlug(title)}`;
};
