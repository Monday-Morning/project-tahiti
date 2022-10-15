// libraries
import { Grid, TextField, Box } from '@mui/material';

// Components
import AuthorCardNew from '../../components/admin/subcomponents/AuthorCardNew';
import CategoryCards from '../../components/admin/subcomponents/CategoryCards';
import FeaturedMedia from '../../components/admin/subcomponents/FeaturedMedia';
import PublishCard from '../../components/admin/subcomponents/PublishCards';

const AddNew = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            style={{ width: '100%' }}
            id='outlined-basic'
            label='Title'
            variant='outlined'
          />
        </Box>
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12}>
        <PublishCard />
        <AuthorCardNew />
        <CategoryCards />
        <FeaturedMedia />
      </Grid>
    </Grid>
  </div>
);

export default AddNew;
