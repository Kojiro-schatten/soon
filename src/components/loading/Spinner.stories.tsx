import React from 'react';
import { Spinner, SpinnerPropsType } from './Spinner';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
    size: {
      size: 40,
      // color?: '#000000'
    },
  },
} as Meta;

const Template: Story<SpinnerPropsType> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 40,
  color: '#000000',
};
