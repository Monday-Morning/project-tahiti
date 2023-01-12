import blueLogo from '../images/logos/logo_blue.png';
import chrome from '../images/logos/chrome.png';
import edge from '../images/logos/edge.png';
import safari from '../images/logos/safari.png';
import brave from '../images/logos/brave.png';

export const APPS = Object.freeze({
  welcomeMessage: 'Sent from Monday Morning App',
  title: 'See the website in...',
  sources: [
    {
      logo: blueLogo,
      name: 'MM App',
      current: false,
      link: 'https://play.google.com/',
    },
    {
      logo: chrome,
      name: 'Chrome',
      browser: 'Chrome',
      current: true,
    },
    {
      logo: edge,
      name: 'Edge',
      browser: 'Microsoft Edge',
      current: true,
    },
    {
      logo: brave,
      name: 'Brave',
      browser: 'Brave',
      current: true,
    },
    {
      logo: safari,
      name: 'Safari',
      browser: 'Safari',
      current: true,
    },
  ],
});
