import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SettingsScreen from '../../screens/SettingsScreen';
import UserProfileScreen from '../../screens/UserProfileScreen';

const D = createDrawerNavigator();

const Drawer = () => {
  return (
    <D.Navigator>
      <D.Screen name="Settings" component={SettingsScreen} />
      <D.Screen name="User" component={UserProfileScreen} />
    </D.Navigator>
  );
};

export default Drawer;
