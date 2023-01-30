import { useEffect, useRef, useState } from 'react';

import { Cancel, Sell } from '@mui/icons-material';
import { Stack, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

import { GraphClient } from '../../../config/ApolloClient';
import updateArticleTags from '../../../graphql/mutations/article/updateArticleTags';
import createTag from '../../../graphql/mutations/tag/createTag';
import useTagAutoComplete from '../../../hooks/useTagAutoComplete';

const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: data.isAdmin ? '#ff0000' : '#2196f3',
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
            whiteSpace: 'nowrap',
          }}
        >
          {data.name}
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

export default function ArticleTags({
  tag,
  adminTags,
  isAdmin,
  id,
  setErrorMessageAndError,
}) {
  const [tags, setTags] = useState([]);
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');
  const tagRef = useRef();
  const classes = useStyles({ active });

  const autoCompleteData = useTagAutoComplete(search, isAdmin, 5);

  useEffect(() => {
    if (adminTags) {
      const adminTagData = adminTags.map((data) => ({
        ...data,
        isAdmin: true,
      }));
      setTags([...adminTagData, ...tag]);
    }
  }, []);

  const handleDelete = async (value) => {
    await updateTag(value.reference, false);
  };

  const handleCreate = async () => {
    const {
      data: { createTag: createdTag },
    } = await GraphClient.mutate({
      mutation: createTag,
      variables: {
        name: tagRef.current.value,
        isAdmin: isAdmin,
      },
    });

    await updateTag(createdTag.id, true);
  };

  const updateTag = async (tagId, isAdded) => {
    if (tags.some((tag) => tag.reference === tagId && isAdded)) {
      setErrorMessageAndError
        ? setErrorMessageAndError('Tag already exists')
        : null;
      tagRef.current.value = '';
      setActive(false);
      return false;
    }

    const {
      data: { updateArticleTags: updatedTags },
    } = await GraphClient.mutate({
      mutation: updateArticleTags,
      variables: {
        id: id,
        tag: tagId,
        isAdded: isAdded,
        isAdmin: isAdmin,
      },
    });

    const updatedAdminTags = isAdmin
      ? updatedTags.adminTags.map((data) => ({
          ...data,
          isAdmin: true,
        }))
      : [];
    const updatedTag = isAdmin ? [] : updatedTags.tags;
    setTags([...updatedAdminTags, ...updatedTag]);
    tagRef.current.value = '';
    setActive(false);
  };

  const searchQuery = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchActive = () => {
    setActive((current) => !current);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className={classes.tagForm}>
        <Box sx={{ margin: '0 0.2rem 0 0', display: 'flex' }}>
          {tags.map((data, index) => {
            return <Tags data={data} handleDelete={handleDelete} key={index} />;
          })}
        </Box>
        <Sell onClick={searchActive} sx={{ cursor: 'pointer' }} />
        <div className={classes.search}>
          <TextField
            inputRef={tagRef}
            onChange={searchQuery}
            fullWidth
            variant='outlined'
            margin='none'
            placeholder={'tags'}
            inputProps={{
              style: { height: '0px' },
            }}
          />
          {tagRef.current?.value?.length ? (
            <div className={classes.tagSuggestions}>
              {autoCompleteData?.map(({ id, name }) => (
                <div
                  key={id}
                  className={classes.tagList}
                  onClick={() => updateTag(id, true)}
                >
                  {name}
                </div>
              ))}
              <div className={classes.tagList} onClick={handleCreate}>
                Create Tag: {tagRef.current.value}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Box>
  );
}

const useStyles = makeStyles({
  search: {
    width: (_) => (_.active ? 150 : 0),
    opacity: (_) => (_.active ? 1 : 0),
    transition: '1s',
    top: '0px',
    position: 'relative',
  },
  tagForm: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  tagSuggestions: {
    position: 'absolute',
    background: '#FEFEFF',
    width: '100%',
    padding: '10px',
    zIndex: '20022',
    borderRadius: '0px 0px 5px 5px',
    border: '1px #ECEDEC',
    borderStyle: 'none solid solid',
    boxShadow: '0px 0px 5px grey',
    display: (_) => (_.active ? 'block' : 'none'),
  },
  tagList: {
    position: 'absoulte',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px',
  },
});
