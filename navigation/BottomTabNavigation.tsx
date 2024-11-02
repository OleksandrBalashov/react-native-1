import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import CreatePostScreen from "../screens/CreatePostsScreen";
import BackButton from "../components/BackButton";
import LogoutButton from "../components/LogoutButton";
import ProfileScreen from "../screens/ProfileScreen";

import ProfileIcon from "../assets/icons/ProfileIcon";
import { View } from "react-native";
import PlusIcon from "../assets/icons/PlusIcon";
import { colors } from "../styles/global";
import PostsIcon from "../assets/icons/PostsIcon";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Posts'
      screenOptions={{
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        tabBarLabel: "",
        tabBarStyle: {
          paddingTop: 30,
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: colors.light_gray,
        },
      }}
    >
      <Tab.Screen
        name='Posts'
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => <LogoutButton />,
          tabBarIcon: ({ color, size }) => (
            <PostsIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name='CreatePost'
        component={CreatePostScreen}
        options={({ navigation }) => ({
          title: "Створити Публікацію",
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,

          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 40,
                backgroundColor: colors.orange,
                borderRadius: 40,
                paddingTop: 10,
                paddingLeft: 8,
              }}
            >
              <PlusIcon color={color} width={size} height={size} />
            </View>
          ),
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarStyle: { height: 60 },
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon color={color} width={size} height={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
