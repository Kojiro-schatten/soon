import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainBottomTabParamsList } from '../main/MainBottomTabParams';

type mainScreenProp = NativeStackScreenProps<MainBottomTabParamsList, 'RoomLists'>;

export const RoomListsScreen: React.FC = () => {
  const navigation = useNavigation<mainScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Room Screen</Text>
      <Button title="Roomページにいく" onPress={() => navigation.navigate('Room')} />
    </View>
  );
};
