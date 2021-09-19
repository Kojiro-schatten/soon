import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RoomStackParamsList } from './RoomStackParamsList';

type roomScreenProp = NativeStackScreenProps<RoomStackParamsList, 'Room'>;

export const RoomScreen: React.FC = () => {
  const navigation = useNavigation<roomScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Room Screen</Text>
      <Button title="Roomページにいく" onPress={() => navigation.navigate('Room')} />
    </View>
  );
};
