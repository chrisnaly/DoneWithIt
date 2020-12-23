import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, Image, SafeAreaView, Alert, Button } from 'react-native';

export default function App() {
  console.log("App Executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={4}> HELLO REACT NATIVE!!! </Text>
      <Button
        color="orange"
        title="Question"
        onPress={() =>
        Alert.prompt("My title", "My message", (text) => console.log(text))} />


      <StatusBar style="auto" />
    </SafeAreaView>
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
