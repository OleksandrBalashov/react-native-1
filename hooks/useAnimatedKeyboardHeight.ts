import { useEffect, useRef } from "react";
import { Keyboard, Animated } from "react-native";
import { useKeyboardVisible } from "./useKeyboardVisible"; // используем ваш существующий хук

export const useAnimatedKeyboardHeight = (
  initialHeight = 0.5,
  keyboardHeight = 0.6,
  duration = 300
) => {
  const isKeyboardVisible = useKeyboardVisible();
  const animatedHeight = useRef(new Animated.Value(initialHeight)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isKeyboardVisible ? keyboardHeight : initialHeight,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, [isKeyboardVisible, initialHeight, keyboardHeight, duration]);

  return animatedHeight;
};

export default useAnimatedKeyboardHeight;
