import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import MessageIcon from "../assets/icons/MessageIcon";
import { colors } from "../styles/global";
import LocationIcon from "../assets/icons/LocationIcon";
import { ScrollView } from "react-native-gesture-handler";

interface Post {
  id: number;
  image: any;
  description: string;
  messages: string[];
  location: string;
  country: string;
}

interface IProps {
  posts: Post[];
}

const PostsList = ({ posts }: IProps) => {
  return (
    <ScrollView>
      {posts.map(({ id, image, description, messages, location, country }) => {
        return (
          <View key={id}>
            <View>
              <Image source={image} resizeMode='cover' style={styles.image} />
              <Text style={styles.description}>{description}</Text>
            </View>

            <View style={styles.detailsWrapper}>
              <View style={styles.details}>
                <MessageIcon />
                <Text style={styles.messagesCount}>{messages.length}</Text>
              </View>
              <TouchableOpacity style={styles.location}>
                <LocationIcon />
                <Text style={styles.locationText}>
                  {location}, {country}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
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
  },
  location: {
    marginLeft: "auto",
    flexDirection: "row",
  },
  locationText: {
    fontSize: 16,
    lineHeight: 18,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});
