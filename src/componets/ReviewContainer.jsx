import { Text, FlatList, View, StyleSheet } from "react-native"
import { useQuery } from "@apollo/client"
import { GET_REVIEW_QUERY } from "../graphql/queries";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ReviewContainer = ({id}) => {

  const { data: reviewData, loading: reviewLoading } = useQuery(GET_REVIEW_QUERY, {
    variables: { id },
  });

  if (reviewLoading) {
    return <Text> Loading... </Text>
  }

  
  const reviews = reviewData.repository.reviews.edges.length != 0
    ? reviewData.repository.reviews.edges.map(edge => edge.node)
    : []


  const ItemSeparator = () => <View style={styles.separator} />;
  return (
      <FlatList
        data={reviews}
        renderItem={({item}) => <ReviewItem {...item} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
      />
  );


}

export default ReviewContainer