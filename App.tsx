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
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:'Welcome'}} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
