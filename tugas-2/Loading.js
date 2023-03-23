import React from 'react';
import {View, StyleSheet} from 'react-native';

const Loading = () => {
    return (
        <View style={[styles.container,{flexDirection: 'column',},]}>
        <View style={{flex: 1, backgroundColor: 'purple'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },})

export default Loading;
