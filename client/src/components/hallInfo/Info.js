import React from 'react';

// Libraries
import { Grid, Typography } from '@mui/material';
import DropDownCard from '../widgets/DropDownCard';
import CallIcon from '@mui/icons-material/Call';
import makeStyles from '@mui/styles/makeStyles';
import Image from 'next/image';

// Placeholder
import { hallinfo } from '../../assets/placeholder/hallInfo';

const Info = () => {
  const classes = useStyles();
  return (
    <div>
      {hallinfo.dropdown.map((item1, key) => (
        <DropDownCard title={item1.title} className={classes.title} key={key}>
          <Grid container>
            <Grid item md={6} className={classes.contactDetails}>
              <div className={classes.info}>
                <div className={classes.contact}>
                  {item1.contact.map((item, key) => (
                    <div
                      className={classes.contactContainer}
                      style={{ margin: '5px', width: '40%' }}
                    >
                      {item.designation && (
                        <Typography variant='body1' className={classes.grey}>
                          {item.designation}
                        </Typography>
                      )}
                      {item.name && (
                        <Typography
                          variant='body1'
                          className={classes.normalText}
                        >
                          Name: {item.name}
                        </Typography>
                      )}
                      {item.email && (
                        <Typography
                          variant='body1'
                          className={classes.normalText}
                        >
                          Email: {item.email}
                        </Typography>
                      )}
                      {item.phone && (
                        <Typography
                          variant='body1'
                          className={classes.normalText}
                        >
                          <CallIcon className={classes.phoneIcon} />{' '}
                          {item.phone}
                        </Typography>
                      )}
                    </div>
                  ))}
                </div>
                {/* <div
                  className={classes.hncConatiner}
                  style={{ padding: '5px' }}
                >
                  <Typography className={classes.hncTitle}>
                    HNC Members
                  </Typography>
                  <div className={classes.hnc}>
                    {item1.hnc.map((item, key) => (
                      <div>
                        {item.year && (
                          <Typography variant='body1' className={classes.grey}>
                            {item.year}
                          </Typography>
                        )}
                        {item.name && (
                          <Typography
                            variant='body1'
                            className={classes.normalText}
                          >
                            Name: {item.name}
                          </Typography>
                        )}
                        {item.email && (
                          <Typography
                            variant='body1'
                            className={classes.normalText}
                          >
                            Email: {item.email}
                          </Typography>
                        )}
                        {item.phone && (
                          <Typography
                            variant='body1'
                            className={classes.normalText}
                          >
                            <CallIcon className={classes.phoneIcon} />
                            {item.phone}
                          </Typography>
                        )}
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </Grid>
            <Grid item md={6}>
              <Grid
                container
                style={{ padding: '5px' }}
                alignItems='center'
                justify='center'
              >
                <Grid item>
                  {item1.details.map((item, key) => (
                    <Grid container className={classes.underText}>
                      {item.pic && (
                        <Grid item>
                          <Image
                            className={classes.image}
                            src={item.pic}
                            alt='Hall Picture'
                          />
                        </Grid>
                      )}
                      {/* {item.established && (
                        <Grid item>
                          <Typography
                            variant='body1'
                            className={classes.normalText}
                          >
                            Established: {item.established}
                          </Typography>
                        </Grid>
                      )}
                      {item.rooms && (
                        <Grid item>
                          <Typography
                            variant='body1'
                            className={classes.normalText}
                          >
                            Rooms: {item.rooms}
                          </Typography>
                        </Grid>
                      )}
                      {item.boarders && (
                        <Grid item>
                          <Typography
                            variant='body1'
                            className={classes.normalText}
                          >
                            Boarders: {item.boarders}
                          </Typography>
                        </Grid>
                      )}
                      {item.type && (
                        <Grid item style={{ margin: '10px' }}>
                          <Typography
                            variant='body1'
                            className={classes.normalText}
                          >
                            Type: {item.type}
                          </Typography>
                        </Grid>
                      )} */}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DropDownCard>
      ))}
    </div>
  );
};

export default Info;

const useStyles = makeStyles((theme) => ({
  contact: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  hnc: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'space-between',
    margin: '15px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  underText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    left: '500%',
    top: '50%',
  },
  grey: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '17px',
  },
  normalText: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    fontStyle: 'normal',
    padding: '5px',
  },
  info: {
    padding: '10px',
  },
  hncTitle: {
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '24px',
  },
  phoneIcon: {
    marginRight: '8px',
    fontSize: '1.3rem',
    verticalAlign: 'middle',
  },
}));
