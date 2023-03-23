import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Bicycle() {
    return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <ItemTypograph/>
        <View>
        </View>
    </View>
    );
}

const ItemTypograph = () => {
    return (
      <View>
        <Text style={{fontSize: 20,
          fontWeight: "bold",
          backgroundColor:"brown",
          color:"#fff",
          textAlign:"center",
          textDecorationLine:"underline",
          padding: 10,
          marginBottom: 10,
          }}>History Of BiCycle</Text>
          <Text style={styles.paragraf}>
            A bicycle, also called a 
            <Text style={{...styles.paragraf, color:"red"}}> pedal cycle</Text>,
            <Text style={{...styles.paragraf, fontWeight:"bold"}}> bike</Text>,
            <Text style={{...styles.paragraf, fontStyle: "italic"}}> push-bike or cycle</Text>, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A BiCycle rider is called a cyclist, or a BiCyclist. 
            </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:'auto',
      marginRight:'auto',
      marginBottom: 300,
      marginTop:150,
      borderWidth:1,
      borderRadius: 10,
      width: 250,
      height: 250
    },
    paragraf: {
      fontSize: 15,
      textAlign: 'justify',
    }
  });