import React from 'react';
import { Button } from 'react-native';

export type ButtonPropsType = {
  title: string,
  onPress: () => void,
}

export const ButtonDefault: React.FC<ButtonPropsType> = (
  props: ButtonPropsType,
) => <Button title={props.title} onPress={props.onPress}/>;