export const CONTENT_TYPE = {
  h1: 'H1',
  h2: 'H2',
  h3: 'H3',
  paragraph: 'PARAGRAPH',
  image: 'IMAGE',
  quote: 'QUOTE',
  ol: 'ORDERED_LIST',
  ul: 'UNORDERED_LIST',
  table: 'TABLE',
  barGraph: 'BAR_GRAPH',
  columnGraph: 'COLUMN_GRAPH',
  lineChart: 'LINE_CHART',
  pieChart: 'PIE_CHART',
  horizontalLine: 'HORIZONTAL_LINE',
};

const getStructuredContent = (content) => {
  const structuredContent = [];
  content.forEach(
    ({
      contentType,
      plaintext,
      // data,
      media,
      blockFormatting,
      textFormatting,
    }) => {
      if (
        contentType === CONTENT_TYPE.paragraph ||
        CONTENT_TYPE.h1 ||
        CONTENT_TYPE.h2 ||
        CONTENT_TYPE.h3 ||
        CONTENT_TYPE.quote
      ) {
        if (textFormatting.length === 0) {
          structuredContent.push({
            contentType,
            data: [
              {
                contentType,
                text: plaintext,
                media,
                blockFormatting,
                styles: {
                  bold: null,
                  underline: null,
                  italic: null,
                  strikethrough: null,
                  size: null,
                },
              },
            ],
          });
        }

        let endMarker = 0;
        const paragraphArray = [];
        textFormatting.forEach(
          (
            { bold, italic, underline, strikethrough, size, start, end },
            index,
          ) => {
            const text = plaintext.split('');

            const preStyledTextGroup = text.slice(endMarker, start).join('');
            const styledTextGroup = text.slice(start, end + 1).join('');
            endMarker = end + 1;

            paragraphArray.push(
              {
                contentType,
                text: preStyledTextGroup,
                blockFormatting,
                styles: {
                  bold: null,
                  underline: null,
                  italic: null,
                  strikethrough: null,
                  size: null,
                },
              },
              {
                contentType,
                text: styledTextGroup,
                blockFormatting,
                styles: {
                  bold,
                  underline,
                  italic,
                  strikethrough,
                  size,
                },
              },
            );

            if (index === textFormatting.length - 1) {
              const postStyledTextGroup = text
                .slice(end + 1, text.length + 1)
                .join('');
              paragraphArray.push({
                contentType,
                text: postStyledTextGroup,
                blockFormatting,
                styles: {
                  bold: null,
                  underline: null,
                  italic: null,
                  strikethrough: null,
                  size: null,
                },
              });
            }
          },
        );

        const filteredPara = paragraphArray.filter(
          (element) => element.text !== '',
        );
        structuredContent.push({ contentType, data: filteredPara });
      } else {
        structuredContent.push({
          contentType,
          data: [
            {
              contentType,
              media,
              text: plaintext,
              blockFormatting,
            },
          ],
        });
      }
    },
  );

  return structuredContent.filter((element) => element.data.length > 0);
};

export default getStructuredContent;
