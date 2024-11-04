import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home';

export default function App() {
  return (
    <View style={styles.test}>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    backgroundColor: 'white',
  },
});
