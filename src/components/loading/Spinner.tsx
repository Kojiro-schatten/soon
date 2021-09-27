import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export type SpinnerPropsType = {
  size: number;
  color?: string;
};

export const Spinner: React.FC<SpinnerPropsType> = (props: SpinnerPropsType) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={props.size} color={props.color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
