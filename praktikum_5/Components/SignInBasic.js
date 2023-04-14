import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Success from "./Info";

const SignInBasic = ({ value }) => {
  const [email, setMail] = useState("");
  const [password] = useState("");

  const [validPassword, setValidPassword] = useState("");
  const handlerValidPassword = (value) => {
    if (value) {
      const re = new RegExp("[a-zA-Z-0-9+.+_]");
      if (!re.test(value)) {
        setValidPassword("Value must contain alphabet, number and symbol");
      } else {
        setValidPassword("");
      }
    } else {
      setValidPassword("Type minimum 3 character");
    }
  };

  const [isOpenPass, setOpenPass] = useState(true);
  const handlerOpenPassword = () => {
    switch (!isOpenPass) {
      case true:
        setOpenPass(true);
        break;
      default:
        setOpenPass(false);
        break;
    }
  };

  const [isHandlerPress, setHandlerPress] = useState(true);
  const handlerPress = () => {
    const Users = [
      { email: "212310019@student.ibik.ac.id", password: "manc1363" },
      { email: "212310016@student.ibik.ac.id", password: "BESTstudent_2023" },
    ];

    switch (isHandlerPress === Users) {
      case true:
        setHandlerPress(
          showMessage({
            message: "Hello user!",
            type: "success",
            duration: 3000,
          })
        );
        break;
      default:
        setHandlerPress(
          showMessage({
            message: "Email/Password is not match",
            type: "danger",
            duration: 3000,
          })
        );
    }
  };

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
          onChangeText={(text) => setMail(text)}
        >
          {value}
        </TextInput>
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
            secureTextEntry={isOpenPass}
            placeholder="Enter your password"
            autoCorrect={false}
            style={{
              ...styles.text_input,
              borderWidth: 0,
              padding: 0,
              width: "90%",
            }}
            defaultValue={password}
            onChangeText={(text) => handlerValidPassword(text)}
          >
            {value}
          </TextInput>

          <Pressable onPress={() => handlerOpenPassword()}>
            <FontAwesome5
              name={isOpenPass ? "eye" : "eye-slash"}
              size={25}
              color="purple"
            />
          </Pressable>
        </View>
        <Text style={{ color: "red" }}>{validPassword}</Text>
      </View>
      <Button
        title="Sign In"
        onPress={() => handlerPress()}
        color="purple"
      ></Button>
      <FlashMessage />
    </View>
  );
};

export default SignInBasic;
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
