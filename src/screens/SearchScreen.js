import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, searchapi, errorMsg] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newSearch) => setSearchTerm(newSearch)}
        onSearchTermSubmit={() => searchapi(searchTerm)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView style={styles.scrollView}>
        <ResultsList
          title="pricey"
          result={filterResultByPrice("$")}
          navigation={navigation}
        />
        <ResultsList
          title="eco"
          result={filterResultByPrice("$$")}
          navigation={navigation}
        />
        <ResultsList
          title="budget"
          result={filterResultByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  scrollView: {
    marginBottom: 50,
  },
});

export default SearchScreen;
