import { gql } from '@apollo/client';

const newsLetterSubscription = gql`
  mutation ($newsletterSubscriptionId: ID!, $flag: Boolean!) {
    newsletterSubscription(id: $newsletterSubscriptionId, flag: $flag) {
      id
      isNewsletterSubscribed
    }
  }
`;

export default newsLetterSubscription;
