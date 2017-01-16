import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  border: {
    borderWidth: 20,
    borderColor: '#f21d44',
    borderRadius: 200,
    width: 240,
    height: 240,
    justifyContent: 'center',
  },
  character: {
    fontSize: 160,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#bf1534',
  },
});

const StatusIndicator = () => (
  <View style={styles.border}>
    <Text style={styles.character}>
      X
    </Text>
  </View>
);

export default StatusIndicator;
