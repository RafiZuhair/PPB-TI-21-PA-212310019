import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={[styles.container, {flexDirection : 'column'},]}>
      <Image source={require('./assets/profile-img.jpg')} style={{width : 256, height: 256}}/>
      <Text style={styles.red}>Nama : Muhammad Rafi Zuhair Artadinata</Text>
      <Text>NPM : 212310019</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color : 'red',
  },
});

export default App;
