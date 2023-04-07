import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Card, CardContent, Button } from '@mui/material';

// Components
import MarkdownWrapper from '../shared/MarkdownWrapper';

// Theme
import theme from '../../config/themes/light';

function Squiggles({ data }) {
  const classes = useStyles(theme);

  return (
    <Card className={classes.squigglesCard}>
      <CardContent>
        <div className={classes.squigglesWrapper}>
          <div className={classes.buttonWrapper}>
            <Button className={classes.squigglesButton} disabled>
              Squiggles
            </Button>
          </div>
          <div className={classes.squigglesTextWrapper}>
            <div className={classes.squigglesText}>
              <MarkdownWrapper variant='body1' styles={classes.squigglesText}>
                {data.content}
              </MarkdownWrapper>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Squiggles;

const useStyles = makeStyles(() => ({
  squigglesCard: {
    backgroundColor: theme.palette.accent.squiggles,
    boxShadow: theme.shadows[0],
    marginTop: 25,
    paddingTop: 10,
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
    },
  },
  squigglesWrapper: {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: 'repeat(5,1fr)',
    alignItems: 'center',
    paddingLeft: '25px',
    paddingRight: '25px',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      padding: 'unset',
    },
  },
  buttonWrapper: {
    textAlign: 'center',
    gridArea: '1 / 1 / 2 / 2',
  },
  squigglesButton: {
    backgroundColor: theme.palette.accent.squigglesButton,
    color: '#ffffff !important',
    marginRight: '40px',
    textTransform: 'unset',
    [theme.breakpoints.down('md')]: {
      marginRight: 'auto',
      marginBottom: '10px',
    },
  },
  squigglesText: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: '400',
    hyphens: 'auto',
    fontFamily: 'IBM Plex Sans',
  },
  squigglesTextWrapper: {
    gridArea: '1 / 2 / 2 / 6',
  },
}));
