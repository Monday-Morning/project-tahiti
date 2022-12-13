import React, { useMemo } from 'react';

// libraries
import { styled } from '@mui/system';
import { useDropzone } from 'react-dropzone';

export const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
}));

export const thumb = {
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: '412px',
  height: '300px',
  boxSizing: 'border-box',
};

export const thumbInner = {
  overflow: 'hidden',
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

const SharedMedia = (files, setFiles) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log('accepted', acceptedFiles);
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

  return useMemo(() => {
    return {
      getRootProps,
      getInputProps,
      style,
      isDragActive,
    };
  }, []);
};

export default SharedMedia;
