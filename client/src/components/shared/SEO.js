import React from 'react';

// Libraries
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

// Assets
import Logo from '../../assets/images/logo.png';

// For the title prop, dont repeat 'Monday Morning'. The default template is set
// in the format of 'Monday Morning | Article Title as variable'
// Passing the Article title would do the job
const Head = ({
  title = 'Monday Morning',
  description = 'Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.',
  siteUrl = 'https://mondaymorning.nitrkl.ac.in',
  image = Logo,
  twitterUsername = '@mmnitrkl',
}) => {
  const { pathname } = useLocation();

  const seo = {
    title,
    description,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={title}
      defaultTitle={seo.title}
      titleTemplate={`%s | ${title}`}
    >
      <html lang='en' />

      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={twitterUsername} />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
    </Helmet>
  );
};

export default Head;
