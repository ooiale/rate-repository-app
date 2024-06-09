import { gql } from '@apollo/client';
import { NODE_INFO_FRAGMENT } from './fragments';


export const GET_REPOSITORIES_QUERY = gql `
  ${NODE_INFO_FRAGMENT}
  query Query {
    repositories {
      edges {
        node {
          ...nodeInfo
        }
      }
    }
  }
`

export const GET_LOGGED_USER = gql`
  {
    me {
      id
      username
    }
  }
`


















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