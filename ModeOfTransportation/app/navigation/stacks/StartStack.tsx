import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from '../navigators/BottomTabNavigation';

const Stack = createNativeStackNavigator();

const StartStack = () => {
  return (
    <Stack.Navigator>
      <BottomTabNavigation />
    </Stack.Navigator>
  );
};

export default StartStack;
