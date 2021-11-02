import React from 'react';

// libraries
import { makeStyles, Typography } from '@material-ui/core';
import { Element } from 'react-scroll';

// Components
import MarkdownWrapper from '../shared/MarkdownWrapper';

// Utils
import { CONTENT_TYPE } from '../../utils/articleContentParser';
import STORES from '../../utils/getStores';

const ArticleContent = ({ content }) => {
  const classes = useStyles();

  const renderContent = (contentItem, index) => {
    const { contentType, text } = contentItem;

    switch (contentType) {
      case CONTENT_TYPE.h1:
        return (
          <Element
            key={`${contentType}-${index}`}
            name={`${contentType}-${index}`}
          >
            <MarkdownWrapper styles={classes.heading} variant='h1'>
              {text}
            </MarkdownWrapper>
          </Element>
        );

      case CONTENT_TYPE.h2:
        return (
          <Element
            key={`${contentType}-${index}`}
            name={`${contentType}-${index}`}
          >
            <MarkdownWrapper styles={classes.heading} variant='h2'>
              {text}
            </MarkdownWrapper>
          </Element>
        );

      case CONTENT_TYPE.h3:
        return (
          <Element
            key={`${contentType}-${index}`}
            name={`${contentType}-${index}`}
          >
            <MarkdownWrapper styles={classes.heading} variant='h3'>
              {text}
            </MarkdownWrapper>
          </Element>
        );

      case CONTENT_TYPE.paragraph:
        return (
          <Element
            key={`${contentType}-${index}`}
            name={`${contentType}-${index}`}
          >
            <MarkdownWrapper styles={classes.para} variant='body1'>
              {text}
            </MarkdownWrapper>
          </Element>
        );

      case CONTENT_TYPE.image:
        return (
          <img
            key={`${contentType}-${index}`}
            src={
              STORES[contentItem.media.store] +
              encodeURI(contentItem.media.storePath)
            }
            alt={text}
            className={classes.articleImg}
          />
        );

      case CONTENT_TYPE.quote:
        return (
          <div key={`${contentType}-${index}`} className={classes.blockquote}>
            <MarkdownWrapper variant='body1' styles={classes.blockquoteData}>
              {text}
            </MarkdownWrapper>
          </div>
        );

      case CONTENT_TYPE.ol:
        return (
          <MarkdownWrapper key={`${contentType}-${index}`} variant='body1'>
            {text}
          </MarkdownWrapper>
        );

      case CONTENT_TYPE.ul:
        return (
          <MarkdownWrapper key={`${contentType}-${index}`} variant='body1'>
            {text}
          </MarkdownWrapper>
        );

      default:
        return (
          <Element
            key={`${contentType}-${index}`}
            name={`${contentType}-${index}`}
          >
            <MarkdownWrapper
              className={classes.heading}
              variant={contentType.toLowerCase()}
            >
              {text}
            </MarkdownWrapper>
          </Element>
        );
    }
  };

  return content.map(renderContent);
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
