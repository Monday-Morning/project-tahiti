import React from 'react';

//libraries
import { Box, Container, Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';

//Components
import Header from '../components/marginals/Header';
import Footer from '../components/marginals/Footer';
import TopBar from '../components/marginals/TopBar';
import ArticleCard from '../components/widgets/ArticleCard';
import Pulse from '../components/widgets/Pulse';
import Squiggles from '../components/widgets/Squiggles';
import FeaturedArticles from '../components/homepage/FeaturedArticles';
import Trending from '../components/homepage/Trending';
import Banner from '../components/homepage/Banner';
import Calendar from '../assets/images/calendar.png';


function Home() {
  return (
    <div>
      <TopBar />
      <Header />
      <Container>
        {/* FeaturedArticles */}
        <Box mt={4}>
          <FeaturedArticles />
        </Box>
        <Box mt={4}>
          <Squiggles />
        </Box>
        <Box mt={4}>
          <Grid container spacing={4}>
            {[0, 1, 2].map((val) => (
              <Grid key={val} item sm={4}>
                <ArticleCard />
              </Grid>
            ))}
            <Grid item sm={8}>
              <Box mt={2}>
                <Pulse />
              </Box>
            </Grid>
            <Grid item sm={4}>
              <Card
                style={{
                  width: '100%',
                  height: '100%',
                  boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
                  backgroundImage: `url(${Calendar})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></Card>
            </Grid>
            {[0, 1, 2].map((val) => (
              <Grid key={val} item sm={4}>
                <ArticleCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Banner />
      <Container>
        <Box mt={4}>
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <Card
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '600px',
                  boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
                }}
              ></Card>
            </Grid>
            <Grid item sm={6}>
              <Card
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '600px',
                  boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
                }}
              ></Card>
            </Grid>
          </Grid>
          <Trending />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
