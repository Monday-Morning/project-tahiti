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

  const contentArray = [];
  content.forEach((contentDetails) => {
    const text = contentDetails.plaintext.split('');
    let styledText;
    if (contentDetails.textFormatting.length > 0) {
      contentDetails.textFormatting.forEach((style) => {
        styledText = text.map((letter, index) => {
          if (style.start <= index <= style.end) {
            return {
              letter,
              bold: style.bold,
              italic: style.italic,
              underline: style.underline,
            };
          }

          return {
            letter,
            bold: false,
            italic: false,
            underline: false,
          };
        });
      });
    } else {
      styledText = text.map((letter) => ({
        letter,
        bold: false,
        italic: false,
        underline: false,
      }));
    }

    contentArray.push({
      styledText,
      ...contentDetails,
    });
  });

  const getClassName = (cntObj) => {
    const classNames = [];
    if (cntObj.bold) classNames.push(`${classes.boldText}`);
    if (cntObj.italic) classNames.push(`${classes.italicText}`);
    if (cntObj.underline) classNames.push(`${classes.underlineText}`);
    if (cntObj.strikethrough) classNames.push(`${classes.strikethroughText}`);

    return classNames.join(' ');
  };

  const renderContent = (contentType, name, contentObj) => {
    switch (contentType) {
      case CONTENT_TYPE.h1 || CONTENT_TYPE.h2 || CONTENT_TYPE.h3:
        return (
          <Element key={name} name={name}>
            <Typography
              className={classes.heading}
              variant={contentObj.contentType.toLowerCase()}
            >
              {contentObj.styledText?.map((obj, index) => (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${obj.letter}-${index}`}
                  className={getClassName(obj)}
                >
                  {obj.letter}
                </span>
              ))}
            </Typography>
          </Element>
        );
      case CONTENT_TYPE.paragraph:
        return (
          <Typography className={classes.para} key={name} variant='body1'>
            {contentObj.styledText?.map((obj, index) => (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={`${obj.letter}-${index}`}
                className={getClassName(obj)}
              >
                {obj.letter}
              </span>
            ))}
          </Typography>
        );
      case CONTENT_TYPE.image:
        return (
          <img
            key={name}
            src={contentObj.media?.storePath}
            alt={contentObj.plainText}
            className={classes.articleImg}
          />
        );
      case CONTENT_TYPE.quote:
        return (
          <div key={name} className={classes.blockquote}>
            <Typography variant='body1' className={classes.blockquoteData}>
              {contentObj.plainText}
            </Typography>
          </div>
        );
      default:
        return (
          <Element name={name} key={name}>
            <Typography className={classes.heading} variant='h2'>
              {content.data}
            </Typography>
          </Element>
        );
    }
  };

  return (
    <div>
      {contentArray.map((obj, index) =>
        renderContent(obj.contentType, `${obj.contentType}-${index}`, obj),
      )}
    </div>
  );
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
