import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView } from 'react-native';


export class Car extends Component {
    constructor(props) {
        super(props);
        this.Come2Go = this.Come2Go.bind(this);
        this.state = {
            merek : "Honda",
            types : {type: "CVT", model: "Civic Type R"},
        };

    }

    Come2Go(value) {
        return (
            <View>
                <text>Mari kita lari dari kenyataan</text>
                <Text>dengan kami, hanya membayar {value} IDR</Text>
            </View>
        )
    }

    render() {
        return(
            <View>
                <View>
                <Text>Hi, I'm a car</Text>
                <Text>Merek : {this.state.merek}</Text>
                <Text>Type : {this.state.type}</Text>
                <Text>Model : {this.state.model}</Text>
                </View>
                {this.Come2Go(2000000)}
            </View>
      );
  }
}

export default Car;