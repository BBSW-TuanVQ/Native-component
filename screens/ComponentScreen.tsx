/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Button, Center, NativeBaseProvider, Text, View } from 'native-base';
import React from 'react';

const ComponentScreen = ({ navigation }: any) => {
  return (
    <NativeBaseProvider>
      <Center>
        <View marginBottom={5}>
          <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Component</Text>
          <Button onPress={() => navigation.navigate('Home')} >
            Back to Home
          </Button>
        </View>
        <View marginBottom={5}>
          <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Form Component</Text>
          <Button onPress={() => navigation.navigate('Form')} >
            Open Form Screen
          </Button>
        </View>
      </Center>
    </NativeBaseProvider>
  );
};

export default ComponentScreen;
