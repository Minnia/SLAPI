import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Stacks} from '../types';
import BottomTabNavigation from '../navigators/BottomTabNavigation';

const Stack = createNativeStackNavigator();

const LoggedInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Stacks.BOTTOM_TAB_NAVIGATION}
        component={BottomTabNavigation}
      />
    </Stack.Navigator>
  );
};

export default LoggedInStack;
