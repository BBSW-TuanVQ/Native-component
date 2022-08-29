/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  NativeBaseProvider,
  ScrollView,
  Stack,
  Text,
  View,
  VStack,
  ZStack,
} from 'native-base';
import React from 'react';

const LayoutScreen = ({navigation}: any) => {
  return (
    <NativeBaseProvider>
      <ScrollView w="100%">
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
              Box Layout
            </Text>
            <Box alignItems="center">
              <Box
                maxW="80"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: 'coolGray.600',
                  backgroundColor: 'gray.700',
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: 'gray.50',
                }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                  <Center
                    bg="violet.500"
                    _dark={{
                      bg: 'violet.400',
                    }}
                    _text={{
                      color: 'warmGray.50',
                      fontWeight: '700',
                      fontSize: 'xs',
                    }}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5">
                    PHOTOS
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      The Garden City
                    </Heading>
                    <Text
                      fontSize="xs"
                      _light={{
                        color: 'violet.500',
                      }}
                      _dark={{
                        color: 'violet.400',
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1">
                      The Silicon Valley of India.
                    </Text>
                  </Stack>
                  <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's
                    high-tech industry. The city is also known for its parks and
                    nightlife.
                  </Text>
                  <HStack
                    alignItems="center"
                    space={4}
                    justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: 'warmGray.200',
                        }}
                        fontWeight="400">
                        6 mins ago
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            </Box>
          </View>

          <View marginBottom={5}>
            <Text
              color="secondary.500"
              marginBottom={3}
              textAlign={'center'}
              fontSize={'xl'}>
              Container
            </Text>
            <Container>
              <Heading>
                A component library for the
                <Text color="emerald.500"> React Ecosystem</Text>
              </Heading>
              <Text mt="3" fontWeight="medium">
                NativeBase is a simple, modular and accessible component library
                that gives you building blocks to build you React applications.
              </Text>
            </Container>
          </View>

          <View marginBottom={5}>
            <Text
              color="secondary.500"
              marginBottom={3}
              textAlign={'center'}
              fontSize={'xl'}>
              Flex
            </Text>
            <Box safeAreaTop>
              <VStack space={2.5} w="100%" px="3">
                {/* flexDirection -> row */}
                <Heading size="md">row</Heading>
                <Flex direction="row" mb="2.5" mt="1.5">
                  <Center
                    size="16"
                    bg="primary.100"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    100
                  </Center>
                  <Center
                    size="16"
                    bg="primary.200"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    200
                  </Center>
                  <Center
                    bg="primary.300"
                    size="16"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    300
                  </Center>
                  <Center
                    size="16"
                    bg="primary.400"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    400
                  </Center>
                </Flex>
                <Divider />
                {/* flexDirection -> column */}
                <Heading size="md">column</Heading>

                <Flex direction="column" mb="2.5" mt="1.5">
                  <Center
                    size="16"
                    bg="primary.100"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    100
                  </Center>
                  <Center
                    size="16"
                    bg="primary.200"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    200
                  </Center>
                  <Center
                    bg="primary.300"
                    size="16"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    300
                  </Center>
                  <Center
                    size="16"
                    bg="primary.400"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    400
                  </Center>
                </Flex>
                <Divider />
                {/* flexDirection -> row-reverse */}
                <Heading size="md">row-reverse</Heading>
                <Flex direction="row-reverse" mb="2.5" mt="1.5">
                  <Center
                    size="16"
                    bg="primary.100"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    100
                  </Center>
                  <Center
                    size="16"
                    bg="primary.200"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    200
                  </Center>
                  <Center
                    bg="primary.300"
                    size="16"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    300
                  </Center>
                  <Center
                    size="16"
                    bg="primary.400"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    400
                  </Center>
                </Flex>
                <Divider />
                {/* flexDirection -> column-reverse */}
                <Heading size="md">column-reverse</Heading>
                <Flex direction="column-reverse" mb="2.5" mt="1.5">
                  <Center
                    size="16"
                    bg="primary.100"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    100
                  </Center>
                  <Center
                    size="16"
                    bg="primary.200"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    200
                  </Center>
                  <Center
                    bg="primary.300"
                    size="16"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    300
                  </Center>
                  <Center
                    size="16"
                    bg="primary.400"
                    _text={{
                      color: 'coolGray.800',
                    }}>
                    400
                  </Center>
                </Flex>
                <Divider />
              </VStack>
            </Box>
          </View>

          <View marginBottom={5}>
            <Text
              color="secondary.500"
              marginBottom={3}
              textAlign={'center'}
              fontSize={'xl'}>
              ZStack
            </Text>
            <Center h="40">
              <Box mt="-32">
                <ZStack mt="3" ml={-50}>
                  <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
                  <Box
                    bg="primary.500"
                    mt="5"
                    ml="5"
                    size="20"
                    rounded="lg"
                    shadow={5}
                  />
                  <Box
                    bg="primary.300"
                    mt="10"
                    ml="10"
                    size="20"
                    rounded="lg"
                    shadow={7}
                  />
                </ZStack>
              </Box>
            </Center>

            <Center h="96">
              <ZStack alignItems="center" justifyContent="center">
                <Box bg="indigo.700" size="64" rounded="lg" />
                <Box bg="indigo.500" size="48" rounded="lg" shadow={8} />
                <Box bg="indigo.300" size="32" rounded="lg" shadow={8} />
              </ZStack>
            </Center>
          </View>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default LayoutScreen;
