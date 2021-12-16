import React from 'react';
import { Button, Dimensions, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default (props) => {
  const Styles = StyleSheet.create({
    Container: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    Editor: {
      width: Dimensions.get('window').width - 32,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
    },
    Field: {
      fontSize: 18,
    },
  });
  return (
    <View style={ Styles.Container }>
      <View style={ Styles.Editor }>
        <TextInput
          value={ props.content || null }
          placeholder={ props.placeholder || '할 일 입력' }
          style={ Styles.Field }
          onChangeText={ props.onChangeContent }/>
        <Button
          title={ props.submitButtonText || '작성' }
          onPress={ props.onPressSubmitButton }></Button>
      </View>
    </View>
  );
};
