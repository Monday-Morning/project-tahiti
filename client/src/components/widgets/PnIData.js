import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import pni from '../../assets/images/pni.png';
import theme from '../../config/themes/light';
import { Button, Grid } from '@material-ui/core';


const PnIData = () => {
    const classes = useStyles(theme);

    return (
        <Card className={classes.root}>
            <CardContent>


                <Typography variant='h1'>Placement and Internship Database</Typography>
                <Grid container alignItems='center'>
                    <Grid item sm={8} className={classes.forumContent}>
                        <p>Find all the companies by branch, year and semester here along with the list of students who interned or were placed there. </p>

                        <p>This section can only be accessed by verified accounts or through the institute LAN.</p>
                        <CardActions>
                            <Button variant='contained' color='primary' className={classes.button}>
                                Go To Live Database
              </Button>
                        </CardActions>
                    </Grid>

                    <Grid item sm={4} className={classes.imageBlock}>
                        <Grid container justify='center'>
                            <img src={pni} alt='Forum Image' className={classes.image} />
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default PnIData;

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: theme.shadows[0],

        // fontFamily: 'Source Sans Pro',
        marginTop: '2rem',
        // paddingBottom: '0.7rem',

    },
    content: {
    },
    imageBlock: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            order: 1,
        },
    },
    image: {
        justifyContent: 'center',
        height: '203px',

    },
    forumHeader: {
        fontWeight: 'bold',
        fontSize: '20px',
        // lineHeight: '28px',
        color: theme.palette.secondary.main,
        padding: '1rem 1rem ',
    },
    forumImage: {
        backgroundSize: 'unset',
        height: '203px',
        margin: '1rem 1rem',
    },
    forumContent: {
        fontSize: '14px',
        color: '#333333',
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {


        marginTop: '50px',

    },
}));
