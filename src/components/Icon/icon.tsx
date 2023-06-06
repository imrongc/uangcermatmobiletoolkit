import {
  AccountIcon,
  CheckCircleOutlineIcon,
  CloseCircleOutlineIcon,
  FaceIdIcon,
  HomeIcon,
  InfoCircleIcon,
} from '../../assets/icons';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '../../styles/colors';

import {IconProps, IconType} from './icon.type';

export const Icon = ({name, color, size}: IconProps) => {
  const svgFillIconProps: SvgProps = {
    fill: color || colors.dark.gumbo,
    height: size || '24px',
    width: size || '24px',
  };

  //FIX: Uncomment if need stroke icon style
  // const svgStrokeIconProps: SvgProps = {
  //   stroke: color || colors.dark.gumbo,
  //   height: size || '24px',
  //   width: size || '24px'
  // };

  const iconName: Record<IconType, JSX.Element> = {
    account: <AccountIcon {...svgFillIconProps} />,
    checkCircleOutline: <CheckCircleOutlineIcon {...svgFillIconProps} />,
    closeCircleOutline: <CloseCircleOutlineIcon {...svgFillIconProps} />,
    faceId: <FaceIdIcon {...svgFillIconProps} />,
    home: <HomeIcon {...svgFillIconProps} />,
    infoCircle: <InfoCircleIcon {...svgFillIconProps} />,
  };

  return iconName[name];
};
