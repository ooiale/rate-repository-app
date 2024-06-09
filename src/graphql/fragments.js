import { gql } from '@apollo/client';

export const NODE_INFO_FRAGMENT = gql `
  fragment nodeInfo on Repository {
    id
    name
    ownerName
    createdAt
    fullName
    reviewCount
    ratingAverage
    forksCount
    stargazersCount
    description
    language
    ownerAvatarUrl
  }
`