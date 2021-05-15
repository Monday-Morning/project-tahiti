/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

// libararies
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// placeholder
import { LIVE } from '../../assets/placeholder/live';

const LiveData = () => {
  const classes = useStyles();
  const [degree, setDegree] = useState('B.Tech');
  const [department, setDepartment] = useState(LIVE.departments[0]);
  const [activeCompany, setCompany] = useState(0);

  const selectDepartment = (branch) => {
    setDepartment(branch);
  };

  const handleChange = (event) => {
    setDegree(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '25%' }}>
          <Typography variant='h2' className={classes.title}>
            Courses
          </Typography>
          <div className={classes.radioWrapper}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div className={classes.radioButton}>
                <input
                  type='radio'
                  checked={degree === 'B.Tech'}
                  onChange={handleChange}
                  value='B.Tech'
                  className={classes.radio}
                />
              </div>
              <Typography variant='body1' className={classes.radioText}>
                B.Tech
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div className={classes.radioButton}>
                <input
                  type='radio'
                  checked={degree === 'M.Tech'}
                  onChange={handleChange}
                  value='M.Tech'
                  className={classes.radio}
                />
              </div>
              <Typography variant='body1' className={classes.radioText}>
                M.Tech
              </Typography>
            </div>
          </div>
          <Typography variant='h2' className={classes.title}>
            Departments
          </Typography>
          <div className={classes.branchWrapper}>
            {LIVE.departments.map((branch) => (
              <div
                key={branch}
                style={{
                  backgroundColor: department === branch ? '#006DCC' : 'unset',
                  color: department === branch ? 'white' : 'black',
                  borderRadius: '6px',
                  padding: '1px 6px',
                  cursor: 'pointer',
                }}
                onClick={() => selectDepartment(branch)}
              >
                <Typography
                  variant='body1'
                  style={{
                    fontSize: '18px',
                    lineHeight: '28px',
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 400,
                  }}
                >
                  {branch}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: '70%' }}>
          <div className={classes.active}>
            <div className={classes.companyData}>
              <img
                src={LIVE.data[activeCompany].image}
                alt={LIVE.data[activeCompany].name}
                className={classes.activeImage}
              />
              <Typography variant='body1' className={classes.companyTitle}>
                {LIVE.data[activeCompany].name}
              </Typography>
              <Typography variant='body2' className={classes.companysubTitle}>
                <span style={{ color: '#005299' }}>Students Recruited: </span>
                {LIVE.data[activeCompany].students}
              </Typography>
              <Typography variant='body2' className={classes.companysubTitle}>
                <span style={{ color: '#005299' }}>CTC: </span>
                {LIVE.data[activeCompany].ctc}
              </Typography>
            </div>
            {LIVE.data[activeCompany].placed.map((student) => (
              <div className={classes.studentsData}>
                <Typography variant='body2' className={classes.course}>
                  {student.course}
                </Typography>
                {student.branch.map((branches) => (
                  <div>
                    <Typography variant='body2' className={classes.branch}>
                      {branches.branchName}
                    </Typography>
                    {branches.students.map((studentName) => (
                      <Typography
                        variant='body2'
                        className={classes.student}
                        key={studentName}
                      >
                        {studentName}
                      </Typography>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={classes.imageContainer}>
            {LIVE.data.map((data, key) => (
              <div
                className={classes.imageWrapper}
                style={{
                  backgroundColor: activeCompany === key ? '#D9E9F7' : 'unset',
                }}
                onClick={() => setCompany(key)}
              >
                <img
                  src={data.image}
                  alt={data.name}
                  key={data.name}
                  className={classes.images}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveData;

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '2rem 0rem 1rem 0rem',
    color: theme.palette.secondary.main,
  },
  radioWrapper: {
    padding: '8px 24px',
    boxShadow: theme.shadows[0],
    borderRadius: '6px',
  },
  branchWrapper: {
    padding: '8px 4px',
    boxShadow: theme.shadows[0],
    borderRadius: '6px',
  },
  radioButton: {
    border: '1px solid',
    borderColor: theme.palette.primary.blue50,
    width: '16px',
    height: '16px',
    display: 'flex',
  },
  radio: {
    margin: 'auto',
    width: '8px',
    height: '8px',
    appearance: 'none',
    '&:checked': {
      backgroundColor: theme.palette.primary.blue50,
    },
  },
  radioText: {
    marginLeft: '4px',
    fontSize: '18px',
    lineHeight: '28px',
    fontFamily: 'Source Sans Pro',
    fontWeight: theme.typography.fontWeightLight,
  },
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
}));
