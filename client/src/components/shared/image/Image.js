import React, { useState } from 'react';

import { Tooltip, makeStyles, Backdrop } from '@material-ui/core';

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
      <Tooltip arrow title='image' placement='right-start'>
        <img
          className={classes.displayImage}
          onClick={() => (modalOpen ? close() : open())}
          src={src}
        />
      </Tooltip>

      <Backdrop
        onClick={() => (modalOpen ? close() : open())}
        className={classes.backdrop}
        open={modalOpen}
      >
        <div>
          <Tooltip arrow title='image' placement='right-start'>
            <img className={classes.backdropImage} src={src} />
          </Tooltip>
          <p className={classes.attributes}>Credits: Design Team</p>
        </div>
      </Backdrop>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  displayImage: {
    height: 'clamp(70vh,90vh ,100% )',
    width: 'clamp(70vh,90vh ,100% )',
  },
  backdrop: {
    zIndex: '1',
  },
  backdropImage: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    // height: '90vh',
    height: 'clamp(95vh,100vh ,90vh )',
    // width: 'clamp(95vh,100vh ,100vh )',
  },
  attributes: {
    position: 'absolute',
    bottom: '2px',
    left: '10px',
    color: 'black',
    fontWeight: '900',
  },
}));
//main
