import React from 'react';
import { TextInputForm, TextInputFormPropsType } from './TextInputForm';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'TextInputForm',
  component: TextInputForm,
  argTypes: {
    input: {
      action: '',
    },
  },
} as Meta;

const Template: Story<TextInputFormPropsType> = (args) => <TextInputForm {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  input: 'input',
};
