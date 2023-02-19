import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {selectIsLoggdIn} from '../../redux/reducers/login.reducer';
import LoggedInStack from '../stacks/LoggedInStack';
import LoggedOutStack from '../stacks/LoggedOutStack';
import {Stacks} from '../types';

const S = createStackNavigator();

const RootNavigation: FC = () => {
  // const isLoggedIn = useSelector(selectIsLoggdIn);
  // console.log('IS LOGGED IN', isLoggedIn);
  return (
    <S.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <S.Screen
        // name={isLoggedIn ? Stacks.LOGGED_IN : Stacks.LOGGED_OUT}
        name={Stacks.LOGGED_OUT}
        // component={isLoggedIn ? LoggedOutStack : LoggedOutStack}
        component={LoggedOutStack}
      />
    </S.Navigator>
  );
};

export default RootNavigation;
