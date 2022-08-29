/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Button, Center, NativeBaseProvider, ScrollView, Text, View } from 'native-base';
import React from 'react';

const ComponentScreen = ({ navigation }: any) => {
  return (
    <NativeBaseProvider>
      <ScrollView>
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
  
          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Layout Component</Text>
            <Button onPress={() => navigation.navigate('Layout')} >
              Open Layout Screen
            </Button>
          </View>
  
          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Feedback Component</Text>
            <Button onPress={() => navigation.navigate('Feedback')} >
              Open Feedback Screen
            </Button>
          </View>
  
          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Overlay Component</Text>
            <Button onPress={() => navigation.navigate('Overlay')} >
              Open Overlay Screen
            </Button>
          </View>
  
          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Media Component</Text>
            <Button onPress={() => navigation.navigate('Media')} >
              Open Media Screen
            </Button>
          </View>
  
          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Transition Component</Text>
            <Button onPress={() => navigation.navigate('Transition')} >
              Open Transition Screen
            </Button>
          </View>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ComponentScreen;
