import React from 'react';
import Image from 'next/image';
import makeStyles from '@mui/styles/makeStyles';
import STORES from '../../utils/getStores';
import NewTabLink from '../shared/links/NewTabLink';
import getArticleLink from '../../utils/getArticleLink';

function Witsdom({ witsdom }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <NewTabLink
        to={getArticleLink(witsdom[0].id, witsdom[0].title)}
        className={classes.link}
      >
        <Image
          className={classes.img}
          width={584}
          height={328}
          src={
            STORES[witsdom[0].coverMedia.rectangle.store] +
            encodeURI(witsdom[0].coverMedia.rectangle.storePath)
          }
          alt='Witsdom'
        />
      </NewTabLink>
    </div>
  );
}

export default Witsdom;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
  },
  img: {
    borderRadius: '8px',
    cursor: 'pointer',
  },
}));
