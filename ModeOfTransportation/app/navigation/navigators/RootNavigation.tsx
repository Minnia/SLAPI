import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {selectIsLoggdIn} from '../../redux/reducers/login.reducer';
import LoggedInStack from '../stacks/LoggedInStack';
import LoggedOutStack from '../stacks/LoggedOutStack';
import {Stacks} from '../types';

const S = createStackNavigator();

const RootNavigation: FC = () => {
  const isLoggedIn = useSelector(selectIsLoggdIn);

  const LoggedIn = <S.Screen name={Stacks.LOGGED_IN} component={LoggedInStack} />
  const LoggedOut =  <S.Screen name={Stacks.LOGGED_IN} component={LoggedOutStack} />
  return (
    <S.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      {isLoggedIn ? LoggedIn  : LoggedOut }
    </S.Navigator>
  );
};

export default RootNavigation;
