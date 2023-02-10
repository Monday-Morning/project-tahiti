import { gql } from '@apollo/client';

const newsLetterSubscription = gql`
  mutation ($userId: ID!, $flag: Boolean!) {
    newsletterSubscription(id: $userId, flag: $flag) {
      id
      isNewsletterSubscribed
    }
  }
`;

export default newsLetterSubscription;
