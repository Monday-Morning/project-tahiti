import React from 'react';
import Image from 'next/image';
import makeStyles from '@mui/styles/makeStyles';
import STORES from '../../utils/getStores';
import NewTabLink from '../shared/links/NewTabLink';
import getArticleLink from '../../utils/getArticleLink';

function PhotoStory({ photostory }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <NewTabLink
        to={getArticleLink(photostory[0].id, photostory[0].title)}
        className={classes.link}
      >
        <Image
          width={584}
          height={328}
          src={
            STORES[photostory[0].coverMedia.rectangle.store] +
            encodeURI(photostory[0].coverMedia.rectangle.storePath)
          }
          alt='PhotoStory'
        />
      </NewTabLink>
    </div>
  );
}

export default PhotoStory;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderRadius: '8px',
    width: '100%',
  },
}));
