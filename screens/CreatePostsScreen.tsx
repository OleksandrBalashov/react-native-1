import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../styles/global";
import CreatePostForm from "../components/CreatePostForm";
import TrashIcon from "../assets/icons/TrashIcon";

const CreatePostScreen = () => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <CreatePostForm />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <View style={styles.wrap}>
        <TouchableOpacity style={styles.trashIcon}>
          <TrashIcon />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
  },
  wrap: {
    position: "absolute",
    bottom: 32,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  trashIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: colors.light_gray,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.text,
  },
});
