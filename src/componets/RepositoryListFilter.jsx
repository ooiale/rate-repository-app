import { View, StyleSheet, Pressable  } from 'react-native';
import Text from './Text';
import { Searchbar } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';

const RepositoryListFilter = ({setSelectedSort, selectedSort, queryFilter, searchbarRef, onQueryFilterChange}) => {

  useEffect(() => {
    if (searchbarRef.current && queryFilter) {
      searchbarRef.current.focus();
    }
  }, [queryFilter]);

  const [showPicker, setShowPicker] = useState(false)

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    pickerContainer: {
      padding: 10,
      backgroundColor: '#D3D3D3',
    },
    buttonContainer: {
      backgroundColor: '#D3D3D3', // Button background color
      paddingVertical: 15, // Button height
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', // Full width
    },
    buttonText: {
      color: 'white', // Button text color
      fontWeight: 'bold',
      fontSize: 16,
    },
    searchBar: {
      margin: 10,
    },
  });


  return (
    <View>
      <Pressable style={styles.buttonContainer}  onPress={() => setShowPicker(!showPicker)}>
        <Text> Toggle the sorting options </Text>
      </Pressable>
      {showPicker && (
      <>
        <Searchbar
          ref={searchbarRef}
          placeholder="Filter repositories by name"
          onChangeText={(value) => onQueryFilterChange(value)}
          value={queryFilter}
          style={styles.searchBar}
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedSort}
            onValueChange={(itemValue) => setSelectedSort(itemValue)}>
          <Picker.Item label="Latest" value="latest" />
          <Picker.Item label="Highest Rated" value="DESC" />
          <Picker.Item label="Lowest Rated" value="ASC" />
          </Picker>
        </View>
      </>
      )}
    </View>
  );
}

export default RepositoryListFilter;