// libraries
import { Grid, TextField, Button } from '@mui/material';

// Components
import AuthorCards from '../../components/admin/subcomponents/AuthorCards';
import CategoryCards from '../../components/admin/subcomponents/CategoryCards';
import FeaturedMedia from '../../components/admin/subcomponents/FeaturedMedia';

const AddNew = () => (
  <div>
    <TextField
      style={{ width: '100%', backgroundColor: '#fff' }}
      id='outlined-basic'
      label='Title'
      variant='outlined'
    />
    <Grid sx={{ mt: '10px' }} container spacing={3}>
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
    <Grid container spacing={3}>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <CategoryCards />
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
    </Grid>
  </div>
);

export default AddNew;
