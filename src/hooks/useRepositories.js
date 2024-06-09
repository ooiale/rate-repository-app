
import { GET_REPOSITORIES_QUERY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = () => {
  const { loading, data, error } = useQuery(GET_REPOSITORIES_QUERY, {
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    console.error('Error fetching repositories:', error);
  }

  return { loading, repositories: data ? data.repositories : [], error };
};

export default useRepositories
