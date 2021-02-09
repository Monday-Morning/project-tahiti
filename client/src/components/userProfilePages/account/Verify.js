import { Button, Card, Input, makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../../config/themes/light';
import verify from '../../../assets/images/profile/verify.png';

function Verify() {
    const classes = useStyles(theme);

    return (
        <div className={classes.root}>
            <span>Verify Account</span>
            <Card className={classes.wrapper}>
                <div className={classes.content}>
                    <h1 className={classes.head}>You haven’t verified your account yet...</h1>
                    <div className={classes.text}>
                        If you are an NITR student and have a valid insti email id, you can get access to LAN-restricted articles even on the go! Just verify once and forget.
          </div>
                    <div className={classes.inputBlock}>
                        <div className={classes.emailHead}>Email</div>
                        <Input className={classes.input} placeholder='your@nitrkl.ac.in' />
                        <Button className={classes.inputButton} variant='contained' color='primary'>
                            <span> Sign Up for Newsletter</span>
                        </Button>

                    </div>

                    <div className={classes.imageBox}>
                        <img src={verify} alt='' className={classes.img} />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Verify;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '2rem',
        '& span': {
            fontFamily: 'IBM Sans Pro',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: '600',
        },
    },
    wrapper: {
        marginTop: '19px',
        height: '542px',
        display: 'flex',
        boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
        background: theme.palette.common.white,
        position: 'relative',
        width: '892px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '52px',
        marginLeft: '45px',
        width: '432px',
    },
    head: {
        lineHeight: '2.25rem',
        color: theme.palette.common.black,
    },
    text: {
        marginTop: '30px',
        fontFamily: 'Source Sans Pro',
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        fontWeight: '400',
        color: theme.palette.common.black,
    },
    inputBlock: {
        marginTop: '45px',
        display: 'flex',
        flexDirection: 'column',
        width: '322px',
    },
    emailHead: {
        fontFamily: 'IBM Sans Plex !important',
        fontWeight: '600',
        fontSize: '22px',
        lineHeight: '1.5rem',
        color: theme.palette.common.black,
    },
    // inputBox: {},
    input: {
        background: theme.palette.secondary.neutral40,
        width: '100%',
        paddingLeft: '1rem',
        fontStyle: 'Source Sans Pro',
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        marginTop: '12px',
        '&::before': {
            borderBottom: '0 !important',
        },
    },
    // buttonBox: {},
    inputButton: {
        textTransform: 'unset',
        textAlign: 'center',
        height: '37px',
        marginTop: '10px',
        '& span': {

            fontSize: '1.25rem !important',
            lineHeight: '1.75rem',
            fontFamily: 'Source Sans Pro !important',
        },
    },
    note: {
        marginTop: '61px',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        fontFamily: 'Source Sans Pro',
        fontWeight: '400',
        '& span': {
            fontFamily: 'Source Sans Pro',
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: '700',
        },
    },
    imageBox: {
        position: 'absolute',
        // zIndex: '-10',
        right: '-45px',
        top: '112px',
        marginLeft: '0.75rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '3rem',
    },
    img: {
        height: '276px',
        width: '367px',
    },
}));
