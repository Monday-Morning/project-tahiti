import brave from '../images/logos/brave.png';
import chrome from '../images/logos/chrome.png';
import edge from '../images/logos/edge.png';
import blueLogo from '../images/logos/logo_blue.png';

export const APPS = Object.freeze({
  welcomeMessage: 'Sent from Monday Morning App',
  title: 'Continue with...',
  sources: [
    {
      logo: blueLogo,
      name: 'MM App',
      current: false,
      link: 'https://play.google.com/store/apps/details?id=in.ac.nitrkl.mondaymorning&hl=en&gl=US',
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
  ],
});
