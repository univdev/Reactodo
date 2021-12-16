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
    Buttons: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 16,
    },
    Button: {
      flex: 1,
      width: '50%',
      textAlign: 'center',
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
        <View style={ Styles.Buttons }>
          <Button
            style={ Styles.Button }
            title={ props.submitButtonText || '작성' }
            onPress={ props.onPressSubmitButton }></Button>
          <Button
            color="red"
            style={ Styles.Button }
            title={ props.cancelButtonText || '취소' }
            onPress={ props.onPressCancelButton }></Button>
        </View>
      </View>
    </View>
  );
};
