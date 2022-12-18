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

const DEPARTMENTS = {
  BIOTECHNOLOGY_AND_BIOMEDICAL:
    '/campus/academics/biotechnology_and_biomedical/1',
  CERAMIC: '/campus/academics/ceramic/1',
  CHEMICAL: '/campus/academics/chemical/1',
  CIVIL: '/campus/academics/civil/1',
  COMPUTER_SCIENCE: '/campus/academics/computer_science/1',
  CHEMISTRY: '/campus/academics/chemistry/1',
  HUMANITIES_AND_SOCIAL_SCIENCES:
    '/campus/academics/humanities_and_social_sciences/1',
  LIFE_SCIENCE: '/campus/academics/life_science/1',
  MATHEMATICS: '/campus/academics/mathematics/1',
  PHYSICS_AND_ASTRONOMY: '/campus/academics/physics_and_astronomy/1',
  ELECTRICAL: '/campus/academics/electrical/1',
  ELECTRONICS_AND_COMMUNICATION:
    '/campus/academics/electronics_and_communication/1',
  FOOD_PROCESS: '/campus/academics/food_process/1',
  INDUSTRIAL_DESIGN: '/campus/academics/industrial_design/1',
  MECHANICAL: '/campus/academics/mechanical/1',
  METALLURGICAL_AND_MATERIALS:
    '/campus/academics/metallurgical_and_materials/1',
  MINING: '/campus/academics/mining/1',
  PLANNING_AND_ARCHITECTURE: '/campus/academics/planning_and_architecture/1',
  SCHOOL_OF_MANAGEMENT: '/campus/academics/school_of_management/1',
  EARTH_AND_ATMOSPHERIC: '/campus/academics/earth_and_atmospheric/1',
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
  DEPARTMENTS,
  ERROR,
});
