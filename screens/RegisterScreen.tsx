import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { colors } from "../styles/global";
import { styles } from "../styles/formStyles";

const RegisterScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleLoginChange = (value: string) => {
    setLogin(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>Показати</Text>
    </TouchableOpacity>
  );

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const onRegister = () => {
    Alert.alert("Credentials", `${login} + ${email} + ${password}`);
  };

  const onSignIn = () => {
    console.log("Sign in!");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Image
          source={require("../assets/images/background.png")}
          resizeMode='cover'
          style={styles.image}
        />
        <View style={[styles.formContainer, registerStyles.container]}>
          <View style={registerStyles.photoInput}>
            <TouchableOpacity style={registerStyles.iconButton}>
              <Text style={registerStyles.iconText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={registerStyles.inputContainer}>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={login}
                autofocus={true}
                placeholder='Логін'
                onTextChange={handleLoginChange}
              />

              <Input
                value={email}
                autofocus={true}
                placeholder='Адреса електронної пошти'
                onTextChange={handleEmailChange}
              />
              <Input
                value={password}
                placeholder='Пароль'
                rightButton={showButton}
                outerStyles={styles.passwordButton}
                onTextChange={handlePasswordChange}
                secureTextEntry={isPasswordVisible}
              />
            </View>
            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onRegister}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Зареєструватися
                </Text>
              </Button>

              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Вже є аккаунт?
                  <TouchableWithoutFeedback onPress={onSignIn}>
                    <Text style={styles.signUpText}> Увійти</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const registerStyles = StyleSheet.create({
  container: {
    height: "65%",
  },
  photoInput: {
    position: "absolute",
    top: -60,
    left: "40%",
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,
  },
  inputContainer: {
    marginTop: 60,
  },
  iconButton: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    position: "absolute",
    bottom: 10,
    right: -10,
  },
  iconText: {
    color: colors.orange,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "300",
  },
});