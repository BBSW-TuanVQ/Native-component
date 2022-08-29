/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  Button,
  Center,
  Icon,
  Input,
  NativeBaseProvider,
  ScrollView,
  SearchIcon,
  Text,
  View,
  Image,
} from 'native-base';
import React from 'react';
import AppBar from '../src/components/AppBar';

const TinoHomepageScreen = ({navigation}: any) => {
  const banner:any = require('../src/assets/images/banner.png');
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <AppBar />

          <View paddingX={3}>
            <Input
              marginBottom={5}
              variant="filled"
              bg={'#F9FAFB'}
              placeholder="Search"
              width="100%"
              py="3"
              px="1"
              fontSize="14"
              InputLeftElement={
                <SearchIcon m="2" ml="3" size="6" color="gray.400" />
              }
            />

            <Image
              source={banner&&{uri: banner?.default.src}}
              alt="Alternate Text"
              size="2xl"
            />
          </View>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default TinoHomepageScreen;
