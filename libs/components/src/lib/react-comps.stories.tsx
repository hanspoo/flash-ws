import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComps } from './react-comps';

export default {
  component: ReactComps,
  title: 'ReactComps',
} as ComponentMeta<typeof ReactComps>;

const Template: ComponentStory<typeof ReactComps> = (args) => (
  <ReactComps {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
