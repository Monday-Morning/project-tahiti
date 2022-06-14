/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

// libararies
import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Image from 'next/image';

const CompanyBanner = ({ data }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={classes.active}>
        <div className={classes.companyData}>
          <div>
            <Image
              src={data.image}
              alt={data.name}
              className={classes.activeImage}
            />
            <Typography variant='body1' className={classes.companyTitle}>
              {data.name}
            </Typography>
          </div>
          <div>
            <Typography variant='body2' className={classes.companysubTitle}>
              <span style={{ color: '#005299' }}>Students Recruited: </span>
              {data.students}
            </Typography>
            <Typography variant='body2' className={classes.companysubTitle}>
              <span style={{ color: '#005299' }}>CTC: </span>
              {data.ctc}
            </Typography>
            <Typography
              variant='body2'
              className={classes.showStudent}
              onClick={() => setShow(!show)}
            >
              {show ? 'Hide All Students' : 'Show All Students'}
            </Typography>
          </div>
        </div>
        {show && (
          <div className={classes.student}>
            {data.placed.map((student) => (
              <div key={student} className={classes.studentsData}>
                <Typography variant='body2' className={classes.course}>
                  {student.course}
                </Typography>
                {student.branch.map((branches) => (
                  <div key={{ ...student, ...branches }}>
                    <Typography variant='body2' className={classes.branch}>
                      {branches.branchName}
                    </Typography>
                    {branches.students.map((studentName) => (
                      <Typography variant='body2' key={studentName}>
                        {studentName}
                      </Typography>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyBanner;

const useStyles = makeStyles((theme) => ({
  active: {
    boxShadow: theme.shadows[0],
    borderRadius: '6px',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  companyData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '20px',
  },
  activeImage: {
    maxHeight: '50px',
    marginBottom: '10px',
  },
  companyTitle: {
    fontFamily: 'Source Sans Pro',
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: '10px',
  },
  companysubTitle: {
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: theme.typography.fontWeightLight,
    backgroundColor: theme.palette.primary.blue10,
    margin: '4px 0px',
  },
  student: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '0px 20px 20px 20px',
  },
  course: {
    textDecoration: 'underline',
  },
  branch: {
    fontWeight: theme.typography.fontWeightBold,
  },
  showStudent: {
    color: theme.palette.primary.blue50,
    textDecoration: 'underline',
  },
}));
