import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// libararies
import { Typography, useMediaQuery } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// theme
import theme from '../../config/themes/light';

// Component
import CompanyBanner from './companyBanner';

// placeholder
import getStores from '../../utils/getStores';

const LiveData = ({ live }) => {
  const classes = useStyles();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [activeCompanyData, setActiveCompanyData] = useState(live[0]);
  const [placedData, setPlacedData] = useState({});

  useEffect(() => {
    let placed = {};
    if (!activeCompanyData) return;
    activeCompanyData.studentsRecruited.forEach((student) => {
      if (!placed[student.degree]) {
        placed[student.degree] = {};
      }
      if (!placed[student.degree][student.branch]) {
        placed[student.degree][student.branch] = [];
      }
      placed[student.degree][student.branch].push(student.name);
    });
    setPlacedData(placed);
  }, [activeCompanyData]);

  return (
    <>
      {Desktop ? (
        <>
          <div className={classes.active}>
            {activeCompanyData && (
              <div className={classes.companyData}>
                {activeCompanyData.company.logo.storePath && (
                  <Image
                    src={`${getStores[activeCompanyData.company.logo.store]}${
                      activeCompanyData.company.logo.storePath
                    }`}
                    width={180}
                    height={180}
                    // layout='fill'
                    alt={`${activeCompanyData.company.name} Logo`}
                    className={classes.activeImage}
                  />
                )}
                <Typography variant='body1' className={classes.companyTitle}>
                  {activeCompanyData.company.name}
                </Typography>
                <Typography variant='body2' className={classes.companysubTitle}>
                  <span style={{ color: '#005299' }}>Students Recruited: </span>
                  {activeCompanyData.recruits}
                </Typography>
                <Typography variant='body2' className={classes.companysubTitle}>
                  <span style={{ color: '#005299' }}>CTC: </span>
                  {activeCompanyData.ctc}
                </Typography>
              </div>
            )}
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
            {!activeCompanyData && !live.length && (
              <Typography variant='body1' className={classes.companyTitle}>
                The data for the selected session is not available at the
                moment.
              </Typography>
            )}
          </div>
          <div className={classes.imageContainer}>
            {live.map((item, key) => (
              <div
                key={key}
                className={classes.imageWrapper}
                style={{
                  backgroundColor:
                    activeCompanyData?.id === item.id ? '#D9E9F7' : 'unset',
                }}
                onClick={() => setActiveCompanyData(item)}
              >
                {item.company.logo.storePath && (
                  <Image
                    src={`${getStores[item.company.logo.store]}${
                      item.company.logo.storePath
                    }`}
                    width={180}
                    height={180}
                    alt={item.company.name}
                    key={`${item.company.name}--${key}`}
                    className={classes.images}
                  />
                )}
                {!item.company.logo.storePath && (
                  <Typography variant='body1' className={classes.companyTitle}>
                    {item.company.name}
                  </Typography>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <Typography variant='body1' className={classes.companyNumber}>
            Showing {live.length} Companies
          </Typography>
          {live.map((company) => (
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
