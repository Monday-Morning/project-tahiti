//libraries
import { Container } from '@mui/material';

// Components
import Options from '../components/guide/Options';
import Archives from '../components/guide/Archive';
import BigCarousel from '../components/widgets/BigCarousel';
import BackButton from '../components/shared/button/BackButton';

// placeholder
import { CAROUSEL } from '../assets/placeholder/guide';

function Contact({ issues }) {
  const latestIssue = issues[0];
  const secondLatestIssue = issues[1];

  const { featured } = latestIssue;

  const articles = [
    ...latestIssue.articles.filter((item) => !featured.includes(item.id)),
    ...secondLatestIssue.articles,
  ];

  return (
    <div>
      <Container fixed={true} maxWidth={false}>
        <BackButton path='/' goTo='Home' />
        <Options />
      </Container>
      <BigCarousel head='Issues' IMAGE={CAROUSEL} navigator='2020-2021' />
      <Archives issues={articles} />
    </div>
  );
}

export default Contact;
