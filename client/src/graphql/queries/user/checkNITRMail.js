import { gql } from '@apollo/client';

const checkNITRMail = gql`
  query CheckNITRMail($nitrMail: String!) {
    checkNITRMail(nitrMail: $nitrMail) {
      nitrMail
    }
  }
`;
export default checkNITRMail;
