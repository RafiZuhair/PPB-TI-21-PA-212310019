import { StatusBar, View } from 'expo-status-bar';
import React from 'react';
import Bicycle from './src/components/Bicycle';
import ItemImage from './src/components/ItemImage';

export default function App() {
  return (
    <View>
      <StatusBar hidden={false} />
      <Bicycle />
      
    </View>
    
  );
}




