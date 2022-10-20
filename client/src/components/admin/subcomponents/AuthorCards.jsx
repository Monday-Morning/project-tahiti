import * as React from 'react';

// libraries
import { useTheme } from '@mui/material/styles';
import {
  Card,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AuthorCard() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };
  console.log(personName);
  return (
    <div>
      <Card sx={{ px: 3, py: 2, mb: 3, mt: 3 }}>
        <Typography variant='h6'>Authors</Typography>
        <FormControl sx={{ width: 300, minWidth: '100%', marginTop: '10px' }}>
          <InputLabel id='demo-multiple-name-label'>Name</InputLabel>
          <Select
            labelId='demo-multiple-name-label'
            id='demo-multiple-name'
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label='Name' />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack direction='column' spacing={2}>
          {personName.map((name) => (
            <Typography variant='subtitle1'>{name}</Typography>
          ))}
        </Stack>
      </Card>
    </div>
  );
}
