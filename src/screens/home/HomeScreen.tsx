import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { RootStackParamsList } from '../../types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamsList } from '../main/MainBottomTabParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamsList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamsList, 'Home'>
>;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="作成する" onPress={() => navigation.navigate('RoomLists')} />
    </View>
  );
};
