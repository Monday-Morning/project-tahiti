/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

// libraries
import { Card, Typography } from '@mui/material';

// media imports
import SharedMedia, { thumb, thumbInner } from './sharedMedia';
import imagekit from '../../../utils/imagekit';

// graphql
import { GraphClient } from '../../../config/ApolloClient';
import addMedia from '../../../graphql/mutations/media/addMedia';

export default function FeaturedMedia({
  height,
  width,
  featuredMediaTitle,
  image,
  coverMediaAuthors,
  setError,
  setErrorMessage,
}) {
  const [files, setFiles] = useState([{ name: image, preview: image }]);
  const { getRootProps, getInputProps, style, isDragActive } = SharedMedia(
    files,
    setFiles,
  );

  useEffect(() => {
    if (files[0].name === image) return;

    if (coverMediaAuthors.length === 0) {
      setError(true);
      setErrorMessage('Please add authors to the Cover Media');
      setFiles([{ name: image, preview: image }]);
      return;
    }
    (async () => {
      await imagekit
        .upload({
          file: files[0].preview,
          folder: '/article/cover',
          fileName: files[0].name,
          tags: [files[0].name, 'coverpic'],
        })
        .then((result) => {
          console.log('Upload Result', result);

          GraphClient.mutate({
            mutation: addMedia,
            variables: {
              imageKitFileId: result.fileId,
              authors: coverMediaAuthors.map((_u) => _u.details ?? _u.id),
              storePath: result.filePath,
              store: 2,
            },
          }).then((res) => {
            console.log('Media Added', res);
            setError(false);
            setErrorMessage('Image Uploaded Successfully');
            return;
          });
        })
        .catch((error) => {
          console.log('Upload Error', error);
        });
    })();
  }, [files, coverMediaAuthors]);

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img alt='selected' src={file.preview} height={height} width={width} />
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
    <Card sx={{ px: 3, py: 2, minHeight: '270px' }}>
      <Typography variant='h6'>Featured media {featuredMediaTitle}</Typography>
      <section style={{ marginTop: '10px' }} className='container'>
        <div {...getRootProps({ className: 'dropzone', style })}>
          <input {...getInputProps()} />
          {thumbs.length ? (
            <aside
              style={{
                width: width,
                height: height,
              }}
            >
              {thumbs}
            </aside>
          ) : isDragActive ? (
            <p style={{ fontSize: '15px' }}>Drop the files here ...</p>
          ) : (
            <p style={{ fontSize: '15px' }}>
              Drag drop some files here, or click to select files
            </p>
          )}
        </div>
      </section>
    </Card>
  );
}
