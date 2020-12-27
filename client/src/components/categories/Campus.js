import { Grid, Container, makeStyles, Box, Button } from '@material-ui/core';
import React from 'react';
import SubCategory from './SubCategories';
import ArticleCard from '../widgets/ArticleCard';
import SmallArticleCard from '../widgets/SmallArticleCard';
import Forum from './Forum';

function Campus() {
  const Categories = [
    'Academics',
    'Campus Buzz',
    'Poll Analysis',
    'Halls',
    'Forum',
    'Student Activities',
  ];
  const classes = useStyles();
  return (
    <div
      className={classes.container}
      style={{
        maxWidth: '100%',
      }}
    >
      {/* carousel */}
      <Container>
        <Grid className={classes.category}>Campus</Grid>
        <Grid className={classes.categoryHeaderText}>
          Catch up on everything at NITR in this section. From Academics to Fests, find everything
          on campus here.
        </Grid>
        {Categories.map((category, index) => (
          <SubCategory text={category} key={index} className={classes.subCategories} />
        ))}
        <Container>
          <p
            style={{
              height: '100px',
            }}
          >
            Space for carousel
          </p>
        </Container>

        {/* academics heading */}

        <Container><div className={classes.wrapper}>
          <div>Academics</div>
          <div className={classes.line}></div>
          <div className={classes.seeAll}>
            See All
          </div>
        </div>


        </Container>

        {/* academics feature card */}
        <ArticleCard />

        {/* academics small cards */}
        <SmallArticleCard />
        <SmallArticleCard />
        <SmallArticleCard />
        {/* campuss buzz heading */}
        <Container>Campus Buzz</Container>
        {/* campuss buzz feature cards  */}
        <ArticleCard />


        {/* campuss buzz small cards */}
        <SmallArticleCard />
        <SmallArticleCard />
        <SmallArticleCard />

        {/* forum */}

        {/* <Forum/> */}

        {/* student activities header */}
        <Container>Student Activities</Container>
        {/* student activities feature card */}
        <ArticleCard />

        {/* student activities small cards */}
        <SmallArticleCard />
        <SmallArticleCard />
        <SmallArticleCard />

        {/* halls header */}
        <Container>halls</Container>

        {/* halls small card */}
        <SmallArticleCard />
        <SmallArticleCard />
        <SmallArticleCard />

        {/* poll analysis header */}
        <Container>Poll Analysis</Container>

        {/* student pulse block */}
        <Container>Student pulse</Container>
        {/* more cards small */}
        <SmallArticleCard />
        <SmallArticleCard />
        <SmallArticleCard />

      </Container>

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
      {/* </Container> */}
    </div>
  );
}

export default Campus;

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '100%',
    backgroundColor: '#F8F8F8',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#E5E5E5',
    },
  },

  seeAll: {
    // display: 'flex',
    width: '80px',
    fontSize: '14px',
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    // height: '1.5rem',
  },
  line: {
    borderBottom: '1px solid ',
    borderColor: theme.palette.common.black,
    width: '100%',
  },
  category: {
    fontSize: '24px',
    color: '#005299',
    fontFamily: 'IBM Plex Sans',
    lineHeight: '32px',
    marginTop: '1rem',
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
    marginBottom: '1rem',
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
