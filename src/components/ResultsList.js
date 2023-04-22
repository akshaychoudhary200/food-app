import {FlatList, StyleSheet, Text, View} from "react-native";
import ResultDetail from "./ResultDetail";
import {TouchableOpacity} from "react-native-gesture-handler";

const ResultsList = ({title, result, navigation}) => {
    if (!result) {
        return null;
    }
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Details", {id: item.id})}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    }

});

export default ResultsList;
