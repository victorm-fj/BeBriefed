import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import StatusScreen from './components/StatusScreen';
import TabBarContainer from './components/TabBarContainer';

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

// Main App Component
class BeBriefed extends Component {
  constructor(props) {
    super(props);
    // Component initial state
    this.state = {
      isUp: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusScreen isUp={this.state.isUp} />
        <TabBarContainer />
      </View>
    );
  }
}

export default BeBriefed;
