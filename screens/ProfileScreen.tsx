import { View, Image } from "react-native";
import { styles } from "../styles/formStyles";

const ProfileScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <Image
        source={require("../assets/images/background.png")}
        resizeMode='cover'
        style={styles.image}
      />
    </View>
  );
};

export default ProfileScreen;
