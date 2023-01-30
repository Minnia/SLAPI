import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Stacks} from '../types';

import AppOnBoarding from '../../screens/AppOnboarding/AppOnboarding';

const Stack = createNativeStackNavigator();

const LoggedOutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Stacks.LOGGED_OUT} component={AppOnBoarding} />
    </Stack.Navigator>
  );
};

export default LoggedOutStack;
