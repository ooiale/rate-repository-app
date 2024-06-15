
import { GET_REPOSITORIES_QUERY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = (variables) => {
  const { loading, data, error, refetch, fetchMore } = useQuery(GET_REPOSITORIES_QUERY, {
    variables
  });

  if (error) {
    console.error('Error fetching repositories:', error);
  }

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { 
    fetchMore: handleFetchMore, 
    loading, 
    repositories: data ? data.repositories : [], 
    error, 
    refetchRepositories: refetch };
};

export default useRepositories
