import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { selectImage } from "../tools/selectImage";
import { colors } from "../styles/global";

const UploadPhoto = () => {
  return (
    <View>
      <View style={styles.photoInput}>
        <TouchableOpacity style={styles.iconButton} onPress={selectImage}>
          <Text style={styles.iconText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  photoInput: {
    position: "absolute",
    top: -90,
    left: "35%",
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,
  },
  iconButton: {
    position: "absolute",
    top: 80,
    right: -10,
    width: 25,
    height: 25,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  iconText: {
    color: colors.orange,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "300",
  },
});
