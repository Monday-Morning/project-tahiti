import React from 'react';
import Image from 'next/image';

// libraries
import { Typography } from '@material-ui/core';

// Assets
import logo from '../../assets/images/logo_mm.png';

function ActivityIndicator({ size = 1080 }) {
  return (
    <div className={'loadingWrapper'}>
      <div className={'loadingSubWrapper'}>
        <div className={'loadingLogoWrapper'}>
          <Image
            src={logo}
            alt='MM Logo'
            className={'loadingLogo'}
            placeholder='blur'
            width={`${size}px`}
            height={`${size}px`}
          />
        </div>
        <Typography variant='h1' className={'loadingText'}>
          Monday Morning
        </Typography>
      </div>
    </div>
  );
}

export default ActivityIndicator;
