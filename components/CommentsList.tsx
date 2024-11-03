import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/global";
import { user as admin } from "../data";
import { IComment } from "../types";

interface IProps {
  comments: IComment[];
}

const CommentsList = ({ comments }: IProps) => {
  return (
    <ScrollView>
      {comments.map(({ user: { id, logoImage }, comment, date }) => {
        const isUserComment = id === admin.id;

        return (
          <View
            style={[styles.wrapper, isUserComment && styles.wrapperUserComment]}
          >
            <Image
              src={logoImage}
              style={[
                styles.logoImage,
                isUserComment ? styles.userLogo : styles.logo,
              ]}
            />
            <View
              style={[
                styles.containerText,
                isUserComment ? styles.borderUser : styles.border,
              ]}
            >
              <Text style={styles.comment}>{comment}</Text>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CommentsList;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginBottom: 24,
  },
  wrapperUserComment: {
    flexDirection: "row-reverse",
  },
  logoImage: {
    width: 28,
    height: 28,
    borderRadius: 28,
  },
  logo: {
    marginRight: 16,
  },
  userLogo: {
    marginLeft: 16,
  },
  containerText: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.light_gray,
    borderRadius: 8,
  },
  borderUser: {
    borderTopRightRadius: 0,
  },
  border: {
    borderTopLeftRadius: 0,
  },
  comment: {
    color: colors.black_primary,
    fontSize: 13,
    fontWeight: 400,
  },
  date: {
    color: colors.text,
    fontSize: 10,
    fontWeight: 400,
    textAlign: "right",
    marginTop: 8,
  },
});
