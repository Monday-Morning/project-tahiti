/* eslint-disable */
import img from '../../assets/images/carousel.png';
import imgPrint from '../images/guide/mini-print1.png';
import nitR_1 from '../images/guide/nitR-101.png';
import nitR_2 from '../images/guide/nitR-101(2).png';

export const OPTIONS = Object.freeze({
  tags: [
    'NITR-101',
    'Commn. Directory',
    'Print Issue',
    'SAC & Clubs Info',
    'Health Info',
    // 'Hall Info',
    // 'Archives',
  ],
});

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

export const CAROUSEL = Object.freeze([img, img, img, img, img]);

export const MINI_PRINT = Object.freeze([
  {
    img: imgPrint,
    link: 'https://drive.google.com/file/d/1wK9g_auqkSnFZdQpKdyHCQA8ECF33FFA/view?usp=sharing',
    desc: '',
  },
  {
    img: nitR_1,
    link: 'https://drive.google.com/file/d/1vs_Uel9_ARSc9w1DPnowKau5Z9OAy4Kc/view?usp=sharing',
    desc: '',
  },
  {
    img: nitR_2,
    link: 'https://mondaymorning.nitrkl.ac.in/article/62c492847b0cb908870f747a/NITR-101-Making-Your-Choice-Of-NIT-Rourkela-Simpler',
    desc: '',
  },
]);
