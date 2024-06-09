import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const {loading, repositories} = useRepositories()
  
  if (loading) {
    return <Text> loading... </Text>
  }


  const repositoryNodes = repositories.length != 0
    ? repositories.edges.map(edge => edge.node)
    : []


  return (
      <FlatList
        data={repositoryNodes}
        renderItem={({item}) => <RepositoryItem {...item}/>}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
      />
  );
};

export default RepositoryList;