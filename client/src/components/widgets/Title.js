import { makeStyles } from '@material-ui/core';
import React from 'react'
import theme from '../../config/themes/light';

function Title({ heading }) {
    const classes = useStyles(theme);
    return (
        <div className={classes.root}>
            <div className={classes.head}>{heading}</div>
            <div className={classes.line}></div>
            <div className={classes.seeAll}>See All</div>
        </div>
    )
}

export default Title

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2rem 0',
        lineHeight: '2rem',
    },

    head: {
        fontSize: '2rem',
        whiteSpace: 'nowrap',
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
        },
    },

    line: {
        [theme.breakpoints.up('sm')]: {
            borderBottom: '1px solid ',
            borderColor: theme.palette.common.black,
            width: '-webkit-fill-available',
            marginInline: '1rem',
        },
    },

    seeAll: {
        whiteSpace: 'nowrap',
        fontSize: '1.25rem',
        fontWeight: '400',
        color: theme.palette.secondary.main,
        textDecoration: 'underline',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
    },
}))