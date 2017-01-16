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
      selectedService: 'db',
      services: [
        { key: 'web', isUp: true },
        { key: 'db', isUp: false },
        { key: 'mail', isUp: true },
      ],
    };
  }

  switchService = (nextService) => {
    this.setState({
      selectedService: nextService,
    });
  }

  renderTab(selected, services) {
    const thisService = services.find(s => s.key === selected);
    return (
      <StatusScreen isUp={thisService.isUp} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* render StatusScreen with appropriated props according to selectedService */}
        {this.renderTab(this.state.selectedService, this.state.services)}

        {/* Pass onTabChange callback function, and selectedService add switch
          functionality to TabBarContainer depending on main component state */}
        <TabBarContainer
          onTabChange={this.switchService}
          selectedService={this.state.selectedService}
        />
      </View>
    );
  }
}

export default BeBriefed;
