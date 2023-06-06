/* eslint-disable react-native/no-inline-styles */
import {Icon} from '../Icon';
import {Text} from '../Text';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

import {
  ButtonProps,
  ButtonSizeType,
  ButtonStyledProps,
  ButtonBaseInterface,
  ButtonInterface,
  ButtonVariantType,
} from './Button.type';

const ButtonIcon = ({
  leftIcon,
  rightIcon,
  iconColor,
  children,
  size,
}: ButtonProps) => {
  return (
    <>
      {leftIcon && (
        <Icon name={leftIcon} size={size || '18px'} color={iconColor} />
      )}
      <View
        style={{marginLeft: leftIcon ? 4 : 0, marginRight: rightIcon ? 4 : 0}}>
        {children}
      </View>
      {rightIcon && (
        <Icon name={rightIcon} size={size || '18px'} color={iconColor} />
      )}
    </>
  );
};

const buttonSizeMapper: Record<ButtonSizeType, string> = {
  small: '8px 16px',
  regular: '12px 24px',
};

const ButtonStyled = styled.TouchableOpacity<ButtonStyledProps>`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-color: ${({borderColor = colors.dark.gumbo}) => borderColor};
  border-radius: 4px;
  border-width: ${props => props.borderWidth ?? '0px'};
  flex-direction: row;
  justify-content: center;
  padding: ${props =>
    props.height || props.width
      ? '0px'
      : buttonSizeMapper[props.size ?? 'regular']};
  ${props => props.width && {width: props.width}};
  ${props => props.height && {height: props.height}};
`;

const ButtonPlain = ({
  onPress,
  fontWeight,
  fontSize,
  iconSize,
  label,
  leftIcon,
  rightIcon,
  iconColor,
  isDisable,
  height,
  size,
  width,
}: ButtonBaseInterface) => (
  <ButtonStyled
    onPress={isDisable ? undefined : onPress}
    borderWidth="1px"
    backgroundColor={colors.light.whiteSolid}
    size={size}
    width={width}
    height={height}>
    <ButtonIcon
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconColor={iconColor}
      size={iconSize}>
      <Text
        label={label}
        fontWeight={fontWeight || 'bold'}
        textTransform="capitalize"
        variant={fontSize ? fontSize : size === 'small' ? 'small' : 'medium'}
        color={isDisable ? '#f3f3f3' : colors.dark.gumbo}
      />
    </ButtonIcon>
  </ButtonStyled>
);

const ButtonBackground = ({
  onPress,
  color,
  fontWeight,
  fontSize,
  iconSize,
  label,
  leftIcon,
  rightIcon,
  iconColor,
  isDisable,
  height,
  size,
  width,
}: ButtonBaseInterface) => (
  <ButtonStyled
    size={size}
    onPress={isDisable ? undefined : onPress}
    disabled={isDisable}
    backgroundColor={
      isDisable ? colors.dark.bermudaGrey : color || colors.primary
    }
    height={height}
    width={width}>
    <ButtonIcon
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconColor={iconColor}
      size={iconSize}>
      <Text
        label={label}
        fontWeight={fontWeight || 'bold'}
        textTransform="capitalize"
        variant={fontSize ? fontSize : size === 'small' ? 'small' : 'medium'}
        color={isDisable ? '#f3f3f3' : colors.light.whiteSolid}
      />
    </ButtonIcon>
  </ButtonStyled>
);

const ButtonSecondary = ({
  onPress,
  color,
  fontSize,
  fontWeight,
  iconSize,
  label,
  leftIcon,
  rightIcon,
  iconColor,
  isDisable,
  height,
  size,
  width,
}: ButtonBaseInterface) => (
  <ButtonStyled
    borderColor={colors.dark.blackCoral}
    borderWidth="1px"
    size={size}
    onPress={isDisable ? undefined : onPress}
    disabled={isDisable}
    backgroundColor={
      isDisable ? colors.dark.bermudaGrey : color || colors.light.whiteSolid
    }
    height={height}
    width={width}>
    <ButtonIcon
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconColor={iconColor}
      size={iconSize}>
      <Text
        label={label}
        fontWeight={fontWeight || 'bold'}
        textTransform="capitalize"
        variant={fontSize ? fontSize : size === 'small' ? 'small' : 'medium'}
        color={isDisable ? '#f3f3f3' : colors.dark.blackCoral}
      />
    </ButtonIcon>
  </ButtonStyled>
);

export const Button = (props: ButtonInterface) => {
  const buttonVariantMapper: Record<ButtonVariantType, JSX.Element> = {
    plain: <ButtonPlain {...props} />,
    background: <ButtonBackground {...props} />,
    secondary: <ButtonSecondary {...props} />,
  };

  return buttonVariantMapper[props.variant];
};
