import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarItem from './AppBarItem';

import { useNavigate } from 'react-router-native';


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
  const nagivate = useNavigate()

  

  return (
    <View style={[styles.container]}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}  // Hides the horizontal scroll indicator
        decelerationRate="fast"  // Makes the scrolling feel more responsive
      >
        <AppBarItem style = {styles.flexItem} text={'repositories'} onPress={() => nagivate('/')}/>
        <AppBarItem style = {styles.flexItem} text={'sign-in'} onPress={() => nagivate('/sign-in')}/>
      </ScrollView>
    </View>
  )
};

export default AppBar;