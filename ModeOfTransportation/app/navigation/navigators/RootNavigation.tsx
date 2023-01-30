import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import LoggedInStack from '../stacks/LoggedInStack';
import LoggedOutStack from '../stacks/LoggedOutStack';
import {Stacks} from '../types';

const S = createStackNavigator();

const RootNavigation: FC = () => {
  return (
    <S.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <S.Screen name={Stacks.LOGGED_IN} component={LoggedInStack} />
      <S.Screen name={Stacks.LOGGED_OUT} component={LoggedOutStack} />
    </S.Navigator>
  );
};

export default RootNavigation;
