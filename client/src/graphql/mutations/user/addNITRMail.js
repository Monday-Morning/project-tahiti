import { gql } from '@apollo/client';

const addNITRMail = gql`
  mutation addNITREmail($email: String!, $nitrMail: String!) {
    addNITRMail(email: $email, nitrMail: $nitrMail) {
      id
      fullName
      accountType
      email
      nitrMail
    }
  }
`;

export default addNITRMail;
