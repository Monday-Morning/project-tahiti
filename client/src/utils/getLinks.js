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
    // PODCASTS: `${CATEGORIES.EXPRESSIONS}/podcasts`,
    PODCASTS: `https://open.spotify.com/show/7ljgcbXzt4VQRJ1SLIECNf`,
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
  BIOTECHNOLOGY_AND_BIOMEDICAL: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/biotechnology_and_biomedical`,
  CERAMIC: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/ceramic`,
  CHEMICAL: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/chemical`,
  CIVIL: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/civil`,
  COMPUTER_SCIENCE: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/computer_science`,
  CHEMISTRY: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/chemistry`,
  HUMANITIES_AND_SOCIAL_SCIENCES: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/humanities_and_social_sciences`,
  LIFE_SCIENCE: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/life_science`,
  MATHEMATICS: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/mathematics`,
  PHYSICS_AND_ASTRONOMY: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/physics_and_astronomy`,
  ELECTRICAL: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/electrical`,
  ELECTRONICS_AND_COMMUNICATION: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/electronics_and_communication`,
  FOOD_PROCESS: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/food_process`,
  INDUSTRIAL_DESIGN: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/industrial_design`,
  MECHANICAL: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/mechanical`,
  METALLURGICAL_AND_MATERIALS: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/metallurgical_and_materials`,
  MINING: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/mining`,
  PLANNING_AND_ARCHITECTURE: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/planning_and_architecture`,
  SCHOOL_OF_MANAGEMENT: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/school_of_management`,
  EARTH_AND_ATMOSPHERIC: `${SUB_CATEGORIES.CAMPUS.ACADEMICS}/earth_and_atmospheric`,
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
