import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default (props) => {
  const Styles = StyleSheet.create({
    TodoCard: {
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
    },
    Image: {
      width: '100%',
      height: 200,
    },
    Text: {
      padding: 16,
      fontSize: 24,
      fontWeight: 'bold',
    }
  });
  return (
    <View style={ Styles.TodoCard }>
      {
        (() => {
          if (props.image) return (<Image source={props.image} style={ Styles.Image }/>);
        })()
      }
      {
        (() => {
          if (props.content) return (<Text style={ Styles.Text }>{ props.content }</Text>);
        })()
      }
    </View>
  );
};
