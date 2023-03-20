import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Car from './src/components/Car';
import MotorCycle from './src/components/MotorCycle';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <Car />
    </SafeAreaView>
  );
}
