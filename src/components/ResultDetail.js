import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 250,
    borderRadius: 10,
    margin: 5,
  },
  name: {
    fontWeight: "bold",
    margin: 5,
  },
  rating: {
    margin: 5,
  },
});

export default ResultDetail;
