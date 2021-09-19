import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamsList} from './src/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from './src/screens/auth';
import { MainScreen } from './src/screens/main';

const Stack = createNativeStackNavigator<RootStackParamsList>();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}