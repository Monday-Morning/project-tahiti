import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import OutlinedInput from '@mui/material/OutlinedInput';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

const categoryNames = [
  {
    id: 'department',
    title: 'Department',
    children: [
      'Biotechnology & Biomedical Engineering',
      'Ceramic Engineering',
      'Chemical Engineering',
      'Civil Engineering',
      'Computer Science and Engineering',
    ],
  },
  {
    id: 'campus',
    title: 'Campus',
    children: ['SAC Speaks', 'Campus Buzz', 'Clubs', 'Halls', 'Sports'],
  },
  {
    id: 'ddcwc',
    title: 'DD & CWC',
    children: ["Director's Desk", "Cheif Warden's Column"],
  },
  {
    id: 'views',
    title: 'Views',
    children: ['Interview', 'The CGPA', 'Student Pulse'],
  },
  {
    id: 'carrer',
    title: 'Carrer',
    children: [
      'Placements',
      'Higher Education',
      'Placement Database',
      'Internship Database',
    ],
  },
  {
    id: 'alumini',
    title: 'Alumini',
    children: ['Alumni Speaks', 'Happenings'],
  },
  {
    id: 'editorial',
    title: 'Editorial',
    children: ['Opinion', 'Science and Society', 'Anecdotes', 'Miscellaneous'],
  },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

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

export default function CategoryCards() {
  const theme = useTheme();
  const [category, setCategory] = React.useState([]);
  const [subCategory, setSubCategory] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const subhandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSubCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  let sub = [];
  categoryNames.map(({ id, children }) => {
    if (category.includes(id)) {
      children.map((child) => sub.push(child));
    }
  });

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <CardContent>
          <Title>Category</Title>
          <FormControl sx={{ width: 300, minWidth: '100%', marginTop: '10px' }}>
            <InputLabel id='demo-multiple-category-label'>Category</InputLabel>
            <Select
              labelId='demo-multiple-category-label'
              id='demo-multiple-category'
              multiple
              value={category}
              onChange={handleChange}
              input={<OutlinedInput label='Category' />}
              MenuProps={MenuProps}
            >
              {categoryNames.map(({ id, title }) => (
                <MenuItem
                  key={id}
                  value={id}
                  style={getStyles(title, title, theme)}
                >
                  {title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {category.length != 0 && (
            <FormControl
              sx={{ width: 300, minWidth: '100%', marginTop: '10px' }}
            >
              <InputLabel id='demo-multiple-sub-category-label'>
                Sub Category
              </InputLabel>
              <Select
                labelId='demo-multiple-sub-category-label'
                id='demo-multiple-sub-category'
                multiple
                value={subCategory}
                onChange={subhandleChange}
                input={<OutlinedInput label='Sub Category' />}
                MenuProps={MenuProps}
              >
                {sub.map((title, index) => (
                  <MenuItem
                    key={index}
                    value={index}
                    style={getStyles(title, title, theme)}
                  >
                    {title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
