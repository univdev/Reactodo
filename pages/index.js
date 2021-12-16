import React, { useState } from 'react';
import { View, StyleSheet, Button, Modal, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addItem } from '~/store/todo';
import TodoCard from '~/components/TodoCard';
import TodoEditor from '~/components/TodoEditor';

module.exports = () => {
  const [isShowEditor, changeShowEditor] = useState(false);
  const [content, changeContent] = useState(null);
  const state = {
    payload: {
      content,
    },
  };
  const Styles = StyleSheet.create({
    Buttons: {
    },
    AddButton: {
      flex: 1,
    },
    Modal: {
      backgroundColor: 'rgba(0, 0, 0, .2)',
    },
    ScrollView: {
      height: '100%',
      padding: 16,
    },
  });
  const handleShowEditor = () => {
    changeShowEditor(true);
  };
  const handleCloseEditor = () => {
    changeShowEditor(false);
  };
  const handleAddTodoItem = () => {
    try {
      const { content } = state.payload;
    } catch (e) {
      const { message } = e;
      Alert.alert('할 일 추가 실패', message);
    } finally {
      changeShowEditor(false);
    }
  };
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={ true }
        visible={ isShowEditor }>
        <TodoEditor
          content={ state.content }
          onChangeContent={ changeContent }
          onPressSubmitButton={ handleAddTodoItem }
          onPressCancelButton={ handleCloseEditor }/>
      </Modal>
      <View style={ Styles.Buttons }>
        <Button
          style={ Styles.AddButton }
          title="추가"
          onPress={ handleShowEditor }></Button>
      </View>
      <ScrollView style={ Styles.ScrollView }>
        <TodoCard content="asd"></TodoCard>
        <TodoCard content="asd"></TodoCard>
        <TodoCard content="asd"></TodoCard>
        <TodoCard content="asd"></TodoCard>
        <TodoCard content="asd"></TodoCard>
        <TodoCard content="asd"></TodoCard>
      </ScrollView>
    </SafeAreaView>
  );
};