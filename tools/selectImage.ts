import { launchImageLibrary, MediaType } from "react-native-image-picker";

export const selectImage = () => {
  const options = {
    mediaType: "photo" as MediaType,
    includeBase64: false,
  };

  launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.didCancel) {
      console.log("ImagePicker Error: ", response.didCancel);
    } else if (response.assets) {
      const selectedImage = response.assets[0];
      console.log(selectedImage); // Здесь вы можете сохранить или использовать выбранное изображение
    }
  });
};
