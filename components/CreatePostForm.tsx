import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button as ButtonReact,
} from "react-native";
import { colors } from "../styles/global";
import PhotoIcon from "../assets/icons/PhotoIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import { CameraType, useCameraPermissions, CameraView } from "expo-camera";

const defaultFrom = {
  name: "",
  location: "",
  photoUri: "",
};

const CreatePostForm = () => {
  const [form, setForm] = useState(defaultFrom);

  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("back");
  const cameraRef = useRef<CameraView | null>(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

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
    setForm(defaultFrom);
  };

  const getCameraPermission = async () => {
    const { status } = await requestCameraPermission();
    if (status !== "granted") {
      alert("Ми потребуємо вашої дозволу на використання камери.");
    }
  };

  const takePhoto = async () => {
    const photo = await cameraRef?.current?.takePictureAsync();
    if (photo) {
      setForm((prev) => ({ ...prev, photoUri: photo.uri }));
    }
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

  if (!cameraPermission) {
    return <View />;
  }

  if (!cameraPermission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <ButtonReact
          onPress={requestCameraPermission}
          title='grant permission'
        />
      </View>
    );
  }

  return (
    <>
      <View style={styles.uploadContainer}>
        <TouchableOpacity
          style={styles.uploadWrap}
          onPress={() => {
            setIsCameraVisible(true);
          }}
        >
          {isCameraVisible && (
            <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={toggleCameraFacing}
                >
                  <Text style={styles.text}>Flip Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={takePhoto}>
                  <Text style={styles.text}>Take Photo</Text>
                </TouchableOpacity>
              </View>
            </CameraView>
          )}
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
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
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
    zIndex: 100,
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
