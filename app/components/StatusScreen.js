import React, { Component, PropTypes } from 'react';
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
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center',
    color: '#e6e8ef',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

class StatusScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusIndicator isUp={this.props.isUp} />
        <Text style={styles.statusText}>
          Service {this.props.isUp ? 'Up' : 'Down!'}
        </Text>
      </View>
    );
  }
}

StatusScreen.propTypes = {
  isUp: PropTypes.bool.isRequired,
};

export default StatusScreen;
