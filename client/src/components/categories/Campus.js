import { Grid, Container, makeStyles, Box, Button } from '@material-ui/core';
import React from 'react';
import SubCategory from './SubCategories';
import ArticleCard from '../widgets/ArticleCard';
import SmallArticleCard from '../widgets/SmallArticleCard';
import Forum from './Forum';
import theme from '../../config/themes/light';
import Carousel from '../widgets/Carousel';
import Pulse from '../widgets/Pulse';


function Campus() {
  const Categories = [
    'Academics',
    'Campus Buzz',
    'Poll Analysis',
    'Halls',
    'Forum',
    'Student Activities',
  ];
  const Articles = [
    {
      title: 'Chaos, Curiosity and COVID-19: A Biotechnologist’s Perspective',
      authors: ['Debabrata Malik', 'Rama Krushna Behera'],
      readTime: '12 min',
    },
    {
      title: 'Chaos, Curiosity and COVID-19: A Biotechnologist’s Perspective',
      authors: ['Debabrata Malik', 'Rama Krushna Behera'],
      readTime: '12 min',
    },
    {
      title: 'Chaos, Curiosity and COVID-19: A Biotechnologist’s Perspective',
      authors: ['Debabrata Malik', 'Rama Krushna Behera'],
      readTime: '12 min',
    },
  ];

  const classes = useStyles(theme);
  return (
    <div className={classes.container}>
      <Container>
        <Grid className={classes.category}>Campus</Grid>
        <Grid className={classes.categoryHeaderText}>
          Catch up on everything at NITR in this section. From Academics to Fests, find everything
          on campus here.
        </Grid>
        <Grid className = {classes.buttons}>
          {Categories.map((category, index) => (
            <SubCategory text={category} key={index} className={classes.subCategories} />
          ))}
        </Grid>
        {/* carousel */}
        <Container className = {classes.carousel}>
        {/* <Carousel  /> */}

        </Container>

        {/* academics heading */}

          <div className={classes.wrapper}>
            <div className={classes.categorHeadings}>Academics</div>
            <div className={classes.seeAll}>See All</div>
          </div>

        {/* academics feature card */}
        <ArticleCard className={classes.articleCard} />

        {/* academics small cards */}
        {Articles.map(({ title, authors, readTime }, index) => (
          <SmallArticleCard
            title={title}
            authors={authors}
            readtime={readTime}
            key={index}
          />
        ))}

        {/* campuss buzz heading */}
          <div className={classes.wrapper}>
            <div className={classes.categorHeadings}>Campus Buzz</div>
            <div className={classes.seeAll}>See All</div>
          </div>
        {/* campuss buzz feature cards  */}
        <ArticleCard />

        {/* campuss buzz small cards */}
        {Articles.map(({ title, authors, readTime }, index) => (
          <SmallArticleCard
            title={title}
            authors={authors}
            readtime={readTime}
            key={index}
          />
        ))}

        {/* forum */}
        <Forum />

        {/* student activities header */}
          <div className={classes.wrapper}>
            <div className={classes.categorHeadings}>Student Activities</div>
            <div className={classes.seeAll}>See All</div>
          </div>
        
        {/* student activities feature card */}
        <ArticleCard />

        {/* student activities small cards */}
        {Articles.map(({ title, authors, readTime }, index) => (
          <SmallArticleCard
            title={title}
            authors={authors}
            readtime={readTime}
            key={index}
          />
        ))}
        {/* halls header */}
        
          <div className={classes.wrapper}>
            <div className={classes.categorHeadings}>Halls</div>
            <div className={classes.seeAll}>See All</div>
          </div>
        

        {/* halls small card */}
        {Articles.map(({ title, authors, readTime }, index) => (
          <SmallArticleCard
            title={title}
            authors={authors}
            readtime={readTime}
            key={index}
          />
        ))}

        {/* poll analysis header */}
          <div className={classes.wrapper}>
            <div className={classes.categorHeadings}>Poll Analysis</div>
            <div className={classes.seeAll}>See All</div>
          </div>
        {/* student pulse block */}

        {/* more cards small */}

        <div className = {classes.studentPulse}>
        <Pulse />
          
        {Articles.map(({ title, authors, readTime }, index) => (
          <SmallArticleCard
            title={title}
            authors={authors}
            readtime={readTime}
            key={index}
          />
        ))}
        </div>
      </Container>

    </div>
  );
}

export default Campus;

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '100%',
    backgroundColor: '#F8F8F8',
    marginTop: '1rem',
    paddingTop:'1rem',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#E5E5E5',
    },
  },
  carousel: {
    maxWidth: '100%',
  },

  buttons:{
   marginBottom:'1rem',
   marginTop:'1rem',
  },

  seeAll: {
    // display: 'flex',
    whiteSpace: 'nowrap',
    fontSize: '14px',
    textDecoration:'underline',
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2.7rem 0 2rem 0',
    fontSize: '20px',
    // height: '1.5rem',
  },
  line: {
    borderBottom: '1px solid ',
    borderColor: theme.palette.common.black,
    width: '-webkit-fill-available',
    marginInline: '10px',
  },
  categorHeadings: {
    whiteSpace: 'nowrap',
  },
  category: {
    fontSize: '24px',
    color: '#005299',
    fontFamily: 'IBM Plex Sans',
    lineHeight: '32px',
    paddingdTop: '1rem',
    borderTop: '4px solid #005299',
    width: '124px',
  },
  categoryHeaderText: {
    fontFamily: 'Source Sans Pro',
    fontSize: '14px',
    color: '#6E6E6E',
    opacity: '75%',
    marginTop: '1rem',
    // marginBottom: '1rem',
  },
  studentPulse:{
    marginBottom:'1rem',
  },
}));

// const useStyles = makeStyles((theme) => ({
//   container: {
//     backgroundColor: '#E5E5E5',
//     marginTop: '2rem',
//     paddingTop: '2rem',
//     paddingBottom: '2rem',
//     maxWidth: '100%',

//   },
//   category: {
//     color: '#005299',
//     fontFamily: 'IBM Plex Sans',
//     fontSize: '32px',
//     fontStyle: 'normal',
//     fontWeight: '600',
//     lineHeight: '48px',
//     textAlign: 'left',
//     borderTop: '4px solid',
//     width: '205px',
//   },
//   categoryHeader: {
//     display: 'flex',
//     flexDirection: 'row',
//     paddingBottom: '1rem',
//   },
//   categoryHeaderText: {
//     //styleName: Desktop/Body / Regular;
//     fontFamily: 'Source Sans Pro',
//     fontSize: '1rem',
//     // fontStyle: 'normal',
//     fontWeight: 'normal',
//     lineHeight: '20px',
//     textAlign: 'left',
//     color: '#6E6E6E',
//     paddingTop: '1rem',
//     // paddingLeft: '102px',
//     // display: 'flex',
//     // flexDirection: 'column',
//     // justifyContent: 'center',
//     opacity: '75%',
//     [theme.breakpoints.down('sm')]: {
//       fontSize: '14px',
//     },
//   },
//   subCategories: {
//     // marginTop : '100rem',
//     // color:'red',
//     height: '48px',
//     width: '112px',
//     fontFamily: 'IBM Plex Sans',
//     fontWeight: '600',
//     fontStyle: 'normal',
//     fontSize: '22px',
//     lineHeight: ' 24px',
// [theme.breakpoints.down('sm')]: {
//   lineHeight: '20px',
//   fontSize: '14px',
// },
//   },
//   articleCard: {
//     diplay: 'inline',
//   },
// }));

{/* <Container>
    {/* 
  <Container className={classes.categoryHeader}>
    <Grid className={classes.category} item xs={12} md={2}>
      Campus
    </Grid>
    <Grid className={classes.categoryHeaderText} item xs={12} md={10}>
      Catch up on everything at NITR in this section. From Academics to Fests, find everything
      on campus here.
    </Grid>
  </Container> */}

{/* <Container style = {{
    // display: 'flex'
  }}>
    {Categories.map((category, index) => (
      <SubCategory text={category} key={index} className = {classes.subCategories} />
    ))}
  </Container> */}

{/* <Container className={classes.articleCard}>
    <Box mt={4}>
      <Grid container spacing={4}>
        {[0, 1, 2].map((val) => (
          <Grid key={val} item sm={4}>
            <ArticleCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container> */}
{/* </Container> */ }