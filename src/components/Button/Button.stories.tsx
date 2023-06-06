// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Button} from './Button';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export default {
  title: 'components/MyButton',
  component: Button,
} as ComponentMeta<typeof Button>;

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Basic: ComponentStory<typeof Button> = args => (
  <StyledView>
    <Button {...args} />
  </StyledView>
);

Basic.args = {
  label: 'Hello World',
  variant: 'background',
  color: colors.primary,
  leftIcon: 'account',
  iconColor: 'white',
  onPress: () => undefined,
};
