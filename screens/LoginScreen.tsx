import { useState } from "react";
import {
  Alert,
  Animated,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../styles/global";
import Input from "../components/Input";
import Button from "../components/Button";
import { styles } from "../styles/formStyles";
import { useKeyboardVisible } from "../hooks/useKeyboardVisible";
import useAnimatedKeyboardHeight from "../hooks/useAnimatedKeyboardHeight";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const isKeyboardVisible = useKeyboardVisible();

  const formContainerStyle = isKeyboardVisible
    ? loginStyles.formContainerKeyboard
    : loginStyles.formContainer;

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onLogin = () => {
    email && password && Alert.alert("Credentials", `${email} + ${password}`);
  };

  const onSignUp = () => {
    console.log("Sign up!");
  };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>Показати</Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.viewContainer}>
        <Image
          source={require("../assets/images/background.png")}
          resizeMode='cover'
          style={styles.image}
        />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={[styles.formContainer, formContainerStyle]}>
            <Text style={styles.title}>Увійти</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
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
              <Button onPress={onLogin}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Увійти
                </Text>
              </Button>

              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Немає акаунту?
                  <TouchableWithoutFeedback onPress={onSignUp}>
                    <Text style={styles.signUpText}> Зареєструватися</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const loginStyles = StyleSheet.create({
  formContainer: {
    height: "50%",
  },
  formContainerKeyboard: {
    height: "60%",
  },
});
