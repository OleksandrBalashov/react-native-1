import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { colors } from "../styles/global";
import PostsList from "../components/PostsList";

const posts = [
  {
    id: 1,
    image: require("../assets/images/forest.jpg"),
    description: "Ліс",
    location: "Ivano-Frankivs'k region",
    country: "Ukraine",
    messages: [],
  },
  {
    id: 2,
    image: require("../assets/images/sunrize.jpg"),
    description: "Сонце",
    location: "Ivano-Frankivs'k region",
    country: "Ukraine",
    messages: [],
  },
];

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg",
          }}
          resizeMode='cover'
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Natalia Romanova</Text>
          <Text style={styles.profileEmail}>email@example.com</Text>
        </View>
      </View>
      <PostsList posts={posts} />
      <View></View>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  profileName: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.black_primary,
  },
  profileEmail: {
    fontSize: 11,
    color: colors.back_opacity,
  },
  profileDetails: {
    marginLeft: 10,
  },
});
