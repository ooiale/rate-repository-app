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

export const REVIEW_NODE_FRAGMENT = gql`
  fragment reviewInfo on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`

export const REVIEW_FIELDS = gql`
  fragment ReviewFields on Review {
    id
    rating
    createdAt
    text
    user {
      username
      id
    }
    repositoryId
  }
`