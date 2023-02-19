/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './app/navigation/navigators/BottomTabNavigation';
import {Provider} from 'react-redux';
import {store} from '../ModeOfTransportation/app/redux/store';
import RootNavigation from './app/navigation/navigators/RootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          {/* <BottomTabNavigation /> */}
          <RootNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default App;
