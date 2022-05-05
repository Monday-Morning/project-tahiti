/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Image from 'next/image';

// libararies
import { Typography, useMediaQuery } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// theme
import theme from '../../config/themes/light';

// Component
import CompanyBanner from './companyBanner';

// placeholder
import { LIVE } from '../../assets/placeholder/live';

const LiveData = ({ activeCompany, setCompany, data }) => {
  const classes = useStyles();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      {Desktop ? (
        <>
          <div className={classes.active}>
            <div className={classes.companyData}>
              <Image
                src={data[activeCompany].image}
                alt={data[activeCompany].name}
                className={classes.activeImage}
              />
              <Typography variant='body1' className={classes.companyTitle}>
                {LIVE.data[activeCompany].name}
              </Typography>
              <Typography variant='body2' className={classes.companysubTitle}>
                <span style={{ color: '#005299' }}>Students Recruited: </span>
                {data[activeCompany].students}
              </Typography>
              <Typography variant='body2' className={classes.companysubTitle}>
                <span style={{ color: '#005299' }}>CTC: </span>
                {data[activeCompany].ctc}
              </Typography>
            </div>
            {data[activeCompany].placed.map((student) => (
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
          <div className={classes.imageContainer}>
            {data.map((company, key) => (
              <div
                key={key}
                className={classes.imageWrapper}
                style={{
                  backgroundColor: activeCompany === key ? '#D9E9F7' : 'unset',
                }}
                onClick={() => setCompany(key)}
              >
                <Image
                  src={company.image}
                  alt={company.name}
                  key={company.name}
                  className={classes.images}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <Typography variant='body1' className={classes.companyNumber}>
            Showing {LIVE.data.length} Companies
          </Typography>
          {data.map((company) => (
            <CompanyBanner key={company} data={company} />
          ))}
        </>
      )}
    </>
  );
};

export default LiveData;

const useStyles = makeStyles(() => ({
  active: {
    boxShadow: theme.shadows[0],
    borderRadius: '6px',
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '20px',
  },
  activeImage: {
    maxHeight: '50px',
    marginBottom: '10px',
  },
  companyData: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: '20px',
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
  course: {
    textDecoration: 'underline',
  },
  branch: {
    fontWeight: theme.typography.fontWeightBold,
  },
  imageWrapper: {
    width: '21%',
    boxShadow: theme.shadows[0],
    borderRadius: '6px',
    padding: '12px',
    margin: '12px 0px',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '20px 0px',
  },
  companyNumber: {
    margin: '20px 20px 10px 20px',
  },
}));
