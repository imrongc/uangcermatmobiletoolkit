export type IconType =
  | 'account'
  | 'checkCircleOutline'
  | 'closeCircleOutline'
  | 'faceId'
  | 'home'
  | 'infoCircle';

export interface IconProps {
  name: IconType;
  size?: string;
  color?: string;
}
