type DetailsScreenParams = {
  id: string;
};

type RootStackParamList = {
  Feed: undefined;
  Details: DetailsScreenParams;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type {DetailsScreenParams, RootStackParamList};
