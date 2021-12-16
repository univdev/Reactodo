import React from 'react';
import { Button, StyleSheet } from 'react-native';

export default () => {
  const Styles = StyleSheet.create({
    Button: {
      borderRadius: '50%',
      borderWidth: 2,
      borderColor: 'purple',
      width: 30,
      height: 30,
    },
  });
  <Button style={ Styles.Button }></Button>
};
