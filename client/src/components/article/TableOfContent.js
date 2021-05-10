/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React from 'react';

// libraries
import { Link } from 'react-scroll';
import { makeStyles, Typography } from '@material-ui/core';

// Utils
import { CONTENT_TYPE } from '../../utils/articleContentParser';

const TableOfContent = ({ structuredContent }) => {
  const classes = useStyles();
  const getIndentClasses = (contentType) => {
    if (contentType === CONTENT_TYPE.h2) return `${classes.indentH2}`;
    if (contentType === CONTENT_TYPE.h3) return `${classes.indentH3}`;
  };

  const isApplicable = (contentType) =>
    contentType === CONTENT_TYPE.h1 ||
    contentType === CONTENT_TYPE.h2 ||
    contentType === CONTENT_TYPE.h3;

  return (
    <div className={classes.wrapper}>
      <Typography variant='h3'>Table of Contents</Typography>
      <div>
        <ol>
          {structuredContent.map(
            ({ contentType, data }) =>
              isApplicable(contentType) &&
              data.map(({ text }, index) => (
                <li key={`${text}-${index}`} className={classes.indexList}>
                  <Link
                    to={text}
                    className={`${classes.indexLink} ${getIndentClasses(
                      contentType,
                    )}`}
                    smooth
                    activeClass={classes.indexLinkActive}
                  >
                    {text}
                  </Link>
                </li>
              )),
          )}
        </ol>
      </div>
    </div>
  );
};

export default TableOfContent;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '1rem',
    paddingLeft: '4rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '2rem',
      paddingLeft: '1rem',
      paddingRight: '2rem',
    },
  },
  indexList: {
    fontSize: '1.375rem',
    lineHeight: '1.75rem',
    fontWeight: '400',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
    },
  },
  indexLinkActive: {
    color: theme.palette.primary.blue50,
    fontWeight: '600',
    textDecoration: 'underline',
  },
  indexLink: {
    color: 'unset',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontFamily: 'IBM Plex Sans',
  },
  indentH2: {
    marginLeft: '1rem',
    fontSize: '0.9rem',
  },
  indentH3: {
    marginLeft: '2rem',
    fontSize: '0.7rem',
  },
}));
