import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { addItem } from '~/store/todo';
import TodoCard from '~/components/TodoCard';

module.exports = () => {
  const { items } = useSelector((state) => state.todo);
  console.log(`todo: ${items}`);
  const Styles = StyleSheet.create({
    ScrollView: {
      height: '100%',
      padding: 16,
    },
  });
  return (
    <View>
      <ScrollView style={ Styles.ScrollView }>
        <TodoCard content="asd"></TodoCard>
        <TodoCard content="asd"></TodoCard>
        <TodoCard content="asd"></TodoCard>
        <TodoCard content="asd"></TodoCard>
        <TodoCard content="asd"></TodoCard>
        <TodoCard content="asd"></TodoCard>
      </ScrollView>
    </View>
  );
};