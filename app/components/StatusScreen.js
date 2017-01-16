import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import StatusIndicator from './StatusIndicator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 30,
  },
});

class StatusScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusIndicator />
        <Text style={styles.statusText}>
          Service Up
        </Text>
      </View>
    );
  }
}

export default StatusScreen;
