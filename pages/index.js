import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Modal, Alert, Text, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addItem, asyncInitItems, asyncAddItem } from '~/store/todo';
import TodoCard from '~/components/TodoCard';
import TodoEditor from '~/components/TodoEditor';

module.exports = () => {
  const dispatch = useDispatch()
  const [isRefreshing, changeRefreshingStatus] = useState(false);
  const [isShowEditor, changeShowEditor] = useState(false);
  const [content, changeContent] = useState(null);
  const items = useSelector((state) => state.todo.items);
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
    NoMessageContainer: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    NoMessage: {
      opacity: .4,
    },
    TodoCard: {
      marginTop: 16,
    },
  });
  const handleShowEditor = () => {
    changeShowEditor(true);
  };
  const handleCloseEditor = () => {
    changeShowEditor(false);
  };
  const handleAddTodoItem = async () => {
    try {
      dispatch(asyncAddItem({ content: state.payload.content }));
    } catch (e) {
      const { message } = e;
      Alert.alert('할 일 추가 실패', message);
    } finally {
      changeShowEditor(false);
    }
  };
  useEffect(() => {
    dispatch(asyncInitItems());
  }, []);
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
      <ScrollView
        style={ Styles.ScrollView }
        RefreshControl={
          <RefreshControl
            refreshing={ isRefreshing }
            onRefresh={ changeRefreshingStatus }/> }>
        {
          (() => {
            if (items.length <= 0) return (
              <View style={ Styles.NoMessageContainer }>
                <Text style={ Styles.NoMessage }>데이터가 존재하지 않습니다.</Text>
              </View>
            );
            return [...items].map((item, index) => (
              <TodoCard
                key={ index }
                style={ index > 0 ? Styles.TodoCard : null }
                content={ item.content }></TodoCard>
            ));
          })()
        }
      </ScrollView>
    </SafeAreaView>
  );
};