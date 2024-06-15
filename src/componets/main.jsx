import { StyleSheet, View } from 'react-native';
import RepositoryListContainer from './RepositoryListContainer';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import RepositoryItemSingle from './RepositoryItemSingle';
import ReviewCreateForm from './ReviewCreateForm';
import SignUp from './SignUp';
import MyReviews from './MyReviews';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});


const Main = () => {
  
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryListContainer/>} />
        <Route path='/sign-in' element = {<SignIn />}/>
        <Route path='/sign-up' element = {<SignUp />}/>
        <Route path="/repository/:id" element={<RepositoryItemSingle />} />
        <Route path="/create-review" element={<ReviewCreateForm />} />
        <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;