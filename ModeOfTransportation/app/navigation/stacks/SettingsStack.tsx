import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../../screens/SettingsScreen';
import {Screens} from '../types';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.SETTINGS_SCREEN}
        options={{
          title: 'Settings',
        }}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
