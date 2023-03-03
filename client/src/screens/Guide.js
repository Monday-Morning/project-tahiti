//libraries
import { Container } from '@mui/material';

// Components
import Options from '../components/guide/Options';
import Archives from '../components/guide/Archive';
import BigCarousel from '../components/widgets/BigCarousel';
import BackButton from '../components/shared/button/BackButton';

// placeholder
import { MINI_PRINT } from '../assets/placeholder/guide';

function Contact({ issues }) {
  // const latestIssue = issues[0];
  // const secondLatestIssue = issues[1];

  // const { featured } = latestIssue;

  // const articles = [
  //   ...latestIssue.articles.filter((item) => !featured.includes(item.id)),
  //   ...secondLatestIssue.articles,
  // ];

  return (
    <div>
      <Container>
        <BackButton path='/' goTo='Home' />
        <Options />
      </Container>
      <BigCarousel head='Print Issues' content={MINI_PRINT} />
      {/* <Archives issues={articles} /> */}
    </div>
  );
}

export default Contact;
