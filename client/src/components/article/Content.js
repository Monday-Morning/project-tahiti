import React from 'react';

// libraries
import { makeStyles, Typography } from '@material-ui/core';
import { Element } from 'react-scroll';

// Utils
import { CONTENT_TYPE } from '../../utils/articleContentParser';

const ArticleContent = ({ structuredContent }) => {
  const classes = useStyles();

  const getClassName = (styles) => {
    const classNames = [];
    if (styles.bold) classNames.push(`${classes.boldText}`);
    if (styles.italic) classNames.push(`${classes.italicText}`);
    if (styles.underline) classNames.push(`${classes.underlineText}`);
    if (styles.strikethrough) classNames.push(`${classes.strikethroughText}`);

    return classNames.join(' ');
  };

  const renderContent = (contentObj, index) => {
    const { contentType, data } = contentObj;

    switch (contentType) {
      case CONTENT_TYPE.h1 || CONTENT_TYPE.h2 || CONTENT_TYPE.h3:
        return (
          <Element
            key={`${contentType}-${index}`}
            name={`${contentType}-${index}`}
          >
            <Typography
              className={classes.heading}
              variant={contentType.toLowerCase()}
            >
              {data.map(({ text, styles }) => (
                <span key={text} className={getClassName(styles)}>
                  {text}
                </span>
              ))}
            </Typography>
          </Element>
        );
      case CONTENT_TYPE.paragraph:
        return (
          <Typography
            className={classes.para}
            key={`${contentType}-${index}`}
            variant='body1'
          >
            {data.map(({ text, styles }) => (
              <span key={text} className={getClassName(styles)}>
                {text}
              </span>
            ))}
          </Typography>
        );
      case CONTENT_TYPE.image:
        return data.map((dataObj) => (
          <img
            key={dataObj.text}
            src={dataObj.media.storePath}
            alt={dataObj.plainText}
            className={classes.articleImg}
          />
        ));
      case CONTENT_TYPE.quote:
        return (
          <div key={`${contentType}-${index}`} className={classes.blockquote}>
            {data.map((dataObj) => (
              <Typography variant='body1' className={classes.blockquoteData}>
                {dataObj.text}
              </Typography>
            ))}
          </div>
        );
      default:
        return (
          <Element
            key={`${contentType}-${index}`}
            name={`${contentType}-${index}`}
          >
            <Typography
              className={classes.heading}
              variant={contentType.toLowerCase()}
            >
              {data.map(({ text, styles }) => (
                <span key={text} className={getClassName(styles)}>
                  {text}
                </span>
              ))}
            </Typography>
          </Element>
        );
    }
  };

  return (
    <div>
      {structuredContent.map((obj, index) => renderContent(obj, index))}
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
    minHeight: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
