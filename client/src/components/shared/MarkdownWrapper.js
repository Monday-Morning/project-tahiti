/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

function MarkdownWrapper({ children, variant, styles }) {
  const classes = useStyles();

  return (
    <ReactMarkdown
      ordered='true'
      remarkPlugins={[remarkGfm]}
      components={{
        // h1: ({ node, ...props }) => <h1 className={styles} {...props} />,
        // h2: ({ node, ...props }) => <h2 className={styles} {...props} />,
        // h3: ({ node, ...props }) => <h3 className={styles} {...props} />,
        // h4: ({ node, ...props }) => <h4 className={styles} {...props} />,
        // h5: ({ node, ...props }) => <h5 className={styles} {...props} />,
        // h6: ({ node, ...props }) => <h6 className={styles} {...props} />,
        p: ({ node, ...props }) => (
          <Typography variant={variant} className={styles} {...props} />
        ),
        ol: ({ node, ...props }) => (
          <Typography variant={variant} className={styles} {...props}>
            <ol className={classes.orderedList} {...props} />
          </Typography>
        ),
        ul: ({ node, ...props }) => (
          <Typography variant={variant} className={styles} {...props}>
            <ul className={classes.unorderedList} {...props} />
          </Typography>
        ),
        li: ({ node, ...props }) => <li className={styles} {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

const useStyles = makeStyles(() => ({
  orderedList: {
    listStyleType: 'lower-alpha',
    marginTop: '1rem',
    marginBottom: '1rem',
    marginLeft: '2rem',
    textAlign: 'justify',
    fontWeight: 'normal',
  },
  unorderedList: {
    listStyleType: 'circle',
    marginTop: '1rem',
    marginBottom: '1rem',
    marginLeft: '2rem',
    textAlign: 'justify',
    fontWeight: 'normal',
  },
}));

export default MarkdownWrapper;
