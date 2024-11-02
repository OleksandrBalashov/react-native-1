import { TouchableOpacity } from "react-native";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";

interface Props {
  onPress: () => void;
}

const BackButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
};

export default BackButton;
