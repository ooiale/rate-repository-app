import {StyleSheet, Platform} from 'react-native'

export const formStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    marginBottom: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 4,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
})

export const repositoryStyles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  topRow: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#f0f0f0',
  },
  middleRow: {
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 80,
    paddingTop: 10,
    backgroundColor: '#f0f0f0'
  },
  bottomRow: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#f0f0f0'
  },
  containerReview: {
    flexDirection: 'column',
    height: '90%',
  },
  topRowReview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#f0f0f0',
  },
  middleRowReview: {
    justifyContent: 'center',
    paddingLeft: 80,
    paddingTop: 10,
    backgroundColor: '#f0f0f0'
  },
  bottomRowReview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#f0f0f0'
  },
  textContainer: {
    marginLeft: 10,
    marginRight: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boldText: {
    fontWeight: '700',
  },
  languageContainer: {
    backgroundColor: '#0366d6',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
  },
  languageText: {
    color: '#Ffffff',
  },
  image: {
    width: 50, 
    height: 50, 
    borderRadius: 5, 
  },
  repositoryItemButton: {
    backgroundColor: '#007bff',
    margin: 10,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
});

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSeconday: '#586069',
    primary: '#0366d6',
    white: '#Ffffff'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme