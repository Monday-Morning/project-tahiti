/* eslint-disable */
export const ONBOARDING = Object.freeze({
  WELCOME: {
    CONTENT: 'Welcome to Monday Morning, student media body of NIT Rourkela',
    TERMS: 'By creating an account, I accept \n MM’s Terms of Use',
  },
  VERIFY_EMAIL: {
    PRIMARY: {
      TITLE: 'Verify Account',
      CONTENT:
        'Verify your account with institute \n email id just once and get access to \n limited access articles !',
    },
    SECONDARY: {
      TITLE: 'Email',
      CONTENT:
        'You need to verify your email to access certain \n restricted articles. If you have not received the \n verification email please check your Spam \n folder. You can also click on the resend button \n below to have another email sent to you',
    },
    EMAIL_PLACEHOLDER: 'instituteID@nitrkl.ac.in',
    BUTTON: {
      PRIMARY: 'Get Verification Link',
      SECONDARY: 'Open webmail',
      FINALLY: 'Confirm Verification',
    },
    NOTE: 'Note: This only works if you’re a current student/ employee of \n NIT Rourkela with a valid institute email id.',
  },
  INTERESTED_TOPICS: {
    PRIMARY: {
      TITLE: 'Interested Topics',
      CONTENT:
        "Select the topics you're interested in, and get smarter article suggestions on the MM website!",
      LOADING_CONTENT:
        "Give us a moment while we save your choices. Wouldn't want to mix them up.",
    },
    TOPICS: [
      ['Campus Buzz', 12],
      ['Alumni Affairs', 52],
      ['Student Activities', 14],
      ['Halls', 15],
      ['Interviews', 21],
      ['SAC Speaks', 22],
      ['Guest Interviews', 24],
      ["Director's Desk", 31],
      ["Chief Warden's Column", 32],
      ['Alumnus Speaks', 51],
      ['Editorial', 66],
      ['Placements', 41],
      ['Internships', 42],
      ['Higher Education', 43],
      ['Photostories', 62],
      ['Witsdom', 61],
    ],
  },
  NEWSLETTER: {
    PRIMARY: {
      TITLE: 'Signup for Newsletter',
      CONTENT:
        'You’ve successfully signed up for the newsletter. \n Be the first to know the happenings at NITR and \n never miss out on an issue release !',
    },
    SECONDARY: {
      TITLE: 'Email',
      CONTENT:
        'Sign up for the MM newsletter and get news and \n articles delivered straight to your mailbox!',
    },
    EMAIL_PLACEHOLDER: 'instituteID@nitrkl.ac.in',
    BUTTON: {
      PRIMARY: 'Signup for newsletter',
      SECONDARY: 'Get Started',
      MOBILE: 'Next',
    },
    NOTE: 'Note: Newsletters are sent once a week or once in a fortnight \n during the working session of the institute',
  },
});
