/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  Avatar,
  Button,
  Center,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React from 'react';

const MediaScreen = ({navigation}: any) => {
  return (
    <NativeBaseProvider>
      <ScrollView>
          <Center>
            <View marginBottom={5}>
              <Text
                color="secondary.500"
                marginBottom={3}
                textAlign={'center'}
                fontSize={'xl'}>
                Back
              </Text>
              <Button onPress={() => navigation.navigate('Component')}>
                Back to Component Screen
              </Button>
            </View>
    
            <View marginBottom={5}>
              <Text
                color="secondary.500"
                marginBottom={3}
                textAlign={'center'}
                fontSize={'xl'}>
                Avatar
              </Text>
    
              <Avatar
                bg="amber.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
                }}
                size="2xl">
                NB
                <Avatar.Badge bg="green.500" />
              </Avatar>
            </View>
    
            <View marginBottom={5}>
              <Text
                color="secondary.500"
                marginBottom={3}
                textAlign={'center'}
                fontSize={'xl'}>
                Image
              </Text>
    
              <Center>
                <Image
                  marginBottom={2}
                  size={150}
                  alt="fallback text"
                  borderRadius={100}
                  source={{
                    uri: 'https://-page-icon.png',
                  }}
                  fallbackSource={{
                    uri: 'https://www.w3schools.com/css/img_lights.jpg',
                  }}
                />
    
                <Image
                  source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                  }}
                  alt="Alternate Text"
                  size="2xl"
                />
              </Center>
            </View>
          </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default MediaScreen;
