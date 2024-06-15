import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarItem from './AppBarItem';

import { useNavigate } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_LOGGED_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',

  },
  flexItem: {
    marginHorizontal: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    contentContainerStyle: 'center',
  },
});


const AppBar = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()
  const {data, loading} = useQuery(GET_LOGGED_USER)
  if (loading) {
    return <></>
  }

  const onLogout = () => {
    authStorage.removeAccessToken()
    apolloClient.resetStore()
    navigate('/')
  }

  return (
    <View style={[styles.container]}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}  // Hides the horizontal scroll indicator
        decelerationRate="fast"  // Makes the scrolling feel more responsive
      >
        <AppBarItem style = {styles.flexItem} text={'repositories'} onPress={() => navigate('/')}/>
        {data.me 
        ? (
          <>
          <AppBarItem style = {styles.flexItem} text={'Create a review'} onPress={() => navigate('/create-review')}/> 
          <AppBarItem style = {styles.flexItem} text={'My reviews'} onPress={() => navigate('/my-reviews')}/> 
          <AppBarItem style = {styles.flexItem} text={`sign-out (${data.me.username})`} onPress={onLogout}/> 
          </>
        )
        : (
          <>
          <AppBarItem style = {styles.flexItem} text={'sign-in'} onPress={() => navigate('/sign-in')}/>
          <AppBarItem style = {styles.flexItem} text={'sign-up'} onPress={() => navigate('/sign-up')}/>
          </>
        )

        }
      </ScrollView>
    </View>
  )
};

export default AppBar;