import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import StatusScreen from './components/StatusScreen';

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
        <StatusScreen />
      </View>
    );
  }
}

export default BeBriefed;
