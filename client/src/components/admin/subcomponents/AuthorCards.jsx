import * as React from 'react';
import {
  Card,
  FormControl,
  Typography,
  Autocomplete,
  TextField,
} from '@mui/material';

export default function AuthorsCard({ title, users, setTeam }) {
  return (
    <>
      <div>
        <Typography variant='h6'>{title}</Typography>
        <FormControl sx={{ width: '100', minWidth: '100%', margin: '10px 0' }}>
          <Autocomplete
            multiple
            id='multiple-limit-tags'
            options={users}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderOption={(props, users) => (
              <li {...props} key={users.id}>
                {users.fullName}
              </li>
            )}
            onChange={(e, value) => {
              setTeam(value);
              console.log(value);
            }}
            renderInput={(params) => (
              <TextField required={true} {...params} label='Name' />
            )}
          />
        </FormControl>
      </div>
    </>
  );
}
