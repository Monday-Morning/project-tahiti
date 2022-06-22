import * as React from 'react';

// libraries
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  OutlinedInput,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import { styled } from '@mui/system';
import { useEffect } from 'react';

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

const categoryNames = {
  department: {
    title: 'Department',
    children: [
      'Biotechnology & Biomedical Engineering',
      'Ceramic Engineering',
      'Chemical Engineering',
      'Civil Engineering',
      'Computer Science and Engineering',
    ],
  },
  campus: {
    title: 'Campus',
    children: ['SAC Speaks', 'Campus Buzz', 'Clubs', 'Halls', 'Sports'],
  },
  ddcwc: {
    title: 'DD & CWC',
    children: ["Director's Desk", "Cheif Warden's Column"],
  },
  views: {
    title: 'Views',
    children: ['Interview', 'The CGPA', 'Student Pulse'],
  },
  carrer: {
    title: 'Carrer',
    children: [
      'Placements',
      'Higher Education',
      'Placement Database',
      'Internship Database',
    ],
  },
  alumini: {
    title: 'Alumini',
    children: ['Alumni Speaks', 'Happenings'],
  },
  editorial: {
    title: 'Editorial',
    children: ['Opinion', 'Science and Society', 'Anecdotes', 'Miscellaneous'],
  },
};

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
  const [subCategoryList, setSubCategoryList] = React.useState([]);

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

  useEffect(() => {
    category.map((cat) => {
      setSubCategoryList([subCategoryList, categoryNames[cat].children].flat())
    });
  }, [category]);
  const allCategory = Object.keys(categoryNames);

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
              {allCategory.map((key) => (
                <MenuItem
                  key={key}
                  value={key}
                  style={getStyles(categoryNames[key].title, categoryNames[key].title, theme)}
                >
                  {categoryNames[key].title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {subCategoryList.length != 0 && (
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
                {subCategoryList.map((title, index) => (
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
