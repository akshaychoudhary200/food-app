import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const DetailScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 150,
    margin: 5,
  },
});

export default DetailScreen;
