import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class BeBriefed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to BeBriefed React Native App
        </Text>
      </View>
    );
  }
}

export default BeBriefed;
