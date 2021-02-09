import React from 'react';
import Dashboard from './Dashboard';
import Profile from './Profile';
// import Interested from './Interested';
import Unverified from './newsletter/Unverified';
import Verified from './newsletter/Verified';
import Verify from './account/Verify';
import CheckEmail from './account/CheckEmail';
import AccVerified from './account/AccVerified';
import Forgot from './password/Forgot';
import LinkSent from './password/LinkSent';
import NewPasswd from './password/NewPasswd';
import Changed from './password/Changed';

function MainBox({ option, accOption, passwdOption, nLOption }) {
  console.log(option);
  switch (option) {
    case 0:
      return <Profile />;

    case 1:
      return <Dashboard />;

    case 2:
      return <Interested />;

    case 3:
      return <div>{nLOption ? <Verified /> : <Unverified />}</div>;

    case 4:
      switch (accOption) {
        case 0:
          return <Verify />;

        case 1:
          return <CheckEmail />;

        case 2:
          return <AccVerified />;
      }
    case 5:
      switch (passwdOption) {
        case 0:
          return <Forgot />;

        case 1:
          return <LinkSent />;

        case 2:
          return <NewPasswd />;

        case 3:
          return <Changed />;
      }
  }
}

export default MainBox;
