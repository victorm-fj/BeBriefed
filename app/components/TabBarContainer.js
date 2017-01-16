import React, { PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Tabs from 'react-native-tabs';

import TabBarItem from './TabBarItem';

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#343434',
    borderTopWidth: 1,
    borderTopColor: '#262626',
    height: 96,
  },
});

const TabBarContainer = ({ onTabChange }) => (
  // For android add iconStyle prop
  <Tabs
    onSelect={comp => onTabChange(comp.props.name)}
    style={styles.tabContainer}
    iconStyle={{ height: 72 }}
  >
    <TabBarItem name="web" label="Web Server" icon="server" />
    <TabBarItem name="db" label="DB Server" icon="database" />
    <TabBarItem name="mail" label="Mail Server" icon="envelope-o" />
  </Tabs>
);

TabBarContainer.propTypes = {
  onTabChange: PropTypes.func.isRequired,
};

export default TabBarContainer;
