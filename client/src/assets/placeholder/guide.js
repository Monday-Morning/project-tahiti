/* eslint-disable */
// import img from '../../assets/images/carousel.png';

// export const OPTIONS = Object.freeze({
//   tags: [
//     'NITR-101',
//     'Commn. Directory',
//     'Print Issue',
//     'SAC & Clubs Info',
//     'Hall Info',
//     'Health Info',
//     'Archives',
//   ],
// });

const years = [];
for (let i = 2015; i <= new Date().getFullYear(); i++) {
  years.push(i);
}

export const ARCHIVES = Object.freeze({
  years,
  months: [
    'All',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
});
// export const CAROUSEL = Object.freeze([img, img, img, img, img]);
