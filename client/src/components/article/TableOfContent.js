/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React from 'react';

// libraries
import { Link } from 'react-scroll';
import { Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// Utils
import { CONTENT_TYPE } from '../../utils/articleContentParser';
import limitString from '../../utils/limitString';

const TableOfContent = ({ content }) => {
  const classes = useStyles();
  const getIndentClasses = (contentType) => {
    if (contentType === CONTENT_TYPE.h2) return `${classes.indentH2}`;
    if (contentType === CONTENT_TYPE.h3) return `${classes.indentH3}`;
  };

  const isApplicable = (contentType) =>
    contentType === CONTENT_TYPE.h1 ||
    contentType === CONTENT_TYPE.h2 ||
    contentType === CONTENT_TYPE.h3;

  if (
    content.filter(({ contentType }) => isApplicable(contentType)).length <= 0
  ) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <Typography variant='h3'>Table of Contents</Typography>
      <div>
        <ol>
          {content.map(
            ({ contentType, text }, primaryIndex) =>
              isApplicable(contentType) && (
                <li
                  key={`${text}-${primaryIndex}`}
                  className={classes.indexList}
                >
                  <Link
                    to={`${contentType}-${primaryIndex}`}
                    className={`${classes.indexLink} ${getIndentClasses(
                      contentType,
                    )}`}
                    smooth
                    activeClass={classes.indexLinkActive}
                  >
                    {limitString(text, 15)}
                  </Link>
                </li>
              ),
          )}
        </ol>
      </div>
    </div>
  );
};

export default TableOfContent;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'sticky',
    position: '-webkit-sticky',
    top: 20,
    marginTop: '32.5rem',
    paddingLeft: '4rem',
    [theme.breakpoints.between('md', 'lg')]: {
      marginTop: '31rem',
      paddingLeft: '1rem',
      paddingRight: '2rem',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
      paddingLeft: '1rem',
      paddingRight: '2rem',
    },
  },
  indexList: {
    fontSize: '1.375rem',
    lineHeight: '1.75rem',
    fontWeight: '400',
    [theme.breakpoints.down('lg')]: {
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
