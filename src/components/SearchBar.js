import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <AntDesign
        style={styles.searchIcon}
        name="search1"
        size={30}
        color="black"
      />
      <TextInput
        style={styles.searchBar}
        placeholder="search"
        autoCapitalize="none"
        autoCorrect={false}
        value={props.searchTerm}
        onChangeText={(newTerm) => props.onSearchTermChange(newTerm)}
        onEndEditing={props.onSearchTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    margin: 5,
  },
  searchBar: {
    height: 30,
    width: 200,
    fontSize: 18,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 5,
    flex: 1,
    alignSelf: "center",
  },
  searchIcon: {
    fontSize: 30,
    padding: 5,
    alignSelf: "center",
  },
});

export default SearchBar;
