import React from 'react';

// libararies
import { makeStyles } from '@material-ui/core/styles';
import { Typography , Grid } from '@material-ui/core';

// Component
import ArticleCard from '../widgets/ArticleCard';

// Placeholder
import { PROJECT } from '../../assets/placeholder/about'

const Project = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <Typography variant='h1' className={classes.title}>Projects</Typography>
                <Grid className={classes.titleText}>{PROJECT.about}</Grid>
            </div>
            <Grid container className={classes.projects}>
                <Grid item sm={12} md={4}>
                    <ArticleCard article={PROJECT.Projects[0]} />
                </Grid>
                <Grid item sm={12} md={4}>
                    <ArticleCard article={PROJECT.Projects[1]} />
                </Grid>
                <Grid item sm={12} md={4}>
                    <ArticleCard article={PROJECT.Projects[2]} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Project;

const useStyles = makeStyles((theme) => ({
    wrapper: {
        maxWidth: '1280px',
        margin: '40px auto 0px auto',
        [theme.breakpoints.down('md')]: {
            marginTop: '24px',
            padding: '0px 24px 0px 24px',
        },
    },
    header: {
        maxWidth: '1280px',
        margin: '60px auto 0px auto',
        display: 'flex',
        direction: 'row',
        [theme.breakpoints.down('xs')]: {
            margin: '40px 16px 0px 24px',
            display: 'block',
        },
    },
    titleText: {
        marginLeft: '15%',
        fontFamily: 'Source Sans Pro',
        color: '#333333',
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '400',
        opacity: 0.75,
        textAlign: 'justify',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '0px',
        },
    },
    projects: {
        marginTop: '32px',
    },
}));