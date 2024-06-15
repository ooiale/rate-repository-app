import { FlatList, View, StyleSheet  } from 'react-native';
import Text from './Text';
import ReviewItem from './ReviewItem';
import { GET_LOGGED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const MyReviews = () => {

  const variables = {includeReviews: true, first: 4}

  const {data, loading, refetch, fetchMore } = useQuery(GET_LOGGED_USER, {variables})

  if (loading) {
    return <Text> loading... </Text>
  }

  const handleFetchMore = () => {
    const canFetchMore = data?.me.reviews.pageInfo.hasNextPage;
  
    if (!canFetchMore) {
      return;
    }
  
    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
  
        return {
          ...prevResult,
          me: {
            ...prevResult.me,
            reviews: {
              ...prevResult.me.reviews,
              edges: [
                ...prevResult.me.reviews.edges,
                ...fetchMoreResult.me.reviews.edges,
              ],
              pageInfo: fetchMoreResult.me.reviews.pageInfo,
            },
          },
        };
      },
    });
  };
  

  const onEndReach = () => {
    handleFetchMore();
  };


  const reviews = data.me.reviews.edges.length != 0
  ? data.me.reviews.edges.map(edge => edge.node)
  : []
  

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    pickerContainer: {
      padding: 10,
      backgroundColor: '#D3D3D3',
    },
  });

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <>
      <FlatList
            data={reviews}
            renderItem={({item}) => <ReviewItem {...item} refetch={refetch} />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={item => item.id}
            onEndReached={onEndReach}
          />
    </>
  );
}




export default MyReviews