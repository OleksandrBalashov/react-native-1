import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const PhotoIcon = (props: SvgProps) => (
  <Svg fill='none' {...props} width={24} height={24}>
    <G fill='#BDBDBD' clipPath='url(#a)'>
      <Path d='M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z' />
      <Path d='M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9Zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h24v24H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PhotoIcon;
