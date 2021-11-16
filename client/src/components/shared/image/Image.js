import React, { useState } from 'react';

import { Tooltip, makeStyles, Backdrop, Typography } from '@material-ui/core';

export default function Image({ src }) {
  const [modalOpen, setModalOpen] = useState(false);

  const classes = useStyles();

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });

  const handleClick = (e) => {
    if (e.target.className.contains('modelImage')) {
      setModalOpen(true);
    }
  };

  return (
    <div>
      <img
        className={classes.displayImage}
        onClick={() => (modalOpen ? close() : open())}
        src={src}
      />

      <Backdrop
        onClick={() => (modalOpen ? close() : open())}
        className={classes.backdrop}
        open={modalOpen}
      >
        <div className={classes.backdropImageWraper}>
          <img className={classes.backdropImage} src={src} />
          <div className={classes.overlayColor}>
            <Typography variant='body1' className={classes.Caption}>
              Image Caption
            </Typography>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  displayImage: {
    height: 'clamp(70vh,90vh ,100% )',
    width: 'clamp(70vh,90vh ,auto )',
  },
  backdrop: {
    zIndex: '1',
  },
  backdropImage: {
    zIndex: '50',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'clamp(95vh,98vh ,99vh )',
    width: 'clamp(95vh,100vh ,auto )',
    // visbility: 'none',
  },
  backdropImageWraper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'clamp(95vh,98vh ,99vh )',
    width: 'clamp(95vh,100vh ,auto )',
    '&:hover $overlayColor': {
      visibility: 'visible',
    },
  },
  attributes: {
    // position: 'absolute',
    bottom: '2px',
    left: '10px',
    color: 'black',
    fontWeight: '900',
  },
  overlayColor: {
    visibility: 'hidden',
    zIndex: '100',
    position: 'relative',
    marginTop: '-98.5vh',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // top: '1vh',
    height: 'clamp(95vh,98vh ,99vh )',
    minWidth: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    cursor: 'pointer',
    background: 'linear-gradient(to bottom, transparent 90%, black 100%)',
  },
  Caption: {
    position: 'absolute',
    bottom: '10vh',
  },
}));
//main
