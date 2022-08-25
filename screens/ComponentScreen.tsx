/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Button, Text, View} from 'native-base';

const ComponentScreen = ({navigation}:any) => {
  return (
    <View>
      <Text>Component</Text>
      <Button onPress={() => navigation.navigate('HomeScreen')}/>
    </View>
  );
};

export default ComponentScreen;
