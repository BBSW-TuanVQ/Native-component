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
const Stack = createNativeStackNavigator();
// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Component" component={ComponentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
