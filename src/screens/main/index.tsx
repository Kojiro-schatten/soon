import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamsList } from './MainBottomTabParams';
import {HomeScreen} from '../home/HomeScreen';
import {RoomListsScreen} from '../room/RoomListsScreen';
// import {List} from './ListScreen'; TODO:優先度中

// ボトムタブのparams
const BottomTab = createBottomTabNavigator<MainBottomTabParamsList>();

export const MainScreen: React.FC = () => {

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="RoomLists" component={RoomListsScreen} />
      
      {/* <BottomTab.Screen name="Log" component={DetailsScreen} /> */}
    </BottomTab.Navigator>
  );
};

export default MainScreen;