import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  isUpBorderColor: {
    borderColor: '#189963',
  },
  isUpCharacterColor: {
    color: '#189963',
  },
});

// Stateless Component
// Render styles and icon according to main component state pass down
// to this component via props
const StatusIndicator = ({ isUp }) => (
  <View style={[styles.border, isUp && styles.isUpBorderColor]}>
    <Text style={[styles.character, isUp && styles.isUpCharacterColor]}>
      <Icon name={isUp ? 'check' : 'times'} size={160} />
    </Text>
  </View>
);

StatusIndicator.propTypes = {
  isUp: PropTypes.bool.isRequired,
};

export default StatusIndicator;
