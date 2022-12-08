import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import Marginals from '../../components/admin_v2/Marginals/Marginals';
import SnackBarAleart from '../../components/admin_v2/Common/SnackBarAleart';
import AuthorsCard from '../../components/admin_v2/AddNew/AuthorCards';
import CategoryCard from '../../components/admin_v2/AddNew/CategoryCard';
import explorer from '../../utils/categoryCard';
import { GraphClient } from '../../config/ApolloClient';
import createArticle from '../../graphql/mutations/article/createArticle';

const AddNew = ({ allUsers }) => {
  const { push } = useRouter();

  const [title, setTitle] = useState('');

  const [contentTeam, setContentTeam] = useState([]);
  const [designTeam, setDesignTeam] = useState([]);
  const [techTeam, setTechTeam] = useState([]);
  const [pnfTeam, setPnfTeam] = useState([]);

  const [categories, setCategories] = useState(new Set());

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const _users = allUsers.map((user) => {
    return { ...user, label: user.fullName };
  });

  const addCategories = (categoryNumber) => {
    if (categories.has(categoryNumber)) {
      categories.delete(categoryNumber);
      return;
    }
    setCategories((prev) => prev.add(categoryNumber));
  };

  const validateArticleData = () => {
    if (title === '') {
      setError(true);
      setErrorMessage('Please enter a title');
      return;
    }
    if (contentTeam.length === 0) {
      setError(true);
      setErrorMessage('Please select a content team member');
      return;
    }
    if (designTeam.length === 0) {
      setError(true);
      setErrorMessage('Please select a design team member');
      return;
    }
    if (techTeam.length === 0) {
      setError(true);
      setErrorMessage('Please select a tech team member');
      return;
    }
    if (pnfTeam.length === 0) {
      setError(true);
      setErrorMessage('Please select a pnf team member');
      return;
    }
    if (categories.size === 0) {
      setError(true);
      setErrorMessage('Please select a category');
      return;
    }
  };

  const createNewArticle = () => {
    validateArticleData();

    GraphClient.mutate({
      mutation: createArticle,
      variables: {
        articleType: 'STANDARD',
        title,
        authors: contentTeam.map((user) => user.id),
        designers: designTeam.map((user) => user.id),
        tech: techTeam.map((user) => user.id),
        photographers: pnfTeam.map((user) => user.id),
        categoryNumbers: Array.from(categories),
      },
    })
      .then(() => {
        push('/admin_v2/browse');
      })
      .catch(() => {
        setError(true);
        setErrorMessage('Failed to create article');
      });
  };

  return (
    <div>
      {error && (
        <SnackBarAleart
          open={error}
          message={errorMessage}
          setOpen={setError}
          sentStatus={false}
        />
      )}

      <Marginals>
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Paper
            component='form'
            sx={{
              p: '2px 4px',
              width: '90%',
            }}
          >
            <InputBase
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ ml: 1, width: '100%', fontSize: '20px', height: '50px' }}
            />
          </Paper>

          <Button
            onClick={createNewArticle}
            variant='contained'
            endIcon={<SendIcon />}
          >
            Add New
          </Button>
        </Box>

        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Paper
            component='form'
            style={{ width: '50%', marginTop: '5vh', padding: '20px' }}
          >
            <AuthorsCard
              title='Authors'
              component='paper'
              team={contentTeam}
              users={_users}
              setTeam={setContentTeam}
            />
            <AuthorsCard
              title='Designers'
              team={designTeam}
              users={_users}
              setTeam={setDesignTeam}
            />
            <AuthorsCard
              title='Photo and Film Team'
              team={pnfTeam}
              users={_users}
              setTeam={setPnfTeam}
            />
            <AuthorsCard
              title='Tech Team'
              team={techTeam}
              users={_users}
              setTeam={setTechTeam}
            />
          </Paper>
          <Paper style={{ width: '45%', marginTop: '5vh', padding: '20px' }}>
            <CategoryCard addCategories={addCategories} explorer={explorer} />
          </Paper>
        </Box>
      </Marginals>
    </div>
  );
};

export default AddNew;
