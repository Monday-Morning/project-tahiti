import media from './media';

export default `
content {
	text
	data
	mediaID
	contentType
	blockFormatting {
		align
		hasHeaderRow
		hasHeaderColumn
		listStyle
	}
	${media}
}
`;
