import { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface IComment {
  user: {
    id: number;
    logoImage: string;
  };
  id: number;
  comment: string;
  date: string;
}

export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  Home: undefined;
  Comments: {
    image: any;
    comments: IComment[];
  };
  Map: {
    latitude: number;
    longitude: number;
  };
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
