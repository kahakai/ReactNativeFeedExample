type DetailsScreenParams = {
  id: string;
};

type RootStackParamList = {
  Feed: undefined;
  Details: DetailsScreenParams;
};

export type {DetailsScreenParams, RootStackParamList};
