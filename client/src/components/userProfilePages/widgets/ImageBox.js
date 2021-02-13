import { makeStyles } from '@material-ui/core'
import React from 'react'
import theme from '../../../config/themes/light';

function ImageBox({ widthImage, img }) {
    const classes = useStyles(theme, widthImage);
    return (
        <div className={classes.mainBox}>
            <img src={img} alt='' className={classes.img} />
        </div>
    )
}

export default ImageBox

const useStyles = makeStyles((theme, widthImage) => ({
    mainBox: {
        marginLeft: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthImage,

        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },

    },
    img: {
        height: 'auto',
        width: '100%',
    },
})) 