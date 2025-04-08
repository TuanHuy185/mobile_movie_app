import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    // Add styles for the container
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  input: {
    // Add styles for the TextInput
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});