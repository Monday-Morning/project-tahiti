import React from 'react';

// libararies
import { makeStyles } from '@material-ui/core/styles';
import { Typography , Grid } from '@material-ui/core';

// Placeholder
import { ABOUT } from '../../assets/placeholder/about'

// images
import about from '../../assets/images/about/about2.png';

const Content = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Typography variant='body1' className={classes.text}>{ABOUT.content}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={about} alt='About' className={classes.image} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Content;

const useStyles = makeStyles((theme) => ({
    wrapper: {
        maxWidth: '1280px',
        margin: '40px auto 0px auto',
        [theme.breakpoints.down('md')]: {
            marginTop: '24px',
            padding: '0px 24px 0px 24px',
        },
    },
    text: {
        fontSize: '20px',
        lineHeight: '28px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            lineHeight: '20px',
        },
    },
    image: {
        height: '95%',
        width: '100%',
    },
}));