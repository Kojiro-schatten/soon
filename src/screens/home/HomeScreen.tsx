import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { RootStackParamsList } from '../../types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamsList } from '../main/MainBottomTabParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Spinner } from '../../components/loading/spinner';

type HomeScreenProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamsList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamsList, 'Home'>
>;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const [showSpinner, setShowSpinner] = useState(true);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="作成する" onPress={() => navigation.navigate('RoomLists')} />
      <Button title="スピナーのOn/Off" onPress={() => setShowSpinner(!showSpinner)} />
      {showSpinner ? 
        <Spinner size={40} color={'#000000'}/>
        : ''
      }
    </View>
  );
};
