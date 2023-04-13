import React from 'react';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import {View, StyleSheet} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SearchBar = () => {
    return (
        <View style={styles.search_box}>
            <Image source={require("../../../assets/icons/search.png")} style={{alignItems: "flex-start"}}/>
            <TextInput style={styles.search_input} placeholder="search" />
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    search_box: {
        padding: 30, flexDirection: "row", borderWidth: 1, borderColor: "black", borderRadius: 10, backgroundColor: "white"
    },
    search_input: {
        fontSize: 20, width: "90%", color: "white", marginLeft: 10
    }
});