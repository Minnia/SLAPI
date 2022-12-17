import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';

import {Screens} from '../types';
import {Alert, Button} from 'react-native';
import SearchScreen from '../../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.SEARCH_SCREEN}
        options={{
          title: 'Search',
          headerRight: () => (
            <Button
              onPress={() => Alert.alert('This is a button!')}
              title="Info"
              color="red"
            />
          ),
        }}
        component={SearchScreen}
      />
      <Stack.Screen
        name={Screens.HOME_SCREEN}
        options={{
          headerShown: true,
          title: 'Home',
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
