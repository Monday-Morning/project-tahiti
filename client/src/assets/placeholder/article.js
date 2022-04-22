import defaultArticleCoverImage from '../images/article/defaultArticleCover.png';

export const DEFAULT_ARTICLE = Object.freeze({
  id: 'default_article',
  articleType: 'default',
  title: 'Error: Article Title not found. Check others.',
  inshort: '..... .......... ..... .. ... ....... ... ... ... ...... ...',
  readTime: '....',
  status: 'default',
  authors: [
    { name: '......', details: { id: 1 } },
    { name: '.......', details: { id: 2 } },
    { name: '........', details: { id: 3 } },
    { name: '.........', details: { id: 4 } },
  ],
  categories: [
    {
      number: -1,
      subcategory: false,
    },
    {
      number: -1,
      subcategory: false,
    },
    {
      number: -1,
      subcategory: false,
    },
    {
      number: -1,
      subcategory: false,
    },
  ],
  coverMedia: {
    rectangle: {
      authors: [
        {
          name: 'Monday Morning',
        },
      ],
      mediaType: 'IMAGE',
      blurhash: null,
      storePath: defaultArticleCoverImage,
    },
  },
});

export const DISCLAIMER = Object.freeze({
  title: 'DISCLAIMER: ',
  firstpara:
    'The content, opinions or views expressed on the Monday Morning  website and its social media platforms, including, but not limited to Facebook, Instagram and Twitter pages, are strictly the property of Monday Morning and represent the extensive research and work of the working team of respective academic year of Monday Morning and not those of the institute. The reports and statements published are consolidated from the collected background research and interviews. The official statements of the institute can be found in the press releases published by the institute or via an RTI application.',
  secondpara:
    'No article or any statements by Monday Morning is to be reproduced, presented or distributed in part or whole without prior permission of the Executive Body of Monday Morning for any purposes, including, but not limited to print and electronic form.',
});
