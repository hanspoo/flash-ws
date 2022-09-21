import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Usuarios } from './usuarios';

export default {
  component: Usuarios,
  title: 'Usuarios',
} as ComponentMeta<typeof Usuarios>;

const Template: ComponentStory<typeof Usuarios> = (args) => (
  <Usuarios {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
