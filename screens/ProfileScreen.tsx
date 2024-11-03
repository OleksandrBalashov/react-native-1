import { View, Image, StyleSheet, Text } from "react-native";
import { styles } from "../styles/formStyles";
import UploadPhoto from "../components/UploadPhoto";
import { posts, user } from "../data";
import { colors } from "../styles/global";
import PostsList from "../components/PostsList";
import LogoutButton from "../components/LogoutButton";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/background.png")}
        resizeMode='cover'
        style={styles.image}
      />
      <View style={[styles.formContainer, profileStyles.formContainer]}>
        <UploadPhoto />
        <View style={profileStyles.logoutButtom}>
          <LogoutButton />
        </View>
        <View style={profileStyles.wrapper}>
          <Text style={profileStyles.userDetails}>
            {`${user.name} ${user.secondName}`}
          </Text>
          <PostsList posts={posts} isLikesVisible />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const profileStyles = StyleSheet.create({
  formContainer: {
    minHeight: "50%",
    maxHeight: "80%",
  },
  userDetails: {
    color: colors.black_primary,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "medium",
    marginBottom: 32,
  },
  wrapper: {
    marginTop: 60,
  },
  logoutButtom: {
    marginLeft: "auto",
  },
});
