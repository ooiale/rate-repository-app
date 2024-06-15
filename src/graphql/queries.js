import { gql } from '@apollo/client';
import { NODE_INFO_FRAGMENT, REVIEW_NODE_FRAGMENT } from './fragments';


export const GET_REPOSITORIES_QUERY = gql`
  ${NODE_INFO_FRAGMENT}
  query Query(
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String,
    $after: String,
    $first: Int
  ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword,
      after: $after,
      first: $first
    ) {
      edges {
        node {
          ...nodeInfo
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
 ${NODE_INFO_FRAGMENT}
  query GetRepository($id: ID!) {
    repository(id: $id) {
      ...nodeInfo
    }
  }
`

export const GET_REPOSITORY_URL = gql`
  query GetRepositoryUrl($id: ID!) {
    repository(id: $id) {
      id
      url
    }
  }
`

export const GET_REVIEW_QUERY = gql`
  ${REVIEW_NODE_FRAGMENT}
  query GetReview($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            ...reviewInfo
          }
        }
      }
    }
  }
`

export const GET_LOGGED_USER = gql`
  query getCurrentUser(
    $includeReviews: Boolean = false,
    $after: String,
    $first: Int
  ) {
    me {
      id
      username
      reviews(
        after: $after,
        first: $first
      ) @include(if: $includeReviews) {
        edges {
          node {
            id
            rating
            text
            createdAt
            repository {
              fullName
            }
            repositoryId
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;





















/*
to define here:

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      ${ ... }
    }
  }

to use elsewhere:

import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const Component = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES);
  // ...
};

`*/