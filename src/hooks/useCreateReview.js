import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useNavigate } from 'react-router-native';
import { GET_LOGGED_USER } from '../graphql/queries';
const useCreateReview = () => {
  const [sendReview, { data, loading, error }] = useMutation(
    CREATE_REVIEW,
    {
      refetchQueries: [{ query: GET_LOGGED_USER, variables: { includeReviews: true } }]
    }
  );
  const navigate = useNavigate()

  const createReview = async ({ownerName, rating, repositoryName, text}) => {
    try {
      rating = Number(rating)
      const response = await sendReview({ variables: { ownerName, rating, repositoryName, text } });
      const data = response.data.createReview;
      navigate(`/repository/${data.repositoryId}`)
      return data;
    } catch (e) {
      console.error('Apollo Server error: ', e);
      // Extracting the error message from the Apollo error response
      const errorMessage = e?.graphQLErrors?.[0]?.message || 'Error upon sending review';
      throw new Error(errorMessage);
    }
  };

  return { createReview, data, loading, error };
};

export default useCreateReview;
