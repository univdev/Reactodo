import 'react-native-gesture-handler';
import React, { useState } from 'react';
import logger from 'redux-logger';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { compose, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Button, Modal } from 'react-native';
import reducers from './store';

const enhancer =
  !(__DEV__)
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));
const Tab = createBottomTabNavigator();
const store = createStore(reducers, enhancer);

export default ({ navigation }) => {
  const [isShowEditor, changeShowEditor] = useState(false);
  const handleShowEditor = () => {
    changeShowEditor(true);
  };
  const homeScreenOptions = {
    headerShown: false,
  };
  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={ require('./pages') }
            options={ homeScreenOptions }/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
