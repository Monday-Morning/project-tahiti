import React, { useContext } from 'react';

import { animated, useSpring } from 'react-spring';

import { ThemeContext } from '../../context/ThemeContext';

const properties = {
  moon: {
    r: 10,
    transform: 'rotate(40deg)',
    cx: 12,
    cy: 3,
    opacity: 0,
    fill: '#f7f7f7',
  },
  sun: {
    r: 5,
    transform: 'rotate(90deg)',
    cx: 30,
    cy: 0,
    opacity: 1,
    fill: '#f7f7f7',
  },

  springConfig: { mass: 8, tension: 200, friction: 35 },
};

const ToggleModeIcon = () => {
  const { isDarkTheme, setDarkTheme } = useContext(ThemeContext);

  const { r, transform, cx, cy, opacity, fill } =
    properties[isDarkTheme ? 'moon' : 'sun'];

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });
  const centerCircleProps = useSpring({
    r,
    fill,
    config: properties.springConfig,
  });
  const maskedCircleProps = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  });
  const linesProps = useSpring({ opacity, config: properties.springConfig });

  return (
    <animated.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='0'
      strokeLinecap='round'
      strokeLinejoin='round'
      stroke='#f7f7f7'
      onClick={() => setDarkTheme((theme) => !theme)}
      style={{ cursor: 'pointer', ...svgContainerProps }}
    >
      <mask id='moon2'>
        <rect x='0' y='0' width='100%' height='100%' fill='white' />
        <animated.circle style={maskedCircleProps} r='10' fill='black' />
      </mask>

      <animated.circle
        cx='12'
        cy='12'
        style={centerCircleProps}
        mask='url(#moon2)'
      />

      <animated.g stroke='white' strokeWidth='2' style={{ ...linesProps }}>
        <line x1='12' y1='1' x2='12' y2='3' />
        <line x1='12' y1='21' x2='12' y2='23' />
        <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
        <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
        <line x1='1' y1='12' x2='3' y2='12' />
        <line x1='21' y1='12' x2='23' y2='12' />
        <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
        <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
      </animated.g>
    </animated.svg>
  );
};

export default ToggleModeIcon;
