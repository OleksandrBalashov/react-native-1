import { TouchableOpacity } from "react-native-gesture-handler";
import LogoutIcon from "../assets/icons/LogoutIcon";

const LogoutButton = () => {
  return (
    <TouchableOpacity>
      <LogoutIcon />
    </TouchableOpacity>
  );
};

export default LogoutButton;
