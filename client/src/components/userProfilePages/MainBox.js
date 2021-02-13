import React from 'react';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Interested from './Interested';
import Unverified from './newsletter/Unverified';
import Verified from './newsletter/Verified';
import Verify from './account/Verify';
import CheckEmail from './account/CheckEmail';
import AccVerified from './account/AccVerified';
import Forgot from './password/Forgot';
import LinkSent from './password/LinkSent';
import NewPasswd from './password/NewPasswd';
import Changed from './password/Changed';

function MainBox({ option, accOption, passwdOption, nLOption, boxState, accState, passwdState, nLState, selectedTopics, addSelectedTopic, removeSelectedTopic }) {
  // boxState();
  // accState();
  // passwdState();
  // nLState();
  switch (option) {
    case 0:
      return <Profile />;

    case 1:
      return <Dashboard />;

    case 2:
      return <Interested selectedTopics={selectedTopics} addSelectedTopic={addSelectedTopic} removeSelectedTopic={removeSelectedTopic} />;

    case 3:
      switch (nLOption) {
        case 0:
          return <Unverified nLState={nLState} />;
        case 1:
          return <Verified nLState={nLState} />
      }

    case 4:
      switch (accOption) {
        case 0:
          return <Verify accState={accState} />;

        case 1:
          return <CheckEmail accState={accState} />;

        case 2:
          return <AccVerified accState={accState} />;
      }
    case 5:
      switch (passwdOption) {
        case 0:
          return <Forgot passwdState={passwdState} />;

        case 1:
          return <LinkSent passwdState={passwdState} />;

        case 2:
          return <NewPasswd passwdState={passwdState} />;

        case 3:
          return <Changed passwdState={passwdState} />;
      }
  }
}

export default MainBox;
