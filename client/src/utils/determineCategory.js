const CATEGORY_MAP = {
  '-1': '......',

  1: 'Campus',
  11: 'Academics',
  12: 'Campus Buzz',
  13: 'Forum',
  14: 'Student Activities',
  15: 'Halls',
  16: 'Poll Analysis',
  17: 'Admission',

  // Campus => Academics => Department
  1101: 'Biotechnology and Biomedical',
  1102: 'Ceramic',
  1103: 'Chemical',
  1104: 'Civil',
  1105: 'Computer Science',
  1106: 'Chemistry',
  1107: 'Humanities and Social Sciences',
  1108: 'Life Science',
  1109: 'Mathematics',
  1110: 'Physics and Astronomy',
  1111: 'Electrical',
  1112: 'Electronics and Communication',
  1113: 'Food Process',
  1114: 'Industrial Design',
  1115: 'Mechanical',
  1116: 'Metallurgical and Materials',
  1117: 'Mining',
  1118: 'Planning and Architecture',
  1119: 'School of Management',
  1120: 'Earth and Atmospheric',

  2: 'Connect',
  21: 'Interviews',
  22: 'SAC Speaks',
  23: 'CGPA',
  24: 'Guest Interview',

  3: 'DD & CWC',
  31: "Director's Desk",
  32: "Chief Warden's Column",

  4: 'Career',
  41: 'Placements',
  42: 'Internships',
  43: 'Higher Eduction',
  44: 'Guidance',
  45: 'Live',

  5: 'Alumni',
  51: 'Alumni Speaks',
  52: 'Alumni Affairs',

  6: 'Expressions',
  61: 'Witsdom',
  62: 'Photostory',
  63: 'Gallery',
  64: 'NITR in Motion',
  65: 'Podcasts',
  66: 'Editorial',
  67: 'Miscellaneous',

  // Expressions => Editorial => Type
  661: 'Opinion',
  662: 'Science and Society',
  663: 'Anecdotes',
};

export default (number) => CATEGORY_MAP[number];
