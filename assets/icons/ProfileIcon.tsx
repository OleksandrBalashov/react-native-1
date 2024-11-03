import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { colors } from "../../styles/global";

const ProfileIcon = (props: SvgProps) => {
  const {
    stroke = colors.black_primary,
    fill = "none",
    strokeOpacity = 0.8,
    ...otherProps
  } = props;

  return (
    <Svg fill={fill} {...otherProps} width={24} height={24}>
      <Path
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeOpacity={0.8}
        d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'
      />
      <Path
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeOpacity={0.8}
        d='M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
        clipRule='evenodd'
      />
    </Svg>
  );
};
export default ProfileIcon;
