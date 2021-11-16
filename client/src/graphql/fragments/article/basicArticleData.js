import coverMedia from './coverMedia';

export default `
id
articleType
title
inshort
authors {
	name
}
categories {
	number
	isSubcategory
}
${coverMedia}
readTime
`;
