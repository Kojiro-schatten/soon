import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonDefault, ButtonPropsType } from './Button';

export default {
  title: 'Button',
  component: ButtonDefault,
  argTypes: {
    onPress: {
      action: 'pressed',
    },
  },
} as Meta;

const Template: Story<ButtonPropsType> = (args) => <ButtonDefault {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Button'
};