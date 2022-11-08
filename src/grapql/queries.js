import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          id
          fullName
          reviewCount
          ownerAvatarUrl
          description
          stargazersCount
          language
          forksCount
          ratingAverage
          reviews {
            totalCount
          }
        }
      }
    }
  }
`
