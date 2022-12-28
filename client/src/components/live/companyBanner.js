import React, { useEffect, useState } from 'react';

// libararies
import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Image from 'next/image';
import getStores from '../../utils/getStores';

const CompanyBanner = ({ data }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const [placedData, setPlacedData] = useState([]);

  useEffect(() => {
    let placed = {};
    data.studentsRecruited.forEach((student) => {
      if (!placed[student.degree]) {
        placed[student.degree] = {};
      }
      if (!placed[student.degree][student.branch]) {
        placed[student.degree][student.branch] = [];
      }
      placed[student.degree][student.branch].push(student.name);
    });
    setPlacedData(placed);
  }, []);

  return (
    <>
      <div className={classes.active}>
        <div className={classes.companyData}>
          <div>
            {data.company.logo.storePath && (
              <Image
                src={`${getStores[data.company.logo.store]}${
                  data.company.logo.storePath
                }`}
                width={180}
                height={180}
                alt={data.company.name}
                className={classes.activeImage}
              />
            )}
            <Typography variant='body1' className={classes.companyTitle}>
              {data.company.name}
            </Typography>
          </div>
          <div>
            <Typography variant='body2' className={classes.companysubTitle}>
              <span style={{ color: '#005299' }}>Students Recruited: </span>
              {data.recruits}
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
        {show && placedData && (
          <div className={classes.student}>
            {Object.keys(placedData).map((degree) => (
              <div key={degree} className={classes.studentsData}>
                <Typography variant='body2' className={classes.course}>
                  {degree}
                </Typography>
                {Object.keys(placedData[degree]).map((branch) => (
                  <div key={`${degree}--${branch}`}>
                    <Typography variant='body2' className={classes.branch}>
                      {branch}
                    </Typography>
                    {placedData[degree][branch].map((studentName) => (
                      <Typography
                        variant='body2'
                        key={`${degree}--${branch}--${studentName}`}
                      >
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
    flexDirection: 'column',
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
