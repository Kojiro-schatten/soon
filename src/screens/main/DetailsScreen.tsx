import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainBottomTabParamsList } from './MainBottomTabParams';

type mainScreenProp = NativeStackScreenProps<MainBottomTabParamsList, 'Details'>;

function DetailsScreen():JSX.Element {
  const navigation = useNavigation<mainScreenProp>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Auth" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
}
export { DetailsScreen };