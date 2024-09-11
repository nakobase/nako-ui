import { Text } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  argTypes: {},
  component: Text,
  tags: ['autodocs'],
  title: 'components/elements/Text',
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <>
      <Text {...args}>Heading1</Text>
      <Text variant="h2">Heading2</Text>
      <Text variant="h3">Heading3</Text>
      <Text variant="h4">Heading4</Text>
      <Text variant="p">Paragraph</Text>
      <Text variant="blockquote">Blockquote</Text>
      <Text variant="lead">Lead text text text</Text>
      <Text variant="large">Large text text text</Text>
      <Text variant="small">Small text text text</Text>
      <Text variant="muted">Muted text text text</Text>
    </>
  ),
};
