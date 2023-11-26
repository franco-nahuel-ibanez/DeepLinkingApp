import React from 'react'
import { ActivityIndicator } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

const linking = {
  prefixes: ['peoplesapp://'],
  config: {
    initialRouteName:'Home',
    screens: {
      Home: {
        path: 'home',
      },
      Details: {
        path: 'details/:personId'
      }
    }
  }
};

const RootStack = createNativeStackNavigator() ;

const RootNavigation = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color={'blue'} size={'large'} />}
    >
      <RootStack.Navigator>
        <RootStack.Screen name='Home' component={HomeScreen} />
        <RootStack.Screen name='Details' component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation