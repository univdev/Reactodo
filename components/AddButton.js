import React from 'react';
import { Button, StyleSheet } from 'react-native';

export default (props) => {
  const Styles = StyleSheet.create({
    Button: {
      borderRadius: '50%',
      borderWidth: 2,
      borderColor: 'purple',
      borderStyle: 'solid',
      width: 30,
      height: 30,
    },
  });
  return (
    <Button
      title={ props.title || '' }
      style={ Styles.Button }
      onPress={ props.onPress }></Button>
    );
};
