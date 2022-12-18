import React, { useState } from 'react';

//graphql
import { GraphClient } from '../../config/ApolloClient';
import updateArticleProps from '../../graphql/mutations/article/updateArticleProps';
import updateArticleUsers from '../../graphql/mutations/article/updateArticleUsers';
import updateArticleCategories from '../../graphql/mutations/article/updateArticleCategories';
import updateArticleRestriction from '../../graphql/mutations/article/updateArticleRestriction';
import updateArticleApprovalStatus from '../../graphql/mutations/article/updateArticleApprovalStatus';

//material ui
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

//components
import SnackBarAleart from '../../components/admin_v2/Common/SnackBarAleart';
import AuthorsCard from '../../components/admin_v2/AddNew/AuthorCards';
import CategoryCard from '../../components/admin_v2/AddNew/CategoryCard';
import Marginals from '../../components/admin_v2/Marginals/Marginals';
import FeaturedMedia from '../../components/admin_v2/Common/FeaturedMedia';
import ArticleTags from '../../components/admin_v2/Common/Tags';

//utils
import explorer from '../../utils/categoryCard';
import STORES from '../../utils/getStores';

const checkIsSame = (arr1, arr2) => {
  if (JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())) return true;
  return false;
};

const EditArticle = ({ allUsers, article }) => {
  const mobile = !useMediaQuery('(min-width:600px)');

  const {
    id,
    title,
    inshort,
    categories,
    authors,
    designers,
    photographers,
    tech,
    isInstituteRestricted,
    approvalStatus,
    coverMedia: { rectangle, square, rectangleID, squareID },
    tags,
  } = article;

  const [articleTitle, setArticleTitle] = useState(title);
  const [inShort, setInShort] = useState(inshort);

  const [contentTeam, setContentTeam] = useState(authors);
  const [designTeam, setDesignTeam] = useState(designers);
  const [techTeam, setTechTeam] = useState(tech);
  const [pnfTeam, setPnfTeam] = useState(photographers);

  const [tag, setTag] = useState(tags);

  const [coverMediaAuthors, setCoverMediaAuthors] = useState(
    rectangle?.authors || [],
  );

  const [category, setCategory] = useState(
    new Set(categories.map((c) => c.number)),
  );

  const [instituteRestricted, setInstituteRestricted] = useState(
    isInstituteRestricted,
  );
  const [approval, setApproval] = useState(approvalStatus);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const _users = allUsers.map((user) => {
    return { ...user, label: user.fullName };
  });

  const addCategories = (categoryNumber) => {
    if (category.has(categoryNumber)) {
      category.delete(categoryNumber);
      return;
    }
    setCategory((prev) => prev.add(categoryNumber));
  };

  const setErrorMessageAndError = (message) => {
    setSuccess(false);
    setError(true);
    setErrorMessage(message);
  };

  const validateArticleData = () => {
    if (articleTitle === '') {
      setErrorMessageAndError('Please enter a title');
      return false;
    }
    if (contentTeam.length === 0) {
      setErrorMessageAndError('Please select a content team member');
      return false;
    }
    if (designTeam.length === 0) {
      setErrorMessageAndError('Please select a design team member');
      return false;
    }
    if (techTeam.length === 0) {
      setErrorMessageAndError('Please select a tech team member');
      return false;
    }
    if (pnfTeam.length === 0) {
      setErrorMessageAndError('Please select a pnf team member');
      return false;
    }
    if (categories.size === 0) {
      setErrorMessageAndError('Please select a category');
      return false;
    }
    return true;
  };

  const updateArticle = async () => {
    if (!validateArticleData()) return;
    if (articleTitle !== title || inShort !== inshort) {
      try {
        await GraphClient.mutate({
          mutation: updateArticleProps,
          variables: {
            updateArticlePropsId: id,
            title: articleTitle,
            inshort: inShort,
          },
        });
      } catch (error) {
        setErrorMessageAndError('Something went wrong');
        return;
      }
    }

    if (
      !checkIsSame(
        contentTeam.map((_u) => _u.details ?? _u.id),
        authors.map((_u) => _u.details),
      ) ||
      !checkIsSame(
        designTeam.map((_u) => _u.details ?? _u.id),
        designers.map((_u) => _u.details),
      ) ||
      !checkIsSame(
        techTeam.map((_u) => _u.details ?? _u.id),
        tech.map((_u) => _u.details),
      ) ||
      !checkIsSame(
        pnfTeam.map((_u) => _u.details ?? _u.id),
        photographers.map((_u) => _u.details),
      )
    ) {
      try {
        await GraphClient.mutate({
          mutation: updateArticleUsers,
          variables: {
            updateArticleUsersId: id,
            authors: contentTeam.map((_u) => _u.details ?? _u.id),
            designers: designTeam.map((_u) => _u.details ?? _u.id),
            tech: techTeam.map((_u) => _u.details ?? _u.id),
            photographers: pnfTeam.map((_u) => _u.details ?? _u.id),
          },
        });
      } catch (error) {
        setErrorMessageAndError('Something went wrong');
        return;
      }
    }

    if (
      !checkIsSame(
        categories.map((c) => c.number),
        [...category],
      )
    ) {
      try {
        await GraphClient.mutate({
          mutation: updateArticleCategories,
          variables: {
            updateArticleCategoriesId: id,
            categoryNumbers: [...category],
          },
        });
      } catch (error) {
        setErrorMessageAndError('Something went wrong');
        return;
      }
    }

    if (isInstituteRestricted !== instituteRestricted) {
      try {
        await GraphClient.mutate({
          mutation: updateArticleRestriction,
          variables: {
            updateArticleRestrictionId: id,
            isInstituteRestricted:
              instituteRestricted === 'true' ? true : false,
          },
        });
      } catch (error) {
        setErrorMessageAndError('Something went wrong');
        return;
      }
    }

    if (approvalStatus !== approval) {
      try {
        await GraphClient.mutate({
          mutation: updateArticleApprovalStatus,
          variables: {
            updateArticleApprovalStatusId: id,
            approvalStatus: approval === 'true' ? true : false,
          },
        });
      } catch (error) {
        setErrorMessageAndError('Something went wrong');
        return;
      }
    }

    setSuccess(true);
    setErrorMessage('Article updated successfully');
    setError(true);
  };

  return (
    <Container style={{ maxWidth: '1280px' }} disableGutters={true}>
      {error && (
        <SnackBarAleart
          open={error}
          message={errorMessage}
          setOpen={setError}
          sentStatus={success}
        />
      )}

      <Marginals>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Paper
            component='form'
            sx={{
              p: '2px 4px',
              width: '90%',
            }}
          >
            <InputBase
              placeholder='Title'
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
              sx={{ ml: 1, width: '100%', fontSize: '20px', height: '40px' }}
              variant='outlined'
            />
          </Paper>

          <Button
            onClick={updateArticle}
            variant='contained'
            endIcon={<SendIcon />}
          >
            Update
          </Button>
        </Box>
        <Box sx={{ marginTop: '10px' }}>
          <ArticleTags tag={tag} />
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: mobile ? 'column' : 'row',
          }}
        >
          <Paper
            component='form'
            sx={{
              mt: '5vh',
              p: '2px 4px',
              width: '55%',
            }}
          >
            <InputBase
              placeholder='Inshort'
              multiline={true}
              minRows={4}
              value={inShort}
              onChange={(e) => setInShort(e.target.value)}
              sx={{ ml: 1, width: '100%', fontSize: '20px' }}
            />
          </Paper>
          <Paper
            sx={{
              mt: '5vh',
              p: '4px 4px',
              width: '44%',
            }}
          >
            <FormControl
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FormLabel id='row-radio-buttons'>
                Is instiute restricted?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby='row-radio-buttons'
                name='row-radio-buttons-group'
                value={instituteRestricted}
                sx={{ ml: '10px' }}
                onChange={(e) => setInstituteRestricted(e.target.value)}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label='Yes'
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label='No'
                />
              </RadioGroup>
            </FormControl>

            <FormControl
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FormLabel id='row-radio-buttons'>Is article approved?</FormLabel>
              <RadioGroup
                row
                aria-labelledby='row-radio-buttons'
                name='row-radio-buttons-group'
                value={approval}
                sx={{ ml: '10px' }}
                onChange={(e) => setApproval(e.target.value)}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label='Yes'
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label='No'
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Box>

        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '5vh',
            flexDirection: mobile ? 'column' : 'row',
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: mobile ? 'column' : 'row',
              }}
            >
              <FeaturedMedia
                height='180px'
                width='320px'
                featuredMediaTitle='rectangle 16:9'
                coverMediaAuthors={coverMediaAuthors}
                setError={setError}
                setErrorMessage={setErrorMessage}
                image={`${STORES[rectangle?.store]}${rectangle?.storePath}`}
              />
              <FeaturedMedia
                height='180px'
                width='180px'
                featuredMediaTitle='square 1:1'
                coverMediaAuthors={coverMediaAuthors}
                setError={setError}
                setErrorMessage={setErrorMessage}
                image={`${STORES[square?.store]}${square?.storePath}`}
              />
            </Box>
            <Paper style={{ marginTop: '5px', padding: '20px' }}>
              <AuthorsCard
                title='Cover Pic Authors'
                component='paper'
                users={_users}
                defaultUsers={coverMediaAuthors}
                setTeam={setCoverMediaAuthors}
              />
            </Paper>
          </Box>
          <Paper style={{ minWidth: '40%', height: '298px' }}></Paper>
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
              users={_users}
              defaultUsers={authors}
              setTeam={setContentTeam}
            />
            <AuthorsCard
              title='Designers'
              team={designTeam}
              users={_users}
              defaultUsers={designers}
              setTeam={setDesignTeam}
            />
            <AuthorsCard
              title='Photo and Film Team'
              team={pnfTeam}
              users={_users}
              defaultUsers={photographers}
              setTeam={setPnfTeam}
            />
            <AuthorsCard
              title='Tech Team'
              team={techTeam}
              users={_users}
              defaultUsers={tech}
              setTeam={setTechTeam}
            />
          </Paper>
          <Paper style={{ width: '45%', marginTop: '5vh', padding: '20px' }}>
            <CategoryCard
              category={category}
              addCategories={addCategories}
              explorer={explorer}
            />
          </Paper>
        </Box>
      </Marginals>
    </Container>
  );
};

export default EditArticle;
