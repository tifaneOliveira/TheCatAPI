import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { VerCat } from './verCat';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bem vindos a THE API CAT!! </Text>
      <StatusBar style="auto" />
      <VerCat />
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
});
