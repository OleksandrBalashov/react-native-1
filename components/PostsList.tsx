import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import MessageIcon from "../assets/icons/MessageIcon";
import { colors } from "../styles/global";
import LocationIcon from "../assets/icons/LocationIcon";
import { ScrollView } from "react-native-gesture-handler";
import LikesIcon from "../assets/icons/LikesIcon";
import { IComment, RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  "Comments",
  "Map"
>;

interface IPost {
  id: number;
  image: any;
  description: string;
  location: string;
  country: string;
  likes: number;
  comments: IComment[];
}

interface IProps {
  posts: IPost[];
  isVisibleLocation?: boolean;
  isLikesVisible?: boolean;
}

const iconProps = { fill: colors.orange, stroke: colors.orange };

const PostsList = ({
  posts,
  isVisibleLocation = false,
  isLikesVisible = false,
}: IProps) => {
  const navigation = useNavigation<NavigationProp>();

  const commentsHandler = (props: { image: any; comments: IComment[] }) => {
    navigation.navigate("Comments", props);
  };

  const locationHandler = () => {
    navigation.navigate("Map");
  };

  return (
    <ScrollView>
      {posts.map(
        ({ id, image, description, location, country, likes, comments }) => {
          return (
            <View key={id}>
              <View>
                <Image source={image} resizeMode='cover' style={styles.image} />
                <Text style={styles.description}>{description}</Text>
              </View>

              <View style={styles.detailsWrapper}>
                <TouchableOpacity
                  onPress={() => commentsHandler({ image, comments })}
                >
                  <View style={styles.details}>
                    <MessageIcon {...(!!comments.length && iconProps)} />
                    <Text
                      style={[
                        styles.messagesCount,
                        !!comments.length && styles.activeCount,
                      ]}
                    >
                      {comments.length}
                    </Text>
                  </View>
                </TouchableOpacity>
                {isLikesVisible && (
                  <View style={styles.likesWrap}>
                    <LikesIcon {...(!!likes && { stroke: iconProps.fill })} />
                    <Text
                      style={[
                        styles.likesText,
                        !!likes && styles.activeLikesText,
                      ]}
                    >
                      {likes}
                    </Text>
                  </View>
                )}

                <TouchableOpacity
                  style={styles.location}
                  onPress={locationHandler}
                >
                  <LocationIcon />
                  <Text style={styles.locationText}>
                    {isVisibleLocation && <Text>{location},</Text>} {country}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }
      )}
    </ScrollView>
  );
};

export default PostsList;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 240,
    borderRadius: 16,
    marginBottom: 5,
  },
  messagesCount: {
    color: colors.text,
    marginLeft: 5,
  },
  activeCount: {
    color: colors.black_primary,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detailsWrapper: {
    flexDirection: "row",
    marginBottom: 10,
  },
  details: {
    flexDirection: "row",
    marginBottom: 5,
    marginRight: 20,
  },
  location: {
    marginLeft: "auto",
    flexDirection: "row",
  },
  locationText: {
    fontSize: 16,
    lineHeight: 18,
    marginLeft: 4,
    textDecorationLine: "underline",
  },
  likesWrap: {
    flexDirection: "row",
  },
  likesText: {
    fontSize: 16,
    lineHeight: 18,
    marginLeft: 5,
    color: colors.text,
  },
  activeLikesText: {
    color: colors.black_primary,
  },
});
