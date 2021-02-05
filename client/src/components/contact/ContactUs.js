import React from 'react';

// libararies
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// images
import sac1 from '../../assets/images/contact/sac1.png';
import sac2 from '../../assets/images/contact/sac2.png';

const ContactUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <img src={sac1} alt='Monday Morning' className={classes.image1} />
            <img src={sac2} alt='Monday Morning' className={classes.image2} />
            <Typography variant='h1' className={classes.title1}>
                CONTACT US
            </Typography>
            <Typography variant='h1' className={classes.title2}>
                ↓ Contact Us
            </Typography>
        </div>
    );
}

export default ContactUs;

const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginTop: '1.5rem',
        position: 'relative',
        minHeight: '216px',
        [theme.breakpoints.down('xs')]: {
            minHeight: '191px',
            marginTop: '1rem',
        },
    },
    image1: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            visibility: 'hidden',
        },
    },
    image2: {
        position: 'absolute',
        visibility: 'hidden',
        backgroundColor: theme.palette.text.disabled,
        [theme.breakpoints.down('xs')]: {
            visibility: 'visible',
            filter: 'brightness(50%)',
            width: '100%',
            height: '100%',
        },
    },
    title1: {
        position: 'absolute',
        top: '75%',
        left: '45%',
        color: theme.palette.common.white,
        [theme.breakpoints.down('xs')]: {
            visibility: 'hidden',
        },
    },
    title2: {
        visibility: 'hidden',
        color: theme.palette.common.white,
        [theme.breakpoints.down('xs')]: {
            visibility: 'visible',
            position: 'absolute',
            top: '75%',
            left: '5%',
            color: theme.palette.common.white,
        },
    },
}));
