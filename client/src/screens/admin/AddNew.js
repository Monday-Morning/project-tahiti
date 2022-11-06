import React, { useState } from 'react';

// libraries
import { Grid, TextField, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';

// Components
import AuthorsCard from '../../components/admin/subcomponents/AuthorCards';
import CategoryCards from '../../components/admin/subcomponents/CategoryCards';
import FeaturedMedia from '../../components/admin/subcomponents/FeaturedMedia';

const AddNew = ({ allUsers }) => {
  const [title, setTitle] = useState('');
  const [contentTeam, setContentTeam] = useState([]);
  const [designTeam, setDesignTeam] = useState([]);
  const [pnfTeam, setPnfTeam] = useState([]);
  const [techTeam, setTechTeam] = useState([]);

  console.log(contentTeam, designTeam, pnfTeam, techTeam);

  const _users = allUsers.map((user) => {
    return { ...user, label: user.fullName };
  });

  return (
    <div>
      <FormControl style={{ width: '100%' }}>
        <TextField
          required={true}
          style={{ width: '100%', backgroundColor: '#fff' }}
          id='outlined-basic'
          label='Title'
          variant='outlined'
          onChange={(e) => setTitle(e.target.value)}
        />
        <Grid
          style={{
            display: 'flex',
            height: '100%',
          }}
        >
          <Grid
            style={{
              width: '50%',
              marginTop: '20px',
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            container
          >
            <Grid
              style={{ marginTop: '10px' }}
              item
              lg={11}
              md={4}
              sm={12}
              xs={12}
            >
              <AuthorsCard
                team={contentTeam}
                setTeam={setContentTeam}
                users={_users}
                title={'Content'}
              />
            </Grid>

            <Grid
              style={{ marginTop: '10px' }}
              item
              lg={11}
              md={4}
              sm={12}
              xs={12}
            >
              <AuthorsCard
                team={designTeam}
                setTeam={setDesignTeam}
                users={_users}
                title={'Design'}
              />
            </Grid>

            <Grid
              style={{ marginTop: '10px' }}
              item
              lg={11}
              md={4}
              sm={12}
              xs={12}
            >
              <AuthorsCard
                team={pnfTeam}
                setTeam={setPnfTeam}
                users={_users}
                title={'Photo and Film'}
              />
            </Grid>

            <Grid
              style={{ marginTop: '10px' }}
              item
              lg={11}
              md={4}
              sm={12}
              xs={12}
            >
              <AuthorsCard
                team={techTeam}
                setTeam={setTechTeam}
                users={_users}
                title={'Tech'}
              />
            </Grid>
          </Grid>

          <Grid
            style={{
              width: '50%',
              marginTop: '20px',
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            container
          >
            <CategoryCards />
          </Grid>
        </Grid>
        {/* <Grid container spacing={3}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
        </Grid>
      </Grid> */}
        {/* <Grid sx={{ mt: '10px' }} container spacing={3}>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Button sx={{ width: '100%', height: '50px' }} variant='contained'>
          Create
        </Button>
      </Grid>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <TextField
          style={{ width: '100%', backgroundColor: '#fff' }}
          id='outlined-basic'
          label='Title'
          variant='outlined'
        />
      </Grid>
    </Grid>
   

      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={6} md={5}>
            <FeaturedMedia />
          </Grid>
          <Grid item xs={6} md={7}>
            <FeaturedMedia />
          </Grid>
        </Grid>

        <AuthorCards />
      </Grid>
    </Grid> */}
        <Button
          sx={{ width: '10%', height: '50px', marginTop: '20px' }}
          color='primary'
          variant='contained'
        >
          Create
        </Button>
      </FormControl>
    </div>
  );
};

export default AddNew;
