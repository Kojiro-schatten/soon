import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // StackNaviationPropsはNativeStackScreenPropsになった。
import { RootStackParamsList } from '../../types';
import { useNavigation } from '@react-navigation/native';

type authScreenProp = NativeStackScreenProps<RootStackParamsList, 'Main'>;

export const AuthScreen: React.FC = () => {
  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Auth Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};
