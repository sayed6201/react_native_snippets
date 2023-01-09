import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text 
        style={styles.dummyText}>hello how are you doing!</Text>

      <Text 
        style={styles.dummyText}>hello how are you doing!</Text>
        
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

  dummyText: {
    borderColor:"red", 
    borderWidth:2, 
    borderRadius:50, 
    padding:15,
    margin:16, 
    textAlign:'center', 
    backgroundColor:'red', 
    color:'white' 
  },

 
});