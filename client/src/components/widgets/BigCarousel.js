import React from 'react';

// libararies
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import PhotoCarousel from '../widgets/PhotoCarousel';

const BigCarousel = ({ head, navigator }) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.textWrapper}>
                <Typography variant='h1' className={classes.text}>{head}</Typography>
            </div>
            <div>
                <PhotoCarousel navigator={navigator} />
            </div>
        </div>
    );
}

export default BigCarousel;

const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginTop: '2rem',
        backgroundColor: theme.palette.secondary.main,
        padding: '24px 0px',
        [theme.breakpoints.down('xs')]: {
            padding: '12px 0px',
        },

    },
    textWrapper: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
    },
    text: {
        color: theme.palette.common.white,
        alignSelf: 'center',
    },
}));