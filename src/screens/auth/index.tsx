import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // StackNaviationPropsはNativeStackScreenPropsになった。
import { RootStackParamsList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { AppButton } from '../../components/button/AppButton';
// import { PopUp } from '../../components/modal/PopUp';

type authScreenProp = NativeStackScreenProps<RootStackParamsList, 'Main'>;

export const AuthScreen: React.FC = () => {
  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={[styles.container, styles.layout]}>
      <View style={{}}>
        <Text style={styles.mainText}>Soon!</Text>
      </View>
      {/* <PopUp /> */}
      <AppButton title={'SignIn'} onPress={() => navigation.navigate('Main')} />
      {/* <Button title="Login" onPress={() => navigation.navigate('Main')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  layout: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  mainText: {
    fontSize: 40,
    color: '#8f8f8f',
  },
});
