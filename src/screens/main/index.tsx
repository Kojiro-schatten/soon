
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../types';

type mainScreenProp = NativeStackScreenProps<RootStackParamsList, 'Main'>;

export const MainScreen: React.FC = () => {
  const navigation = useNavigation<mainScreenProp>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Main Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
};

export default MainScreen;