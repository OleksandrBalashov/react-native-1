import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { colors } from "../../styles/global";

const PlusIcon = (props: SvgProps) => {
  const { fill = colors.black_primary, ...otherProps } = props;

  return (
    <Svg {...otherProps} width={24} height={24}>
      <Path
        fill={fill}
        fillRule='evenodd'
        d='M7.5.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z'
        clipRule='evenodd'
      />
    </Svg>
  );
};
export default PlusIcon;
