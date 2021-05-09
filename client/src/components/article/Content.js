/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';

// libraries
import { makeStyles, Typography } from '@material-ui/core';
import { Element } from 'react-scroll';

const CONTENT_TYPE = {
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

const ArticleContent = ({ article: { content } }) => {
  const classes = useStyles();

  const structuredContent = [];
  content.forEach(
    ({
      contentType,
      plaintext,
      data,
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
          });
        }

        let endMarker = 0;
        textFormatting.forEach(
          (
            { bold, italic, underline, strikethrough, size, start, end },
            index,
          ) => {
            const text = plaintext.split('');

            const preStyledTextGroup = text.slice(endMarker, start).join('');
            const styledTextGroup = text.slice(start, end + 1).join('');
            endMarker = end + 1;

            structuredContent.push(
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
              structuredContent.push({
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
              });
            }
          },
        );
      } else {
        structuredContent.push({
          contentType,
          media,
          text: plaintext,
          blockFormatting,
        });
      }
    },
  );

  const filteredContent = structuredContent
    // eslint-disable-next-line consistent-return
    .map((obj) => {
      if (obj.text && obj.text !== '') return obj;
      if (obj.media) return obj;
    })
    .filter((element) => element !== undefined);

  const getClassName = (styles) => {
    const classNames = [];
    if (styles.bold) classNames.push(`${classes.boldText}`);
    if (styles.italic) classNames.push(`${classes.italicText}`);
    if (styles.underline) classNames.push(`${classes.underlineText}`);
    if (styles.strikethrough) classNames.push(`${classes.strikethroughText}`);

    return classNames.join(' ');
  };

  const renderContent = (contentObj) => {
    const { contentType } = contentObj;

    switch (contentType) {
      case CONTENT_TYPE.h1 || CONTENT_TYPE.h2 || CONTENT_TYPE.h3:
        return (
          <Element key={contentObj.text} name={contentObj.text}>
            <Typography
              className={`${classes.heading} ${getClassName(
                contentObj.styles,
              )}`}
              variant={contentType.toLowerCase()}
            >
              {contentObj.text}
            </Typography>
          </Element>
        );
      case CONTENT_TYPE.paragraph:
        return (
          <Typography
            className={`${classes.para} ${getClassName(contentObj.styles)}`}
            key={contentObj.text}
            variant='body1'
          >
            {contentObj.text}
          </Typography>
        );
      case CONTENT_TYPE.image:
        return (
          <img
            key={contentObj.text}
            src={contentObj.media.storePath}
            alt={contentObj.plainText}
            className={classes.articleImg}
          />
        );
      case CONTENT_TYPE.quote:
        return (
          <div key={contentObj.text} className={classes.blockquote}>
            <Typography variant='body1' className={classes.blockquoteData}>
              {contentObj.text}
            </Typography>
          </div>
        );
      default:
        return (
          <Element name={contentObj.text} key={contentObj.text}>
            <Typography className={classes.heading} variant='h2'>
              {contentObj.text}
            </Typography>
          </Element>
        );
    }
  };

  return <div>{filteredContent.map((obj) => renderContent(obj))}</div>;
};

export default ArticleContent;

const useStyles = makeStyles((theme) => ({
  para: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'justify',
    fontWeight: 'normal',
  },
  heading: {
    marginTop: '0.5rem',
  },
  articleImg: {
    width: '100%',
    height: 'auto',
  },
  blockquote: {
    paddingLeft: '4rem',
    fontStyle: 'italic',
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2rem',
    },
  },
  blockquoteData: {
    paddingLeft: '1rem',
    borderLeft: '4px solid',
    borderColor: theme.palette.common.black,
  },

  // Custom Text Styles
  boldText: {
    fontWeight: 'bold',
  },
  underlineText: {
    textDecoration: 'underline',
  },
  italicText: {
    fontStyle: 'italic',
  },
  strikethroughText: {
    textDecoration: 'line-through',
  },
  // customSizeText: {},

  // Custom Block Styles
  // alignLeft: {},
  // alignCenter: {},
  // alignRight: {},
  // alignJustify: {},
}));
