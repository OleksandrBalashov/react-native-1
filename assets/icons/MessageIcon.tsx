import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { colors } from "../../styles/global";

const MessageIcon = (props: SvgProps) => {
  const { fill = "none", stroke = colors.text, ...otherProps } = props;
  return (
    <Svg fill={fill} {...otherProps} width='24' height='24'>
      <Path
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M1 9.5a8.38 8.38 0 0 0 .9 3.8A8.5 8.5 0 0 0 9.5 18a8.38 8.38 0 0 0 3.8-.9L19 19l-1.9-5.7a8.38 8.38 0 0 0 .9-3.8 8.5 8.5 0 0 0-4.7-7.6A8.38 8.38 0 0 0 9.5 1H9a8.48 8.48 0 0 0-8 8v.5Z'
        clipRule='evenodd'
      />
    </Svg>
  );
};

export default MessageIcon;
