/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  Box,
  Button,
  Center,
  CloseIcon,
  Collapse,
  HStack,
  IconButton,
  NativeBaseProvider,
  Text,
  View,
  VStack,
  Alert,
  Spinner,
  useToast,
  Stack,
  Container,
} from 'native-base';
import React from 'react';

const FeedbackScreen = ({navigation}: any) => {
  const [show, setShow] = React.useState(false);

  const toast = useToast();

  const renderToast = () => {
    console.log('toast');
    return toast.show({
      description: 'Hello world',
    });
  };

  return (
    <NativeBaseProvider>
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
              Alert
            </Text>

            <Box w="100%" alignItems="center">
              <Collapse isOpen={show}>
                <Center>
                  <Alert w="90%" maxW="400" status="error">
                    <VStack space={1} flexShrink={1} w="100%">
                      <HStack
                        flexShrink={1}
                        space={2}
                        alignItems="center"
                        justifyContent="space-between">
                        <HStack flexShrink={1} space={2} alignItems="center">
                          <Alert.Icon />
                          <Text
                            fontSize="md"
                            fontWeight="medium"
                            _dark={{
                              color: 'coolGray.800',
                            }}>
                            Please try again later!
                          </Text>
                        </HStack>
                        <IconButton
                          variant="unstyled"
                          _focus={{
                            borderWidth: 0,
                          }}
                          icon={<CloseIcon size="3" color="coolGray.600" />}
                          onPress={() => setShow(false)}
                        />
                      </HStack>
                      <Box
                        pl="6"
                        _dark={{
                          _text: {
                            color: 'coolGray.600',
                          },
                        }}>
                        Your coupon could not be processed at this time.
                      </Box>
                    </VStack>
                  </Alert>
                </Center>
              </Collapse>
              <Button
                size={'sm'}
                onPress={() => setShow(!show)}
                mt={8}
                mx="auto">
                {show ? 'Close' : 'Open'}
              </Button>
            </Box>
          </View>

          <View marginBottom={5}>
            <Text
              color="secondary.500"
              marginBottom={3}
              textAlign={'center'}
              fontSize={'xl'}>
              Spinner
            </Text>
            <HStack space={8} justifyContent="center">
              <Spinner color="emerald.500" />
              <Spinner color="warning.500" />
              <Spinner color="indigo.500" />
              <Spinner color="cyan.500" />
            </HStack>
          </View>

          <View marginBottom={5}>
            <Text
              color="secondary.500"
              marginBottom={3}
              textAlign={'center'}
              fontSize={'xl'}>
              Toast
            </Text>
            <Center>
              <Button onPress={renderToast}>Show Toast</Button>
            </Center>
          </View>
      </Center>
    </NativeBaseProvider>
  );
};

export default FeedbackScreen;
