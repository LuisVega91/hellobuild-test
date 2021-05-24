
import {gql} from 'apollo-boost';

export const REPOSITORY_QUERY  = gql`
  {
    viewer {
      login
      name
      email
      url
      avatarUrl
      projects {
        totalCount
      }
      followers {
        totalCount
      }
      pullRequests {
        totalCount
      }
      repositories(last: 100) {
        totalCount
        nodes {
          id
          name
          nameWithOwner
          url
          stargazerCount
          description
          owner {
            avatarUrl
            login
          }
        }
      }
    }
  }
`;
