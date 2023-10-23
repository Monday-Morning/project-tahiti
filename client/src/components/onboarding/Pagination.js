import React, { useState } from 'react';

// Libraries
import makeStyles from '@mui/styles/makeStyles';
import { Step, styled, StepLabel, Stepper, StepConnector } from '@mui/material';
import { stepConnectorClasses } from '@mui/material/StepConnector';

function StepIcon(props) {
  const classes = useStyles(props);
  return <div className={classes.stepIcon} />;
}

const StepIconConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 9,
    left: 'calc(-38%)',
  },
  [`& .${stepConnectorClasses.line}`]: {
    width: 50,
    borderTop: '1px solid',
    borderColor: theme.palette.primary.blue30,
  },
  [`&.${stepConnectorClasses.active}, &.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.blue80,
    },
  },
}));

function Pagination({ stages, active }) {
  return (
    <Stepper
      alternativeLabel
      activeStep={active}
      connector={<StepIconConnector />}
    >
      {stages.map((stage) => (
        <Step key={stage}>
          <StepLabel StepIconComponent={StepIcon} />
        </Step>
      ))}
    </Stepper>
  );
}
export default Pagination;

const useStyles = makeStyles((theme) => ({
  stepIcon: {
    width: '18px',
    height: '18px',
    marginLeft: '16px',
    marginRight: '17px',
    borderRadius: '50%',
    border: (props) =>
      props.completed
        ? `1px solid ${theme.palette.primary.blue80}`
        : props.active
        ? `5px solid ${theme.palette.primary.blue80}`
        : `1px solid ${theme.palette.primary.blue30};`,
    backgroundColor: (props) =>
      props.completed ? theme.palette.primary.blue80 : 'transparent',
  },
}));
