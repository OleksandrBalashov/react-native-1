import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import CreatePostScreen from "../screens/CreatePostsScreen";
import BackButton from "../components/BackButton";
import LogoutButton from "../components/LogoutButton";
import TabNav from "../components/TabNav";
import ProfileScreen from "../screens/ProfileScreen";

import ProfileIcon from "../assets/icons/ProfileIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import { colors } from "../styles/global";
import PostsIcon from "../assets/icons/PostsIcon";

const activeTabSvgColor = { stroke: colors.white };

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
          tabBarIcon: ({ focused }) => (
            <TabNav focused={focused}>
              <PostsIcon {...(focused && { stroke: colors.white })} />
            </TabNav>
          ),
        }}
      />
      <Tab.Screen
        name='CreatePost'
        component={CreatePostScreen}
        options={({ navigation }) => ({
          title: "Створити Публікацію",
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
          tabBarIcon: () => (
            <TabNav>
              <PlusIcon />
            </TabNav>
          ),
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabNav focused={focused}>
              <ProfileIcon {...(focused && activeTabSvgColor)} />
            </TabNav>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
