import { gql } from "@apollo/client";
import { REVIEW_FIELDS } from "./fragments";


export const GET_AUTHORIZATION = gql`
  mutation authenticate($username:String!, $password:String!){
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  ${REVIEW_FIELDS}
  mutation CreateReview($ownerName: String!, $rating: Int!, $repositoryName: String!, $text: String) {
    createReview(
      review: {
        ownerName: $ownerName,
        rating: $rating,
        repositoryName: $repositoryName,
        text: $text
      }
    ) {
      ...ReviewFields
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      username
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`