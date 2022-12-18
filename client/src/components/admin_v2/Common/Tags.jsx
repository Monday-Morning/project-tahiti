import { Cancel } from '@mui/icons-material';
import { Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useRef, useState } from 'react';

const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: '#2196f3',
        height: '100%',
        display: 'flex',
        padding: '0.4rem',
        margin: '0 0.5rem 0 0',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#ffffff',
        borderRadius: '0.5rem',
      }}
    >
      <Stack direction='row' gap={1}>
        <Typography
          sx={{
            fontSize: '.6rem',
          }}
        >
          {data}
        </Typography>
        <Cancel
          sx={{ cursor: 'pointer', fontSize: '.6rem' }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

export default function ArticleTags({ tag, underlineVisible = false }) {
  const [tags, SetTags] = useState([]);
  const tagRef = useRef();

  useEffect(() => {
    console.log(tag);
    if (tag) {
      const tagData = tag.map((data) => data.name);
      SetTags(tagData);
    }
  }, [tag]);

  const handleDelete = (value) => {
    const newtags = tags.filter((val) => val !== value);
    SetTags(newtags);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (tagRef.current.value === '') return;

    SetTags([...tags, tagRef.current.value]);
    tagRef.current.value = '';
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleOnSubmit}>
        <TextField
          inputRef={tagRef}
          fullWidth
          variant='standard'
          size='small'
          margin='none'
          placeholder={tags.length < 2 ? 'tags' : ''}
          InputProps={{
            startAdornment: (
              <Box sx={{ margin: '0 0.2rem 0 0', display: 'flex' }}>
                {tags.map((data, index) => {
                  return (
                    <Tags data={data} handleDelete={handleDelete} key={index} />
                  );
                })}
              </Box>
            ),
            disableUnderline: underlineVisible,
          }}
        />
      </form>
    </Box>
  );
}
