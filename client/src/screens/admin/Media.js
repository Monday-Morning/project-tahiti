import React, { useEffect, useState } from 'react';

import { Typography } from '@mui/material';

// media imports
import SharedMedia, {
  thumb,
  thumbInner,
  img,
} from '../../components/admin/subcomponents/sharedMedia';

export default function Media() {
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
    <section className='container'>
      <div {...getRootProps({ className: 'dropzone', style })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag drop some files here, or click to select files</p>
        )}
      </div>
      <Typography variant='h5' sx={{ mt: 5 }}>
        Uploaded Images
      </Typography>
      <aside
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 16,
        }}
      >
        {thumbs}
      </aside>
    </section>
  );
}
