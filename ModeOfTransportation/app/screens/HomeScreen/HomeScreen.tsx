import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {Screens} from '../../navigation/types';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goToTest = () => navigation.navigate(Screens.SEARCH_SCREEN);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button title="Go to test" onPress={goToTest} />
    </View>
  );
};

export default HomeScreen;
