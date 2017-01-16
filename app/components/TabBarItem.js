import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 32,
    paddingVertical: 4,
  },
  label: {
    color: '#fff',
    paddingTop: 5,
  },
  selectedLabel: {
    color: '#cc9766',
  },
});

const TabBarItem = ({ label, icon, selected }) => (
  <View style={styles.container}>
    <Icon name={icon} style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
  </View>
);

TabBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default TabBarItem;
