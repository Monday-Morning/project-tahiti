// import clamp from 'lodash-es/clamp'
import { render } from 'react-dom';
import { Container, makeStyles } from '@material-ui/core';
import React, { useRef } from 'react';
    
import { useSpring, animated } from 'react-spring';
import theme from '../../config/themes/light';
import { useGesture } from 'react-use-gesture';
import ArticleCard from './ArticleCard';

function Carousel() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Container>
        <ArticleCard />
      </Container>
    </div>
  );
}

export default Carousel;

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(${theme.palette.secondary.neutral20},${theme.palette.secondary.main})`,
    maxWidth:'100%',
  },
  
}));

// const pages = [
//   'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
// ]

// function Viewpager() {
//   const index = useRef(0)
//   const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
//   const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
//     if (down && distance > window.innerWidth / 2)
//       cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
//     set(i => {
//       if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
//       const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
//       const sc = down ? 1 - distance / window.innerWidth / 2 : 1
//       return { x, sc, display: 'block' }
//     })
//   })
//   return props.map(({ x, display, sc }, i) => (
//     <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
//       <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
//     </animated.div>
//   ))
// }

// render(<Viewpager />, document.getElementById('root'))

//

//=============CSS==============
// * {
//     box-sizing: border-box;
//   }

//   html,
//   body {
//     overscroll-behavior-y: contain;
//     margin: 0;
//     padding: 0;
//     height: 100%;
//     width: 100%;
//     user-select: none;
//     font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
//       segoe ui, arial, sans-serif;
//     position: fixed;
//     overflow: hidden;
//   }

//   #root {
//     position: fixed;
//     overflow: hidden;
//     width: 100%;
//     height: 100%;
//     cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39,
//       auto;
//   }

//   #root > div {
//     position: absolute;
//     width: 100vw;
//     height: 100vh;
//     will-change: transform;
//   }

//   #root > div > div {
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center center;
//     width: 100%;
//     height: 100%;
//     will-change: transform;
//     box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
//   }
