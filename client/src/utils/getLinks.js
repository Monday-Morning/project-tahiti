const CATEGORIES = {
  HOME: '/',
  CAMPUS: '/campus',
  CONNECT: '/connect',
  DDCWC: '/ddcwc',
  CAREER: '/career',
  ALUMNI: '/alumni',
  EXPRESSIONS: '/expressions',
};

const SUB_CATEGORIES = {
  CAMPUS: {
    ACADEMICS: `${CATEGORIES.CAMPUS}/academics`,
    BUZZ: `${CATEGORIES.CAMPUS}/campusBuzz`,
    FORUM: `${CATEGORIES.CAMPUS}/forum`,
    STUDENT_ACTIVITIES: `${CATEGORIES.CAMPUS}/studentActivities`,
    HALLS: `${CATEGORIES.CAMPUS}/halls`,
    POLL_ANALYSIS: `${CATEGORIES.CAMPUS}/pollAnalysis`,
    ADMISSIONS: `${CATEGORIES.CAMPUS}/admissions`,
  },
  CONNECT: {
    INTERVIEWS: `${CATEGORIES.CONNECT}/interviews`,
    SAC_SPEAKS: `${CATEGORIES.CONNECT}/sacSpeaks`,
    CGPA: `${CATEGORIES.CONNECT}/cgpa`,
    GUEST_INTERVIEW: `${CATEGORIES.CONNECT}/guestInterview`,
  },
  DDCWC: {
    DIRECTORS_DESK: `${CATEGORIES.DDCWC}/directorsDesk`,
    CHIEF_WARDENS_DESK: `${CATEGORIES.DDCWC}/chiefWardensDesk`,
  },
  CAREER: {
    PLACEMENTS: `${CATEGORIES.CAREER}/placements`,
    INTERNSHIPS: `${CATEGORIES.CAREER}/internships`,
    HIGHER_EDUCATION: `${CATEGORIES.CAREER}/higherEducation`,
    GUIDANCE: `${CATEGORIES.CAREER}/guidance`,
  },
  ALUMNI: {
    ALUMNUS_SPEAKS: `${CATEGORIES.ALUMNI}/alumnusSpeaks`,
    ALUMNI_AFFAIRS: `${CATEGORIES.ALUMNI}/alumniAffairs`,
  },
  EXPRESSIONS: {
    WITSDOM: `${CATEGORIES.EXPRESSIONS}/witsdom`,
    PHOTOSTORY: `${CATEGORIES.EXPRESSIONS}/photostory`,
    GALLERY: `${CATEGORIES.EXPRESSIONS}/gallery`,
    NITR_IN_MOTION: `${CATEGORIES.EXPRESSIONS}/nitrInMotion`,
    EDITORIAL: `${CATEGORIES.EXPRESSIONS}/editorial`,
    PODCASTS: `${CATEGORIES.EXPRESSIONS}/podcasts`,
    MISCELLANEOUS: `${CATEGORIES.EXPRESSIONS}/miscellaneous`,
  },
};

const INDIVIDUALS = {
  ARTICLE: '/article/:id/:title?',
  WITSDOM: '/witsdom/:id/:title?',
  GALLERY: '/gallery/:id/:title?',
  PHOTOSTORY: '/photostory/:id/:title?',
  PORTFOLIO: '/portfolio/:id/:name?',
  LIVE: '/live',
};

const INTERACTIONS = {
  CALENDAR: '/calendar',
  POLLS: '/polls',
  FORUMS: '/forums',
};

const GENERAL = {
  ABOUT: '/about',
  GUIDE: '/guide',
  CONTACT: '/contact',
  ARCHIVE: '/archive',
  TERMS_POLICIES: '/terms&policies',
  SAC_CLUBS: '/sac&clubs',
  HEALTH: '/health',
  EMERGENCY: '/emergency',
};

const USER = {
  PROFILE: '/userProfile',
  ONBOARDING: '/onboarding',
};

const ERROR = {
  NOT_FOUND: '/error/404',
};

export default Object.freeze({
  CATEGORIES,
  SUB_CATEGORIES,
  INDIVIDUALS,
  INTERACTIONS,
  GENERAL,
  USER,
  ERROR,
});
