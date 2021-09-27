import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
// useForm: optionalで引数を持てる。簡単にフォームのstate管理をしてくれる
// RNではControllerを指定することで、その配下でゴニョゴニョできる
import { useForm, Controller } from 'react-hook-form';

export type TextInputFormPropsType = {
  input: string;
};

export const TextInputForm: React.FunctionComponent<TextInputFormPropsType> = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: TextInputFormPropsType) => console.log(data);

  return (
    <View style={styles.inputFormWrapper}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="placeholder"
          />
        )}
        name="name"
        defaultValue=""
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputFormWrapper: {
    borderWidth: 1,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
