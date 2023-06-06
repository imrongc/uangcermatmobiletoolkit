import {FontWeightType, TextVariantType} from '../Text';
import {IconType} from '../Icon';

export interface ButtonIconInterface {
  leftIcon?: IconType;
  rightIcon?: IconType;
  iconColor?: string;
  size?: string;
}

export interface ButtonProps extends ButtonIconInterface {
  children: React.ReactNode;
}

export type ButtonSizeType = 'small' | 'regular';

export interface ButtonBaseInterface extends ButtonIconInterface {
  onPress: () => void;
  color?: string;
  label: string;
  isDisable?: boolean;
  size?: ButtonSizeType;
  fontWeight?: FontWeightType;
  fontSize?: TextVariantType;
  iconSize?: string;
  width?: number;
  height?: number;
}

export interface ButtonStyledProps {
  backgroundColor: string;
  borderWidth?: string;
  size?: ButtonSizeType;
  borderColor?: string;
  width?: number;
  height?: number;
}

export type ButtonVariantType = 'plain' | 'background' | 'secondary';

export interface ButtonInterface extends ButtonBaseInterface {
  variant: ButtonVariantType;
}
