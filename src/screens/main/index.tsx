import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamsList } from './mainBottomTabParams';
import {HomeScreen} from './HomeScreen';
import {DetailsScreen} from './DetailsScreen';

const BottomTab = createBottomTabNavigator<MainBottomTabParamsList>();

export const MainScreen: React.FC = () => {

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Details" component={DetailsScreen} />
    </BottomTab.Navigator>
  );
};

export default MainScreen;