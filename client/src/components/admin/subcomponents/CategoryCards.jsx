import React, { useState } from 'react';

// libraries
import {
  Box,
  Card,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Collapse,
  Typography,
  styled,
} from '@mui/material';

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

export default function CategoryCards() {
  const [expanded, setExpanded] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (panel) => (e) => {
    console.log(e);
    setExpanded(e.target.checked ? panel : '');
  };

  const allCategory = Object.keys(categoryNames);

  const FormLabel = styled(FormControlLabel)({
    '& .MuiFormControlLabel-label': {
      fontSize: '18px',
    },
  });

  return (
    <Box sx={{ minWidth: 275, mt: '20px' }}>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h6'>Category</Typography>
          {allCategory.map((key) => (
            <FormGroup key={categoryNames[key].title}>
              <FormLabel
                control={<Checkbox onClick={handleChange(key)} />}
                label={categoryNames[key].title}
              />
              <Collapse
                in={expanded === key}
                sx={{ ml: 3 }}
                timeout='auto'
                unmountOnExit
              >
                {categoryNames[key].children.map((sub, index) => (
                  <FormGroup key={`${index} - ${sub}`}>
                    <FormLabel control={<Checkbox />} label={sub} />
                  </FormGroup>
                ))}
              </Collapse>
            </FormGroup>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
