/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
  Button,
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ComponentScreen from './screens/ComponentScreen';
import FormScreen from './screens/FormScreen';
import LayoutScreen from './screens/LayoutScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import OverlayScreen from './screens/OverlayScreen';
import MediaScreen from './screens/MediaScreen';
import TransitionScreen from './screens/TransitionScreen';
import TinoHomepageScreen from './screens/TinoHomepageScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} options={{title:'Welcome'}} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Layout" component={LayoutScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Overlay" component={OverlayScreen} />
        <Stack.Screen name="Media" component={MediaScreen} />
        <Stack.Screen name="Transition" component={TransitionScreen} />
        <Stack.Screen name="Tino" component={TinoHomepageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
