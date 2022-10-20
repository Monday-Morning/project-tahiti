import * as React from 'react';
import {
  Card,
  FormControl,
  Typography,
  Autocomplete,
  TextField,
} from '@mui/material';

export default function AuthorsCard() {
  return (
    <>
      <Card variant='outlined' sx={{ px: 3, py: 2, mb: 3, mt: 3 }}>
        <Typography variant='h6'>Authors</Typography>
        <FormControl sx={{ width: '100', minWidth: '100%', marginTop: '10px' }}>
          <Autocomplete
            multiple
            id='tags-outlined'
            options={names}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => <TextField {...params} label='Name' />}
          />
        </FormControl>
      </Card>
    </>
  );
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
