import React, { useState } from 'react';
import { useRouter } from 'next/router';

// Libraries
import { Container, useMediaQuery, Grid } from '@material-ui/core';
import { useDrag } from 'react-use-gesture';
import { GraphClient } from '../../config/ApolloClient';

// Components
import Marginals from '../../components/marginals/Marginals';
import Comments from '../../components/article/comments';
import ArticleHeader from '../../components/article/Header';
import ArticleContent from '../../components/article/Content';
import Disclaimer from '../../components/article/Disclaimer';
import ArticleTags from '../../components/article/Tags';
// import RecommendedArticles from '../../components/article/RecommendedArticles';
import ActivityIndicator from '../../components/shared/ActivityIndicator';
import SidePanel from '../../components/article/SidePanel';

// Assets
import theme from '../../config/themes/light';

// Queries
import getArticleByID from '../../graphql/queries/article/getArticleByID';
import getArticleLink, { getArticleSlug } from '../../utils/getArticleLink';

function ArticlePage({ article }) {
  const { isFallback } = useRouter();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (isMatch) {
      if (down && mx < -10) {
        setToggleSidebar(true);
      } else if (
        (down && mx > 10 && toggleSidebar) ||
        (down && my !== 0 && toggleSidebar)
      ) {
        setToggleSidebar(false);
      }
    }
  });

  if (isFallback || !article) return <ActivityIndicator size={150} />;

  return (
    <Marginals>
      <Container {...bind()}>
        <ArticleHeader article={article} />

        <Grid container>
          <Grid item md={9}>
            <ArticleContent content={article.content} />
            <Disclaimer />
            <ArticleTags tags={article?.tags} />
            <hr />
            <Comments />
          </Grid>

          <Grid item md={3}>
            <SidePanel
              content={article.content}
              toggleSidebar={toggleSidebar}
              articleTitle={article.title}
            />
          </Grid>
        </Grid>
      </Container>

      {/* TODO: Implement reccomender */}
      {/* <RecommendedArticles title='Reading based on your history' /> */}
    </Marginals>
  );
}

export async function getStaticProps({
  params: {
    article: [articleId, articleSlug],
  },
  preview,
}) {
  const {
    data: { getArticleByID: article },
  } = await GraphClient.query({
    query: getArticleByID,
    variables: { id: articleId },
  });

  if (!article) {
    return {
      notFound: true,
    };
  }

  if (articleSlug !== getArticleSlug(article.title)) {
    return {
      redirect: {
        destination: getArticleLink(articleId, article.title),
        permanent: false,
      },
    };
  }

  return {
    props: {
      article,
    },
    revalidate:
      preview || article.publishStatus === 'PUBLISHED' ? 0 : 60 * 60 * 24 * 30, // 30 Days
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export default ArticlePage;
