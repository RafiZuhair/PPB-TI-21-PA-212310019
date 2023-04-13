import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import SearchBar from "./Widgets/SearchBar";
import ExpSectionList from "./Widgets/ExpSectionList";
import { StatusBar } from "expo-status-bar";
import { UsersObj } from "./Widgets/Data/ConstData";

export class MyFriends extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} style="light"/>
        <View style={styles.header}>
          <SearchBar />
        </View>
        <View style={styles.body}>
          <ExpSectionList  Users={UsersObj}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "grey" },
  header: {
    flex: 2,
    justifyContent: "center",
    flexDirection: "column",
    padding: 50,
    backgroundColor: "grey",
  },
  body: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 1000,
  },
});

export default MyFriends;
