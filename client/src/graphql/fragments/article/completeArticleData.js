import content from '../content';
import coverMedia from './coverMedia';

export default `
id
articleType
title
inshort
authors {
	name
	details
	user {
		picture{
			store
			storePath
			blurhash
		}
	}
}
photographers {
	name
	details
}
designers {
	name
	details
}
tech {
	name
	details
}
categories {
	number
	isSubcategory
	reference
}
tags {
	name
	reference
}
${content}
${coverMedia}
reactions
comments
bookmarks
views
hits
readTime
timeSpent
createdAt
updatedAt
`;
