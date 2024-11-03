import { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface IComment {
  user: {
    id: number;
    logoImage: string;
  };
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
  Map: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
