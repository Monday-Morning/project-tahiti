import React from 'react';

// libraries
import { makeStyles, Typography } from '@material-ui/core';
import { Element } from 'react-scroll';

const ArticleContent = (props) => {
  const classes = useStyles();
  return (
    <div>
      {props.article.content.map((content, key) => {
        switch (content.type) {
          case 'paragraph':
            return (
              <Typography className={classes.para} key={key} variant='body1'>
                {content.data}
              </Typography>
            );
          case 'image':
            return (
              <img key={key} src={content.data} alt={content.alt} className={classes.articleImg} />
            );
          case 'heading':
            return (
              <Element name={content.id} key={key}>
                <Typography className={classes.heading} variant='h2'>
                  {content.data}
                </Typography>
              </Element>
            );
          case 'blockquote':
            return (
              <div key={key} className={classes.blockquote}>
                <Typography variant='body1' className={classes.blockquoteData}>
                  {content.data}
                </Typography>
              </div>
            );
          default:
            return <div key={key}>{content.data}</div>;
        }
      })}
    </div>
  );
};

export default ArticleContent;

const useStyles = makeStyles((theme) => ({
  para: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'justify',
    fontWeight: '400',
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
    '@media (max-width:600px)': {
      paddingLeft: '2rem',
    },
  },
  blockquoteData: {
    paddingLeft: '1rem',
    borderLeft: '4px solid',
    borderColor: theme.palette.common.black,
  },
}));
