/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

// libraries
import { Card, Typography } from '@mui/material';

// media imports
import SharedMedia, { img, thumb, thumbInner, Title } from './sharedMedia';

export default function FeaturedMedia() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, style, isDragActive } = SharedMedia(
    files,
    setFiles,
  );

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img alt='selected' src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files],
  );

  return (
    <Card sx={{ px: 3, py: 2, mb: 3, mt: 3 }}>
      <Typography variant='h6'>Featured Media</Typography>
      <section style={{ marginTop: '10px' }} className='container'>
        <div {...getRootProps({ className: 'dropzone', style })}>
          <input {...getInputProps()} />
          {thumbs.length ? (
            <aside
              style={{
                width: '100%',
                height: 'auto',
              }}
            >
              {thumbs}
            </aside>
          ) : isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag drop some files here, or click to select files</p>
          )}
        </div>
      </section>
    </Card>
  );
}
