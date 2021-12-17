import 'react-native-gesture-handler';
import React, { useState } from 'react';
import logger from 'redux-logger';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { compose, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import Icon from 'react-native-vector-icons/Entypo';
import reducers from './store';

const enhancer =
  !(__DEV__)
    ? compose(applyMiddleware(ReduxThunk))
    : composeWithDevTools(applyMiddleware(logger, ReduxThunk));
const Tab = createBottomTabNavigator();
const store = createStore(reducers, enhancer);

export default () => {
  const homeScreenOptions = {
    headerShown: false,
  };
  const screenOptions = ({ route }) => {
    return {
      tabBarActiveTintColor: 'blue',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = null;
        let iconColor = null;
        if (route.name === 'Home') {
          iconName = 'home';
          iconColor = focused
            ? 'blue'
            : 'gray';
        }
        return (
          <Icon
            color={ iconColor }
            name={ iconName }
            size={ 18 }
            color="black"/>
        );
      },
    };
  };
  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={ screenOptions }>
          <Tab.Screen
            name="Home"
            component={ require('./pages') }
            options={ homeScreenOptions }/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
