/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  Avatar,
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  StatusBar,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {Component} from 'react';

function AppBar() {
  return (
    <>
      <HStack
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
        marginBottom={5}
        >
        <HStack alignItems="center" justifyContent={'space-between'}>
          <HStack>
              <Avatar
                bg="purple.600"
                alignSelf="center"
                size="lg"
                source={{
                  uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
                }}>
                RB
              </Avatar>
    
              <VStack alignItems={'center'} justifyContent={'flex-start'} marginLeft={3}>
                <Text>Xin chào!</Text>
                <Text bold fontSize={'xl'}>Thị Hiệp</Text>
              </VStack>
          </HStack>
          <Icon  />


          <Icon />
        </HStack>
      </HStack>
    </>
  );
}

export default AppBar;
