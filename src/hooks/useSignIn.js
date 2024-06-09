import { useMutation } from '@apollo/client';
import { GET_AUTHORIZATION } from '../graphql/mutations';
import { useNavigate } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const [authenticate, { data, loading, error }] = useMutation(GET_AUTHORIZATION);
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()

  const signIn = async ({username, password}) => {
    try {
      const response = await authenticate({ variables: { username, password } });
      const token = response.data.authenticate.accessToken;
      await authStorage.setAccessToken(token)
      apolloClient.resetStore();
      navigate('/')
      return token;
    } catch (e) {
      console.error('Authentication error: ', e);
    }
  };

  return { signIn, data, loading, error };
};

export default useSignIn;
