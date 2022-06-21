import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/system';

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const select = {
  minWidth: '100%',
  marginBottom: '5px',
  marginTop: '5px',
};

const selectItems = {
  minWidth: '100%',
};

export default function PublishCards() {
  const [status, setStatus] = React.useState('');
  const [publish, setPublish] = React.useState('');

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <CardContent>
          <Title>Publish</Title>
          <div>
            <FormControl style={select}>
              <InputLabel id='demo-simple-select-autowidth-label'>
                Status
              </InputLabel>
              <Select
                labelId='demo-simple-select-autowidth-label'
                id='demo-simple-select-autowidth'
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                autoWidth
                label='Status'
              >
                <MenuItem sx={{ minWidth: '100%' }} value='Published'>
                  Published
                </MenuItem>
                <MenuItem sx={{ minWidth: '100%' }} value='Unpublished'>
                  Unpublished
                </MenuItem>
                <MenuItem sx={{ minWidth: '100%' }} value='Archive'>
                  Archive
                </MenuItem>
                <MenuItem sx={{ minWidth: '100%' }} value='Status'>
                  Status
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl style={select}>
              <InputLabel id='demo-simple-select-autowidth-label'>
                Publish
              </InputLabel>
              <Select
                labelId='demo-simple-select-autowidth-label'
                id='demo-simple-select-autowidth'
                value={publish}
                onChange={(e) => {
                  setPublish(e.target.value);
                }}
                autoWidth
                label='Publish'
              >
                <MenuItem style={selectItems} value='Immediately'>
                  Immediately
                </MenuItem>
                <MenuItem style={selectItems} value='date-time'>
                  Given Date/ Time
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label='Ask A Question' />
            <FormControlLabel control={<Checkbox />} label='Poll Analysis' />
            <FormControlLabel control={<Checkbox />} label='Restrict to LAN' />
          </FormGroup>
        </CardContent>
      </Card>
    </Box>
  );
}
