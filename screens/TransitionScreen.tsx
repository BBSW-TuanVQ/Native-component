/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  Avatar,
  Box,
  Button,
  Center,
  Image,
  NativeBaseProvider,
  PresenceTransition,
  ScrollView,
  Slide,
  Text,
  View,
  Alert,
  useColorModeValue,
  IconButton,
  Stagger,
  HStack,
  useDisclose,
  CheckCircleIcon,
  Icon,
} from 'native-base';
import React from 'react';

const TransitionScreen = ({navigation}: any) => {
  const {isOpen, onToggle} = useDisclose();
  const [open, setOpen] = React.useState(false);
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const str = `${isOpenTop ? 'Hide' : 'Check Internet Connection'}`;
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
              Presence
            </Text>

            <Center>
              <Button onPress={() => setOpen(!open)}>
                {open ? 'Hide' : 'Show'}
              </Button>
              <PresenceTransition
                visible={open}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 250,
                  },
                }}>
                <Center w="200" h="100" mt="7" bg="teal.500" rounded="md">
                  ScaleFade
                </Center>
              </PresenceTransition>
            </Center>
          </View>

          <View marginBottom={5}>
            <Text
              color="secondary.500"
              marginBottom={3}
              textAlign={'center'}
              fontSize={'xl'}>
              Slide
            </Text>

            <Box w="300">
              <Slide in={isOpenTop} placement="top">
                <Alert justifyContent="center" status="error">
                  <Alert.Icon />
                  <Text color="error.600" fontWeight="medium">
                    No Internet Connection
                  </Text>
                </Alert>
              </Slide>
              <Button
                mt="auto"
                onPress={() => setIsOpenTop(!isOpenTop)}
                variant="unstyled"
                bg="coolGray.700:alpha.30"
                _text={{
                  color: useColorModeValue('darkText', 'lightText'),
                }}>
                {str}
              </Button>
            </Box>
          </View>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default TransitionScreen;
