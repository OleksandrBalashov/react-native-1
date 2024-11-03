import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import BottomTabNavigator from "./BottomTabNavigation";
import CommentsScreen from "../screens/CommentsScreen";
import { RootStackParamList } from "../types";
import BackButton from "../components/BackButton";
import MapScreen from "../screens/MapScreen";
import { RouteProp } from "@react-navigation/native";

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Posts' component={BottomTabNavigator} />
      <Stack.Screen
        name='Comments'
        component={CommentsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Коментарі",
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name='Map'
        component={MapScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Мапа",
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
