import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../styles/global";
import PhotoIcon from "../assets/icons/PhotoIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import Button from "./Button";
import { useState } from "react";
import Input from "./Input";

const CreatePostForm = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
  });

  const { name, location } = form;
  const isDisabled = !name || !location;

  const handleChangeName = (value: string) => {
    setForm((prev) => ({ ...prev, name: value }));
  };

  const handleChangeLocation = (value: string) => {
    console.log(value);
    setForm((prev) => ({ ...prev, location: value }));
  };

  const handlePress = () => {
    console.log(form);
  };

  return (
    <>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadWrap}>
          <View style={styles.photoUpload}>
            <PhotoIcon />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Завантажте фото</Text>
      </View>
      <Input
        outerStyles={styles.input}
        placeholder='Назва...'
        value={form.name}
        onTextChange={handleChangeName}
      />
      <Input
        outerStyles={[styles.input, styles.withIcon]}
        placeholder='Місцевість...'
        value={form.location}
        onTextChange={handleChangeLocation}
        leftIcon={LocationIcon}
        iconStyles={styles.inputIcon}
      />

      <Button
        onPress={handlePress}
        buttonStyle={isDisabled && styles.isDisabled}
      >
        <Text style={[styles.buttonPress, isDisabled && styles.isDisabled]}>
          Опублікувати
        </Text>
      </Button>
    </>
  );
};

export default CreatePostForm;

const styles = StyleSheet.create({
  uploadContainer: {
    marginBottom: 40,
  },
  uploadWrap: {
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    borderRadius: 8,
    backgroundColor: colors.light_gray,
    borderWidth: 1,
    borderColor: colors.border_gray,
    marginBottom: 5,
  },
  photoUpload: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: colors.white,
  },
  input: {
    position: "relative",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.border_gray,
    fontSize: 16,
    paddingBottom: 10,
    marginBottom: 40,
    backgroundColor: "transparent",
    paddingLeft: 0,
  },
  inputIcon: {
    position: "absolute",
    top: 12,
  },
  withIcon: {
    paddingLeft: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.text,
  },
  buttonPress: {
    fontSize: 18,
    lineHeight: 19,
    color: colors.white,
    textAlign: "center",
  },
  isDisabled: {
    color: colors.text,
    backgroundColor: colors.light_gray,
  },
});
