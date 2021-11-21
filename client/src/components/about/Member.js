import React, { useState } from 'react';
import Image from 'next/image';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, useMediaQuery } from '@material-ui/core';

// Components
import Profile from './Profile';

// placeholder
import { TEAM } from '../../assets/placeholder/about';

// Images
import Content from '../../assets/images/about/Content.png';
import Design from '../../assets/images/about/Design.png';
import Photo from '../../assets/images/about/Photography.png';
import Tech from '../../assets/images/about/Technical.png';

// theme
import theme from '../../config/themes/light';

const STAGE = {
  DESIGN: 'Design Team',
  TECH: 'Technical Team',
  CONTENT: 'Content Team',
  PHOTO: 'Photography Team',
};

function Member() {
  const [stage, setStage] = useState(STAGE.CONTENT);
  // const [inProp, setInProp] = useState(true);
  const classes = useStyles(theme);

  // Helpers
  const setStageToDesign = () => setStage(STAGE.DESIGN);
  const setStageToTech = () => setStage(STAGE.TECH);
  const setStageToContent = () => setStage(STAGE.CONTENT);
  const setStageToPhotography = () => setStage(STAGE.PHOTO);

  const renderTeam = () => {
    switch (stage) {
      case STAGE.CONTENT:
        return TEAM.CONTENT.map((member, index) => (
          <Profile
            // eslint-disable-next-line
            key={`${member.NAME}${index}`}
            member={member}
            showDesignation={false}
            showSocial={false}
            small
          />
        ));
      case STAGE.DESIGN:
        return TEAM.DESIGN.map((member, index) => (
          <Profile
            // eslint-disable-next-line
            key={`${member.NAME}${index}`}
            member={member}
            showDesignation={false}
            showSocial={false}
            small
          />
        ));
      case STAGE.PHOTO:
        return TEAM.PHOTO.map((member, index) => (
          <Profile
            // eslint-disable-next-line
            key={`${member.NAME}${index}`}
            member={member}
            showDesignation={false}
            showSocial={false}
            small
          />
        ));
      case STAGE.TECH:
        return TEAM.TECH.map((member, index) => (
          <Profile
            // eslint-disable-next-line
            key={`${member.NAME}${index}`}
            member={member}
            showDesignation={false}
            showSocial={false}
            small
          />
        ));
      default:
        return TEAM.CONTENT.map((member, index) => (
          <Profile
            // eslint-disable-next-line
            key={`${member.NAME}${index}`}
            member={member}
            showDesignation={false}
            showSocial={false}
            small
          />
        ));
    }
  };

  return (
    <Container className={classes.root}>
      <div className={classes.navContainer}>
        <Typography
          className={classes.navLink}
          onClick={setStageToContent}
          variant='body1'
          style={{
            color: stage === STAGE.CONTENT ? '#000' : '#999999',
          }}
        >
          {useMediaQuery(theme.breakpoints.down('sm')) ? (
            <span>
              <Image src={Content} className={classes.logo} /> C
            </span>
          ) : (
            <span>
              <Image src={Content} className={classes.logo} /> Content
            </span>
          )}
        </Typography>
        <Typography
          className={classes.navLink}
          onClick={setStageToDesign}
          variant='body1'
          style={{
            color: stage === STAGE.DESIGN ? '#000' : '#999999',
          }}
        >
          {useMediaQuery(theme.breakpoints.down('sm')) ? (
            <span>
              <Image src={Design} className={classes.logo} /> D
            </span>
          ) : (
            <span>
              <Image src={Design} className={classes.logo} /> Design
            </span>
          )}
        </Typography>
        <Typography
          className={classes.navLink}
          onClick={setStageToPhotography}
          variant='body1'
          style={{
            color: stage === STAGE.PHOTO ? '#000' : '#999999',
          }}
        >
          {useMediaQuery(theme.breakpoints.down('sm')) ? (
            <span>
              <Image src={Photo} className={classes.logo} /> P
            </span>
          ) : (
            <span>
              <Image src={Photo} className={classes.logo} /> Photography
            </span>
          )}
        </Typography>
        <Typography
          className={classes.navLink}
          onClick={setStageToTech}
          variant='body1'
          style={{
            color: stage === STAGE.TECH ? '#000' : '#999999',
          }}
        >
          {useMediaQuery(theme.breakpoints.down('sm')) ? (
            <span>
              <Image src={Tech} className={classes.logo} /> T
            </span>
          ) : (
            <span>
              <Image src={Tech} className={classes.logo} /> Technical
            </span>
          )}
        </Typography>
      </div>

      <div className={classes.teamContainer}>
        <Typography className={classes.teamName} variant='h1'>
          {stage}
        </Typography>
        <div className={classes.wrapperContainer}>{renderTeam()}</div>
      </div>
    </Container>
  );
}

export default Member;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '40px 0px',
    [theme.breakpoints.down('sm')]: {
      margin: '15px 0px',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  navContainer: {
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      width: '20%',
    },
  },
  teamContainer: {
    minHeight: 200,
    height: '100%',
    width: '100%',
    padding: '30px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      padding: '8px',
    },
  },
  wrapperContainer: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
  navLink: {
    fontFamily: 'Source Sans Pro',
    margin: '20px auto',
    width: '100%',
    textAlign: 'left',
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'IBM Plex Sans',
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '24px',
      lineHeight: '30px',
    },
  },
  teamName: {
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
      width: '0px',
      height: '0px',
    },
  },
  logo: {
    marginRight: '16px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0px',
    },
  },
}));
