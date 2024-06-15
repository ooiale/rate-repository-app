import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
  const [register, { data, loading, error }] = useMutation(CREATE_USER);

  const signUp = async ({username, password}) => {
    try {
      const response = await register({ variables: { user: {username, password}}});
      const createdUser = response.data.createUser.username
      return createdUser;
    } catch (e) {
      console.error('Apollo Server error: ', e);
      // Extracting the error message from the Apollo error response
      const errorMessage = e?.graphQLErrors?.[0]?.message || 'Error upon registering new user';
      throw new Error(errorMessage);
    }
  };

  return { signUp, data, loading, error };
};

export default useSignUp;
