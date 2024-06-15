import { FlatList, View, StyleSheet  } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';

import React, { useState, useRef  } from 'react';

import RepositoryListFilter from './RepositoryListFilter';
import { useDebouncedCallback } from 'use-debounce';


const RepositoryListContainer = () => {

  const [selectedSort, setSelectedSort] = useState("latest")
  const [queryFilter, setQueryFilter] = useState('')
  const searchbarRef = useRef(null);

  const sortBy = {
    "orderBy": selectedSort === "latest" ? "CREATED_AT" : "RATING_AVERAGE",
    "orderDirection": selectedSort === "latest" ? "DESC" : selectedSort,
    "searchKeyword": queryFilter,
    "first": 5,
  }

  const {loading, repositories, refetchRepositories, fetchMore } = useRepositories(sortBy)

  const debouncedRefetchRepositories = useDebouncedCallback(
    (value) => {
      refetchRepositories({ ...sortBy, searchKeyword: value });
    },
    500, // Debounce delay in milliseconds
    { trailing: true } 
  );

  const onQueryFilterChange = (value) => {
    setQueryFilter(value);
    // Call the debounced callback when the query filter changes
    debouncedRefetchRepositories(value);
  };

  if (loading) {
    return <Text> loading... </Text>
  }

  const repositoryNodes = repositories.length != 0
  ? repositories.edges.map(edge => edge.node)
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

  const ListHeader = () => (
    <RepositoryListFilter
      setSelectedSort={setSelectedSort}
      selectedSort={selectedSort}
      queryFilter={queryFilter}
      searchbarRef={searchbarRef}
      setQueryFilter = {setQueryFilter}
      onQueryFilterChange={onQueryFilterChange}
    />
  )

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <>
        {ListHeader()}
      <FlatList
            data={repositoryNodes}
            renderItem={({item}) => <RepositoryItem {...item} />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={item => item.id}
            onEndReached={onEndReach}
          />
    </>
  );
}




export default RepositoryListContainer