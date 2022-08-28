/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Box, Button, Center, Checkbox, Divider, FormControl, IconButton, Input, NativeBaseProvider, ScrollView, Stack, Text, View, VStack, WarningOutlineIcon, SearchIcon, Radio, Select, CheckIcon, Switch } from 'native-base';
import React from 'react';

const FormScreen = ({ navigation }: any) => {
  return (
    <NativeBaseProvider>
      <ScrollView w="100%">
        <Center>
          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Back</Text>
            <Button onPress={() => navigation.navigate('Component')} >
              Back to Component Screen
            </Button>
          </View>
          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Checkbox</Text>
            <Box alignItems="center">
              <Stack direction={{
                base: 'column',
                md: 'row',
              }} space={3} alignItems="flex-start">
                <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
                  Danger
                </Checkbox>
                <Checkbox value="info" colorScheme="info" defaultIsChecked>
                  Info
                </Checkbox>
                <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
                  Orange
                </Checkbox>
                <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
                  Purple
                </Checkbox>
              </Stack>
            </Box>
          </View>

          <View w="100%" marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Form Control</Text>
            <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{
              base: '100%',
              md: '25%',
            }}>
              <Box>
                <Text bold fontSize="xl" mb="4">
                  Default
                </Text>
                <FormControl mb="5">
                  <FormControl.Label>Project Title</FormControl.Label>
                  <Input />
                  <FormControl.HelperText>
                    Give your project a title.
                  </FormControl.HelperText>
                </FormControl>
                <Divider />
              </Box>
              <Box>
                <Text bold fontSize="xl" mb="4">
                  Disabled
                </Text>
                <FormControl isDisabled mb="5">
                  <FormControl.Label _disabled={{
                    _text: {
                      color: 'gray.400',
                      fontWeight: 'bold',
                    },
                  }}>
                    Project Title
                  </FormControl.Label>
                  <Input placeholder="Title" />
                  <FormControl.HelperText>
                    Give your project a title.
                  </FormControl.HelperText>
                </FormControl>
                <Divider />
              </Box>
              <Box>
                <Text bold fontSize="xl" mb="4">
                  Invalid
                </Text>
                <FormControl isInvalid>
                  <FormControl.Label>Project Title</FormControl.Label>
                  <Input placeholder="Title" />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Something is wrong.
                  </FormControl.ErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </View>

          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Icon Button</Text>
            <VStack space={4} alignItems="center">
              {['outline', 'solid', 'ghost'].map(variant => <IconButton colorScheme="indigo" key={variant} variant={variant} _icon={{
                as: SearchIcon,
                name: 'search1',
              }} />)}
            </VStack>
          </View>

          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Radio</Text>
            <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
              <Radio value="1" my={1}>
                First
              </Radio>
              <Radio value="2" my={1}>
                Second
              </Radio>
              <Radio value="3" my={1}>
                Third
              </Radio>
            </Radio.Group>
          </View>

          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Select</Text>
            <Box w="100%">
              <Select w="300" accessibilityLabel="Choose Service" borderColor={"secondary.500"} placeholder="Choose Service" _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />
              }} mt={1} >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
            </Box>
          </View>
          <View marginBottom={5}>
            <Text color="secondary.500" marginBottom={3} textAlign={'center'} fontSize={'xl'}>Switch</Text>
            <VStack space={4} alignItems="center">
              <Switch defaultIsChecked colorScheme="primary" />
              <Switch defaultIsChecked colorScheme="secondary" />
              <Switch defaultIsChecked colorScheme="emerald" />
            </VStack>
          </View>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default FormScreen;
