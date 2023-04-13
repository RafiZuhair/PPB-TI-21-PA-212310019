import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput, View, Text, SafeAreaView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.frm_row}>
        <Text style={styles.text_label}>Email </Text>
        <TextInput
          placeholder="npm@student.ibik.ac.id"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.text_input}
          defaultValue={email}
          onChangeText={(Text) => setEmail(Text)}
        />
      </View>
      <View style={styles.frm_row}>
        <Text style={styles.text_label}>Password</Text>
        <View
          style={{
            ...styles.text_input,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            secureTextEntry={true}
            placeholder="Enter your Password"
            autoCorrect={false}
            style={{
              ...styles.text_input,
              borderWidth: 0,
              padding: 0,
              width: "90%",
            }}
            defaultValue={password}
            onChange={(Text) => setPassword(Text)}
          />
          <Pressable>
            <FontAwesome5 name={"eye"} size={25} color="purple" />
          </Pressable>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn_signin}
        onPress={() => navigation.navigate('Home', 'Home')}
      >
        <Text style={styles.btn_signin_text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  frm_row: { marginBottom: 15 },
  text_label: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  text_input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "purple",
  },
  btn_signin: {
    backgroundColor: "purple",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  btn_signin_text: { color: "white", textAlign: "center", fontSize: 16 },
});

export { Login };
