import { RouteProp } from "@react-navigation/native";
import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { colors } from "../styles/global";
import Input from "../components/Input";
import { useState } from "react";
import ArrowUpIcon from "../assets/icons/ArrowUp";
import CommentsList from "../components/CommentsList";

type CommentsScreenRouteProp = RouteProp<RootStackParamList, "Comments">;

type CommentsScreenProps = {
  route: CommentsScreenRouteProp;
};

const CommentsScreen = ({ route }: CommentsScreenProps) => {
  const [comment, setComment] = useState("");
  const { image, comments } = route.params;

  const handleChange = (value: string) => {
    setComment(value);
  };

  const handlePress = () => {
    // send request to backend for saving comment into collection
    console.log(comment);
    setComment("");
  };

  const rightButton = (
    <TouchableOpacity onPress={handlePress}>
      <ArrowUpIcon />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Image source={image} resizeMode='cover' style={styles.image} />
      </TouchableWithoutFeedback>

      <View style={styles.commentsContainer}>
        <CommentsList comments={comments} />
      </View>

      <View style={styles.containerInput}>
        <Input
          value={comment}
          onTextChange={handleChange}
          placeholder={"Коментувати..."}
          outerStyles={styles.input}
          rightButton={rightButton}
        />
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 32,
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 16,
    marginBottom: 32,
  },
  commentsContainer: {
    flex: 1,
    paddingBottom: 80,
  },
  containerInput: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 25,
    backgroundColor: colors.white,
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.light_gray,
    borderRadius: 100,
    borderColor: colors.border_gray,
    borderWidth: 1,
    paddingVertical: 8,
    paddingRight: 8,
    paddingLeft: 16,
  },
});
