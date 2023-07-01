import {NativeStackScreenProps} from '@react-navigation/native-stack';

type DetailsScreenParams = {
  id: number;
};

type RootStackParamList = {
  Feed: undefined;
  Details: DetailsScreenParams;
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type {RootStackParamList, RootStackScreenProps};
