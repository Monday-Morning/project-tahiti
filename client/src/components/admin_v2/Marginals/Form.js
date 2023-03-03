import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import {
  Autocomplete,
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import { Box } from '@mui/system';

export default function Form() {
  const classes = useStyles();

  const [accountType, setAccountType] = useState(0);
  const [team, setTeam] = useState([]);

  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleAccount = (event) => {
    setAccountType(event.target.value);
  };

  const handleTeam = (event) => {
    setTeam(event.target.value);
  };

  return (
    <>
      <TextField size='small' label='Search' fullWidth />
      <Box className={classes.avatarWrapper}>
        <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Avatar
            className={classes.avatar}
            src='https://i.pravatar.cc/150?img=12'
          />
          {hover && <Edit />}
        </Button>
        <div className={classes.profile}>
          <Typography variant='h6'>Rutaj Dash</Typography>
          <Typography variant='body2'>Mentor</Typography>
        </div>
      </Box>

      <Grid className={classes.formWrapper} container spacing={2}>
        {formElements.details.map((detail) => (
          <Grid item xs={6}>
            <TextField
              required
              size='small'
              label={detail}
              className={classes.input}
              fullWidth
            />
          </Grid>
        ))}

        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              select
              required
              id='select'
              label='Account-type'
              size='small'
              sx={{ width: 'fullWidth' }}
              value={accountType}
              onChange={handleAccount}
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>NITR</MenuItem>
              <MenuItem value={3}>MM</MenuItem>
              <MenuItem value={4}>NITR Faculty</MenuItem>
            </TextField>

            <FormControl
              sx={{ ml: 2, mt: 2 }}
              disabled={accountType === 3 ? null : true}
            >
              <FormLabel id='position'>Position</FormLabel>
              <RadioGroup
                row
                aria-labelledby='position'
                name='row-radio-buttons-group'
              >
                {formElements.positions.map((position) => (
                  <FormControlLabel
                    control={<Radio />}
                    value={position}
                    label={position}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <FormControl
              component='fieldset'
              sx={{ ml: 2, mt: 1 }}
              disabled={accountType === 3 ? null : true}
            >
              <FormLabel component='legend'>Team</FormLabel>
              <FormGroup
                aria-label='Team'
                name='team'
                value={team}
                onChange={handleTeam}
                row
              >
                {formElements.teams.map((team) => (
                  <FormControlLabel
                    value={team}
                    control={<Checkbox />}
                    label={team}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            multiple
            id='inteested-topics'
            size='small'
            sx={{ width: 'fullWidth' }}
            options={top100Interests}
            getOptionLabel={(option) => option.title}
            defaultValue={[top100Interests[13]]}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Interested Topics'
                placeholder='Favorites'
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant='body1' mb={1}>
            Session
          </Typography>
          <TextField
            required
            label='Year'
            size='small'
            onChange={handleAccount}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='Newsletter Subscribed'
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1'>Bio</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={4}
            size='small'
            placeholder='Write about yourself...'
            className={classes.input}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1'>Profile Urls</Typography>
        </Grid>
        {formElements.profiles.map((profile) => (
          <Grid item xs={6}>
            <TextField
              size='small'
              label={profile}
              className={classes.input}
              fullWidth
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='Banned'
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' size='medium'>
            Update
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingLeft: '1em',
    borderRadius: 10,
    marginBottom: 12,
    color: theme.palette.secondary.neutral70,
  },
  avatar: {
    width: 56,
    height: 56,
    marginRight: '1em',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  formWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '2rem',
    paddingLeft: '1rem',
  },
  // input: {
  //   margin: 8,
  // },
  // newsLetter: {
  //   ml: 1,
  // },
}));

const top100Interests = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
];

const formElements = {
  details: ['First Name', 'Last Name', 'Email', 'NITR-mail'],
  positions: ['Member', 'Coordinator', 'Mentor'],
  teams: ['PnF', 'Tech', 'Content', 'Design'],
  profiles: [
    'LinkedIn',
    'GitHub',
    'Twitter',
    'Facebook',
    'Instagram',
    'Website',
  ],
};
