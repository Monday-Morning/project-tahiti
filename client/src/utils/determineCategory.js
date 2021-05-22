const CATEGORY_MAP = {
  1: 'Campus',
  11: 'Academics',
  12: 'Campus Buzz',
  13: 'Forum',
  14: 'Student Activities',
  15: 'Halls',
  16: 'Poll Analysis',

  2: 'Connect',
  21: 'Interviews',
  22: 'SAC Speaks',
  23: 'CGPA',
  24: 'Guest Interview',

  3: 'DD & CWC',
  31: "Director's Desk",
  32: "Chief Warden's Desk",

  4: 'Career',
  41: 'Placements',
  42: 'Internships',
  43: 'Higher Eduction',
  44: 'Live',

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
};

export default (number) => CATEGORY_MAP[number];
