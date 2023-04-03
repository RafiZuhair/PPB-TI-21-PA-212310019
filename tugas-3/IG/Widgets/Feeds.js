import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Feeds = () => {
  return (
    <View style={{ backgroundColor: "red" }}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Image
          source={require("../../assets/icons/icon-boy-1.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>Rafi</Text>
      </View>

      <View>
        <Image
          source={require("../../assets/feeds/meme-1.jpg")}
          style={styles.feeds}
        />
      </View>

      <View style={styles.icon}>
        <Image source={require("../../assets/icons/icon-heart.png")} />

        <View style={{ marginHorizontal: 10 }}>
          <Image source={require("../../assets/icons/comment.png")} />
        </View>
        <Image source={require("../../assets/icons/icon-paper-plane.png")} />
      </View>
      <View style={styles.icon}>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Rafi</Text>
        </View>
        <Text>ketika gua sedang memahami teman</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Image
          source={require("../../assets/icons/icon-boy-1.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>rayyan</Text>
      </View>

      <View>
        <Image
          source={require("../../assets/feeds/meme-2.jpg")}
          style={styles.feeds}
        />
      </View>

      <View style={styles.icon}>
        <Image source={require("../../assets/icons/icon-heart.png")} />

        <View style={{ marginHorizontal: 10 }}>
          <Image source={require("../../assets/icons/comment.png")} />
        </View>
        <Image source={require("../../assets/icons/icon-paper-plane.png")} />
      </View>
      <View style={styles.icon}>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "bold" }}>rayyan</Text>
        </View>
        <Text>bang udah bang</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderColor: "black",
    borderRadius: 100,
    borderWidth: 2
  },
  username: {
    color: "black",
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  feeds: {
    height: 500,
    width: 450,
    alignContent: "center",
  },
  icon: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
  },
});

export default Feeds;
