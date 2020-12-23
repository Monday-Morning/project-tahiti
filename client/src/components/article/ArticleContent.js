import React from 'react';

//libraries
import { makeStyles, Typography } from '@material-ui/core';

const ArticleContent = (props) => {
  const classes = useStyles();
  return (
    <div>
      {props.article.content.map((content, key) => {
        if (content.type == 'paragraph') {
          return (
            <Typography className={classes.para} key={key} variant='body1'>
              {content.data}
            </Typography>
          );
        } else if (content.type == 'image') {
          return (
            <img key={key} src={content.data} alt={content.alt} className={classes.articleImg} />
          );
        } else if (content.type == 'heading') {
          return (
            <Typography className={classes.heading} key={key} variant='h2'>
              {content.data}
            </Typography>
          );
        } else if (content.type == 'blockquote') {
          return (
            <div key={key} className={classes.blockquote}>
              <Typography variant='body1' className={classes.blockquoteData}>
                {content.data}
              </Typography>
            </div>
          );
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
