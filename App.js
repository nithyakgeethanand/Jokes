import { StyleSheet, Text, View } from 'react-native';
import Jokes from './components/Jokes';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Jokes App</Text>
      <Jokes/>
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
