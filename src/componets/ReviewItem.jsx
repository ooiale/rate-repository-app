import { View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import Text from './Text';
import { repositoryStyles } from '../theme';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const ReviewItem = ({ id, createdAt, rating, text, user, repository, repositoryId, refetch }) => {
  const navigate = useNavigate();

  const [deleteReview] = useMutation(DELETE_REVIEW, {
    variables: { deleteReviewId: id },
    onCompleted: () => {
      refetch()
      console.log('Review deleted successfully');
    },
    onError: (error) => {
      console.error('Error deleting review:', error);
    },
  });


  const handlePress = () => {
    navigate(`/repository/${repositoryId}`);
  };

  const handleDeletion = () => {
    deleteReview()
  }

  return (
    <View style={styles.colContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{rating}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.username}>{user ? user.username : repository.fullName}</Text>
          <Text style={styles.date}>{formatDate(createdAt)}</Text>
          <Text style={styles.reviewText}>{text}</Text>
        </View>
      </View>
      {repositoryId && (
        <View style={styles.buttonContainer}>
          <Pressable style={repositoryStyles.repositoryItemButton} onPress={handlePress}>
            <Text style={styles.buttonText}>View Repository</Text>
          </Pressable>
          <Pressable style={[repositoryStyles.repositoryItemButton, styles.deleteButton]} onPress={handleDeletion}>
            <Text style={styles.buttonText}>Delete Review</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  colContainer: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
    padding: 10, // Optional: adds padding inside the border
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 5,
    marginTop: 2,
  },
  circleText: {
    color: 'blue',
    fontSize: 18,
  },
  info: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    marginBottom: 5,
  },
  reviewText: {
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
});

export default ReviewItem;
