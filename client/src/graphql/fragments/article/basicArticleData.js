import coverMedia from './coverMedia';

export default `
id
articleType
title
inshort
authors {
	name
	details
}
categories {
	number
	isSubcategory
}
${coverMedia}
readTime
`;
