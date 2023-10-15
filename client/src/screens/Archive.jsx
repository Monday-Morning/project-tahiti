import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

// libraries
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';

// Components
import BackButton from '../components/shared/button/BackButton';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
import Calendar from '../components/guide/calendar';

// Assets
import { ARCHIVES } from '../assets/placeholder/guide';

//gql
import listArticlesByYearAndMonth from '../graphql/queries/article/listArticleByYearAndMonth';
import { apolloContext } from '../context/ApolloContextProvider';

function Archive({ archiveArticles, year, month }) {
  const classes = useStyles();
  const graphClient = useContext(apolloContext);

  const { push } = useRouter();

  const [articles, setArticles] = useState(archiveArticles);
  const [activeMonth, setMonth] = useState(month);
  const [activeYear, setYear] = useState(year);
  const [isActive, setIsActive] = useState(true);
  const [offset, setOffset] = useState(0);

  const handleRouteChange = (_year, _month) => {
    push(`/archive/${_year}/${_month}`, undefined, {
      shallow: false,
    });
  };

  const selectMonth = (month) => {
    setArticles([]);
    setMonth(month);
    handleRouteChange(activeYear, month);
  };
  const selectYear = (year) => {
    setArticles([]);
    setYear(year);
    handleRouteChange(year, activeMonth);
  };

  useEffect(() => {
    if (offset === 0) return;

    (async () => {
      setIsActive(false);
      try {
        const {
          data: { listArticlesByYearAndMonth: archiveArticles },
        } = await graphClient.query({
          query: listArticlesByYearAndMonth,
          variables: {
            onlyPublished: true,
            year: activeYear,
            month: ARCHIVES.months.indexOf(activeMonth),
            limit: 9,
            offset: offset,
          },
        });
        setArticles([...articles, ...archiveArticles]);
        setIsActive(true);
      } catch (err) {
        setIsActive(false);
      }
    })();
  }, [offset]);

  return (
    <>
      <Container>
        <BackButton path='/' goTo='Home' />
        <Typography variant='h1' className={classes.head}>
          Archive
        </Typography>
      </Container>
      <Calendar
        activeMonth={activeMonth}
        activeYear={activeYear}
        selectMonth={selectMonth}
        selectYear={selectYear}
      />
      <Container>
        <ArticleCardStack articleList={articles} />
        <div className={classes.showMoreButton}>
          <Button
            onClick={() => setOffset((prev) => prev + 9)}
            disabled={!isActive}
            variant='contained'
          >
            Show More
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Archive;

const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.primary.blue60,
    lineHeight: '2rem',
    margin: '2.7rem 0 2rem 0.7rem',
  },
  showMoreButton: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0',
  },
}));
