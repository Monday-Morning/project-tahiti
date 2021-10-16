import LINKS from './getLinks';

// ========================= CATEGORIES =========================
const CATEGORIES = [
  {
    name: 'Home',
    shortName: LINKS.CATEGORIES.HOME.split('/')[1],
    path: LINKS.CATEGORIES.HOME,
    asyncRoutePath: './Home',
    idNumber: 0,
    exact: true,
  },
  {
    name: 'Campus',
    shortName: LINKS.CATEGORIES.CAMPUS.split('/')[1],
    path: LINKS.CATEGORIES.CAMPUS,
    asyncRoutePath: './Category',
    idNumber: 1,
    exact: true,
    subCategoryIds: [11, 12, 13, 14, 15, 16, 17],
  },
  {
    name: 'Connect',
    shortName: LINKS.CATEGORIES.CONNECT.split('/')[1],
    path: LINKS.CATEGORIES.CONNECT,
    asyncRoutePath: './Category',
    idNumber: 2,
    exact: true,
    subCategoryIds: [21, 22, 23, 24],
  },
  {
    name: 'DD & CWC',
    shortName: LINKS.CATEGORIES.DDCWC.split('/')[1],
    path: LINKS.CATEGORIES.DDCWC,
    asyncRoutePath: './Category',
    idNumber: 3,
    exact: true,
    subCategoryIds: [31, 32],
  },
  {
    name: 'Career',
    shortName: LINKS.CATEGORIES.CAREER.split('/')[1],
    path: LINKS.CATEGORIES.CAREER,
    asyncRoutePath: './Category',
    idNumber: 4,
    exact: true,
    subCategoryIds: [41, 42, 43, 44],
  },
  {
    name: 'Alumni',
    shortName: LINKS.CATEGORIES.ALUMNI.split('/')[1],
    path: LINKS.CATEGORIES.ALUMNI,
    asyncRoutePath: './Category',
    idNumber: 5,
    exact: true,
    subCategoryIds: [51, 52],
  },
  {
    name: 'Expressions',
    shortName: LINKS.CATEGORIES.EXPRESSIONS.split('/')[1],
    path: LINKS.CATEGORIES.EXPRESSIONS,
    asyncRoutePath: './Expressions',
    idNumber: 1,
    exact: true,
    subCategoryIds: [61, 62, 63, 64, 65, 66, 67],
  },
];

// ========================= SUB CATEGORIES =========================

// ========================= CAMPUS =========================
const CAMPUS = [
  {
    name: 'Academics',
    shortName: LINKS.SUB_CATEGORIES.CAMPUS.ACADEMICS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAMPUS.ACADEMICS,
    asyncRoutePath: './SubCategory',
    idNumber: 11,
    exact: true,
  },
  {
    name: 'Campus Buzz',
    shortName: LINKS.SUB_CATEGORIES.CAMPUS.BUZZ.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAMPUS.BUZZ,
    asyncRoutePath: './SubCategory',
    idNumber: 12,
    exact: true,
  },
  {
    name: 'Forum',
    shortName: LINKS.SUB_CATEGORIES.CAMPUS.FORUM.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAMPUS.FORUM,
    asyncRoutePath: './SubCategory',
    idNumber: 13,
    exact: true,
  },
  {
    name: 'Student Activities',
    shortName: LINKS.SUB_CATEGORIES.CAMPUS.STUDENT_ACTIVITIES.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAMPUS.STUDENT_ACTIVITIES,
    asyncRoutePath: './SubCategory',
    idNumber: 14,
    exact: true,
  },
  {
    name: 'Halls',
    shortName: LINKS.SUB_CATEGORIES.CAMPUS.HALLS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAMPUS.HALLS,
    asyncRoutePath: './SubCategory',
    idNumber: 15,
    exact: true,
  },
  {
    name: 'Poll Analysis',
    shortName: LINKS.SUB_CATEGORIES.CAMPUS.POLL_ANALYSIS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAMPUS.POLL_ANALYSIS,
    asyncRoutePath: './SubCategory',
    idNumber: 16,
    exact: true,
  },
  {
    name: 'Admissions',
    shortName: LINKS.SUB_CATEGORIES.CAMPUS.ADMISSIONS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAMPUS.ADMISSIONS,
    asyncRoutePath: './SubCategory',
    idNumber: 17,
    exact: true,
  },
];

// ========================= CONNECT =========================
const CONNECT = [
  {
    name: 'Interviews',
    shortName: LINKS.SUB_CATEGORIES.CONNECT.INTERVIEWS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CONNECT.INTERVIEWS,
    asyncRoutePath: './SubCategory',
    idNumber: 21,
    exact: true,
  },
  {
    name: 'Sac Speaks',
    shortName: LINKS.SUB_CATEGORIES.CONNECT.SAC_SPEAKS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CONNECT.SAC_SPEAKS,
    asyncRoutePath: './SubCategory',
    idNumber: 22,
    exact: true,
  },
  {
    name: 'CGPA',
    shortName: LINKS.SUB_CATEGORIES.CONNECT.CGPA.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CONNECT.CGPA,
    asyncRoutePath: './SubCategory',
    idNumber: 23,
    exact: true,
  },
  {
    name: 'Guest Interview',
    shortName: LINKS.SUB_CATEGORIES.CONNECT.GUEST_INTERVIEW.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CONNECT.GUEST_INTERVIEW,
    asyncRoutePath: './SubCategory',
    idNumber: 24,
    exact: true,
  },
];

// ========================= DDCWC =========================
const DDCWC = [
  {
    name: "Director's Desk",
    shortName: LINKS.SUB_CATEGORIES.DDCWC.DIRECTORS_DESK.split('/')[2],
    path: LINKS.SUB_CATEGORIES.DDCWC.DIRECTORS_DESK,
    asyncRoutePath: './SubCategory',
    idNumber: 31,
    exact: true,
  },
  {
    name: "Chief Warden's Desk",
    shortName: LINKS.SUB_CATEGORIES.DDCWC.CHIEF_WARDENS_DESK.split('/')[2],
    path: LINKS.SUB_CATEGORIES.DDCWC.CHIEF_WARDENS_DESK,
    asyncRoutePath: './SubCategory',
    idNumber: 32,
    exact: true,
  },
];

// ========================= CAREER =========================
const CAREER = [
  {
    name: 'Placements',
    shortName: LINKS.SUB_CATEGORIES.CAREER.PLACEMENTS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAREER.PLACEMENTS,
    asyncRoutePath: './SubCategory',
    idNumber: 41,
    exact: true,
  },
  {
    name: 'Internships',
    shortName: LINKS.SUB_CATEGORIES.CAREER.INTERNSHIPS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAREER.INTERNSHIPS,
    asyncRoutePath: './SubCategory',
    idNumber: 42,
    exact: true,
  },
  {
    name: 'Higher Education',
    shortName: LINKS.SUB_CATEGORIES.CAREER.HIGHER_EDUCATION.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAREER.HIGHER_EDUCATION,
    asyncRoutePath: './SubCategory',
    idNumber: 43,
    exact: true,
  },
  {
    name: 'Guidance',
    shortName: LINKS.SUB_CATEGORIES.CAREER.GUIDANCE.split('/')[2],
    path: LINKS.SUB_CATEGORIES.CAREER.GUIDANCE,
    asyncRoutePath: './SubCategory',
    idNumber: 44,
    exact: true,
  },
];

// ========================= ALUMNI =========================
const ALUMNI = [
  {
    name: 'Alumnus Speaks',
    shortName: LINKS.SUB_CATEGORIES.ALUMNI.ALUMNUS_SPEAKS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.ALUMNI.ALUMNUS_SPEAKS,
    asyncRoutePath: './SubCategory',
    idNumber: 51,
    exact: true,
  },
  {
    name: 'Alumni Affairs',
    shortName: LINKS.SUB_CATEGORIES.ALUMNI.ALUMNI_AFFAIRS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.ALUMNI.ALUMNI_AFFAIRS,
    asyncRoutePath: './SubCategory',
    idNumber: 52,
    exact: true,
  },
];

// ========================= EXPRESSIONS =========================
const EXPRESSIONS = [
  {
    name: 'Witsdom',
    shortName: LINKS.SUB_CATEGORIES.EXPRESSIONS.WITSDOM.split('/')[2],
    path: LINKS.SUB_CATEGORIES.EXPRESSIONS.WITSDOM,
    asyncRoutePath: './SubCategory',
    idNumber: 61,
    exact: true,
  },
  {
    name: 'Photostory',
    shortName: LINKS.SUB_CATEGORIES.EXPRESSIONS.PHOTOSTORY.split('/')[2],
    path: LINKS.SUB_CATEGORIES.EXPRESSIONS.PHOTOSTORY,
    asyncRoutePath: './SubCategory',
    idNumber: 62,
    exact: true,
  },
  {
    name: 'Gallery',
    shortName: LINKS.SUB_CATEGORIES.EXPRESSIONS.GALLERY.split('/')[2],
    path: LINKS.SUB_CATEGORIES.EXPRESSIONS.GALLERY,
    asyncRoutePath: './SubCategory',
    idNumber: 63,
    exact: true,
  },
  // {
  //   name: 'NITR in Motion',
  //   shortName: LINKS.SUB_CATEGORIES.EXPRESSIONS.NITR_IN_MOTION.split('/')[2],
  //   path: LINKS.SUB_CATEGORIES.EXPRESSIONS.NITR_IN_MOTION,
  //   asyncRoutePath: './SubCategory',
  //   idNumber: 64,
  //   exact: true,
  // },
  {
    name: 'Editorial',
    shortName: LINKS.SUB_CATEGORIES.EXPRESSIONS.EDITORIAL.split('/')[2],
    path: LINKS.SUB_CATEGORIES.EXPRESSIONS.EDITORIAL,
    asyncRoutePath: './SubCategory',
    idNumber: 65,
    exact: true,
  },
  {
    name: 'Podcasts',
    shortName: LINKS.SUB_CATEGORIES.EXPRESSIONS.PODCASTS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.EXPRESSIONS.PODCASTS,
    asyncRoutePath: './Podcast',
    idNumber: 66,
    exact: true,
  },
  {
    name: 'Miscellaneous',
    shortName: LINKS.SUB_CATEGORIES.EXPRESSIONS.MISCELLANEOUS.split('/')[2],
    path: LINKS.SUB_CATEGORIES.EXPRESSIONS.MISCELLANEOUS,
    asyncRoutePath: './SubCategory',
    idNumber: 67,
    exact: true,
  },
];

// ========================= INDIVIDUALS =========================
const INDIVIDUALS = [
  {
    name: 'Article',
    shortName: LINKS.INDIVIDUALS.ARTICLE.split('/')[1],
    path: LINKS.INDIVIDUALS.ARTICLE,
    asyncRoutePath: './Article',
    idNumber: 100,
    exact: true,
  },
  {
    name: 'Witsdom',
    shortName: LINKS.INDIVIDUALS.WITSDOM.split('/')[1],
    path: LINKS.INDIVIDUALS.WITSDOM,
    asyncRoutePath: './Article',
    idNumber: 101,
    exact: true,
  },
  {
    name: 'Photostory',
    shortName: LINKS.INDIVIDUALS.PHOTOSTORY.split('/')[1],
    path: LINKS.INDIVIDUALS.PHOTOSTORY,
    asyncRoutePath: './PhotoStory',
    idNumber: 102,
    exact: true,
  },
  {
    name: 'Gallery',
    shortName: LINKS.INDIVIDUALS.GALLERY.split('/')[1],
    path: LINKS.INDIVIDUALS.GALLERY,
    asyncRoutePath: './Gallery',
    idNumber: 103,
    exact: true,
  },
  {
    name: 'Portfolio',
    shortName: LINKS.INDIVIDUALS.PORTFOLIO.split('/')[1],
    path: LINKS.INDIVIDUALS.PORTFOLIO,
    asyncRoutePath: './Portfolio',
    idNumber: 104,
    exact: true,
  },
  {
    name: 'Live',
    shortName: LINKS.INDIVIDUALS.LIVE.split('/')[1],
    path: LINKS.INDIVIDUALS.LIVE,
    asyncRoutePath: './Live',
    idNumber: 105,
    exact: true,
  },
];

// TODO: Add the route objects for Interactions: Calendar, Polls, Forums Pages.
const INTERACTIONS = [];

const GENERAL = [
  {
    name: 'About',
    shortName: LINKS.GENERAL.ABOUT.split('/')[1],
    path: LINKS.GENERAL.ABOUT,
    asyncRoutePath: './About',
    idNumber: 201,
    exact: true,
  },
  {
    name: 'Guide',
    shortName: LINKS.GENERAL.GUIDE.split('/')[1],
    path: LINKS.GENERAL.GUIDE,
    asyncRoutePath: './Guide',
    idNumber: 202,
    exact: true,
  },
  {
    name: 'Contact',
    shortName: LINKS.GENERAL.CONTACT.split('/')[1],
    path: LINKS.GENERAL.CONTACT,
    asyncRoutePath: './Contact',
    idNumber: 203,
    exact: true,
  },
  {
    name: 'Legal',
    shortName: LINKS.GENERAL.LEGAL.split('/')[1],
    path: LINKS.GENERAL.LEGAL,
    asyncRoutePath: './Legal',
    idNumber: 204,
    exact: true,
  },

  // TODO: Add the remaining general routes: Archive, Terms & Policies, SAC and Clubs, Health, Emergency
];

const USER = [
  {
    name: 'Onboarding',
    shortName: LINKS.USER.ONBOARDING.split('/')[1],
    path: LINKS.USER.ONBOARDING,
    asyncRoutePath: './Onboarding',
    idNumber: 301,
    exact: true,
  },
  {
    name: 'User',
    shortName: LINKS.USER.PROFILE.split('/')[1],
    path: LINKS.USER.PROFILE,
    asyncRoutePath: './UserProfile',
    idNumber: 301,
    exact: true,
  },
];

// ========================= ROUTES OBJECT =========================
export default Object.freeze({
  CATEGORIES,
  SUB_CATEGORIES: {
    ARRAY: [CAMPUS, CONNECT, DDCWC, CAREER, ALUMNI, EXPRESSIONS],
    OBJECT: {
      CAMPUS,
      CONNECT,
      DDCWC,
      CAREER,
      ALUMNI,
      EXPRESSIONS,
    },
  },
  INDIVIDUALS,
  INTERACTIONS,
  GENERAL,
  USER,
});
