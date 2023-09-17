import React from 'react';

// Libraries
import makeStyles from '@mui/styles/makeStyles';

const LatestPodcast = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.podWrapper}>
        <iframe
          src='https://open.spotify.com/embed/show/7ljgcbXzt4VQRJ1SLIECNf?utm_source=generator&theme=0'
          width='95%'
          height='232'
          frameBorder='0'
          allowFullScreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        ></iframe>
      </div>
    </>
  );
};
export default LatestPodcast;

const useStyles = makeStyles((theme) => ({
  podWrapper: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
}));
