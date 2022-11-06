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
    title: 'Campus',
    children: [
      'Academics',
      'Campus Buzz',
      'Forum',
      'Student Activities',
      'Halls',
      'Poll Analysis',
      'Admission',
    ],
  },
  connect: {
    title: 'Connect',
    children: ['Interviews', 'SAC Speaks', 'CGPA', 'Guest Interview'],
  },
  ddcwc: {
    title: 'DD & CWC',
    children: ["Director's Desk", "Cheif Warden's Column"],
  },
  views: {
    title: 'Career',
    children: [
      'Placements',
      'Internships',
      'Higher Eduction',
      'Guidance',
      'Live',
    ],
  },
  alumini: {
    title: 'Alumni',
    children: ['Alumni Speaks', 'Alumni Affairs'],
  },
  alumini: {
    title: 'Expressions',
    children: [
      'Witsdom',
      'Photostory',
      'Gallery',
      'NITR in Motion',
      'Podcasts',
      'Editorial',
      'Miscellaneous',
    ],
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
