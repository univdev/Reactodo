import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default (props) => {
  const Styles = StyleSheet.create({
    TodoCard: {
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      padding: 16,
      ...props.style,
    },
    Image: {
      width: '100%',
      height: 200,
    },
    Controls: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    Text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    CloseButton: {
      backgroundColor: 'transparent',
      padding: 0,
      margin: 0,
    },
  });
  return (
    <View style={ Styles.TodoCard }>
      {
        (() => {
          if (props.image) return (<Image source={props.image} style={ Styles.Image }/>);
        })()
      }
      <View style={ Styles.Controls }>
        {
          (() => {
            if (props.content) return (<Text style={ Styles.Text }>{ props.content }</Text>);
          })()
        }
        <Icon.Button
          name="close"
          backgroundColor="transparent"
          color="black"
          style={ Styles.CloseButton }
          onPress={ props.onPressRemoveButton }/>
      </View>
    </View>
  );
};
