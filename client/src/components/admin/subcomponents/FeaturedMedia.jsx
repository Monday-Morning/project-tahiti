/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Card } from '@mui/material';
import { styled } from '@mui/system';

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const thumbsContainer = {
  width: '100%',
  height: 'auto',
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: '100%',
  height: 'auto',
};

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

export default function FeaturedMedia() {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    // accept: "image/*",
    onDrop: (acceptedFiles) => {
      // console.log('accepted', acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const style = React.useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
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
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files],
  );
  console.log(thumbs.length);
  return (
    <Card sx={{ px: 3, py: 2, mb: 3, mt: 3 }}>
      <Title>Featured Media</Title>
      <section style={{ marginTop: '10px' }} className='container'>
        <div {...getRootProps({ className: 'dropzone', style })}>
          <input {...getInputProps()} />
          {thumbs.length ? (
            <aside style={thumbsContainer}>{thumbs}</aside>
          ) : isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag drop some files here, or click to select files</p>
          )}
          {/* {isDragActive ? <p>Drop the files here ...</p> : <p>Drag drop some files here, or click to select files</p>} */}
        </div>
        {/* <aside style={thumbsContainer}>{thumbs}</aside> */}
      </section>
    </Card>
  );
}
