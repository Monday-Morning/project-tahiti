import * as React from 'react';
import {
  Card,
  FormControl,
  Typography,
  Autocomplete,
  TextField,
} from '@mui/material';

export default function AuthorsCard({ title, users, setTeam, defaultUsers }) {
  const _defaultUsers = defaultUsers?.map((user) => {
    return { ...user, label: user.name, id: user.details };
  });

  return (
    <>
      <div>
        <Typography>{title}</Typography>
        <FormControl
          component='paper'
          sx={{ width: '100', minWidth: '100%', margin: '20px 0' }}
        >
          <Autocomplete
            multiple
            id='multiple-limit-tags'
            options={users}
            defaultValue={_defaultUsers}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderOption={(props, users) => (
              <li {...props} key={users.id}>
                {users.fullName}
              </li>
            )}
            onChange={(e, value) => {
              setTeam(value);
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
