import { gql } from '@apollo/client';

export default gql`
  query getLiveByYearAndSemester($year: Int!, $semester: SemesterEnum!) {
    getLiveByYearAndSemester(year: $year, semester: $semester) {
      id
      liveType
      company {
        id
        name
        logo {
          store
          storePath
        }
        location
      }
      recruits
      year
      semester
      studentsRecruited {
        name
        branch
        degree
      }
      ctc
      benefits
    }
  }
`;
