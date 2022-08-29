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
  AlertDialog,
  Menu,
  HamburgerIcon,
  Pressable,
  Modal,
  FormControl,
  Input,
  Popover,
  useDisclose,
  Actionsheet,
} from 'native-base';
import React, {useState} from 'react';

const OverlayScreen = ({navigation}: any) => {
  const [open, setOpen] = React.useState(false);

  const close = () => setOpen(false);

  const cancelRef = React.useRef(null);

  const [showModal, setShowModal] = useState(false);

  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
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
            AlertDialog
          </Text>

          <Center>
            <Button colorScheme="danger" onPress={() => setOpen(!open)}>
              Delete Customer
            </Button>
            <AlertDialog
              leastDestructiveRef={cancelRef}
              isOpen={open}
              onClose={close}>
              <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Delete Customer</AlertDialog.Header>
                <AlertDialog.Body>
                  This will remove all data relating to Alex. This action cannot
                  be reversed. Deleted data can not be recovered.
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="unstyled"
                      colorScheme="coolGray"
                      onPress={close}
                      ref={cancelRef}>
                      Cancel
                    </Button>
                    <Button colorScheme="danger" onPress={close}>
                      Delete
                    </Button>
                  </Button.Group>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          </Center>
        </View>

        <View marginBottom={5}>
          <Text
            color="secondary.500"
            marginBottom={3}
            textAlign={'center'}
            fontSize={'xl'}>
            Modal
          </Text>

          <Center>
            <Button onPress={() => setShowModal(true)}>Button</Button>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Contact Us</Modal.Header>
                <Modal.Body>
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input />
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="ghost"
                      colorScheme="blueGray"
                      onPress={() => {
                        setShowModal(false);
                      }}>
                      Cancel
                    </Button>
                    <Button
                      onPress={() => {
                        setShowModal(false);
                      }}>
                      Save
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Center>
        </View>

        <View marginBottom={5}>
          <Text
            color="secondary.500"
            marginBottom={3}
            textAlign={'center'}
            fontSize={'xl'}>
            ActionSheet
          </Text>

          <Center>
            <Button onPress={onOpen}>Actionsheet</Button>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
                <Box w="100%" h={60} px={4} justifyContent="center">
                  <Text
                    fontSize="16"
                    color="gray.500"
                    _dark={{
                      color: 'gray.300',
                    }}>
                    Albums
                  </Text>
                </Box>
                <Actionsheet.Item>Delete</Actionsheet.Item>
                <Actionsheet.Item>Share</Actionsheet.Item>
                <Actionsheet.Item>Play</Actionsheet.Item>
                <Actionsheet.Item>Favourite</Actionsheet.Item>
                <Actionsheet.Item>Cancel</Actionsheet.Item>
              </Actionsheet.Content>
            </Actionsheet>
          </Center>
        </View>
      </Center>
    </NativeBaseProvider>
  );
};

export default OverlayScreen;
