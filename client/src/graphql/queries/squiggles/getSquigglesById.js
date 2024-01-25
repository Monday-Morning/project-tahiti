import { gql } from '@apollo/client';

const getSquigglesById = gql`
  query ($getSquigglesByIdId: ID!) {
    getSquigglesByID(id: $getSquigglesByIdId) {
      id
      content
      createdAt
    }
  }
`;

export default getSquigglesById;
