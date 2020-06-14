export type PayloadLoading = {
  isLoading: boolean;
};

export type Payload = {
  isLoading?: boolean;
  data?: any | undefined;
  error?: any | undefined;
};

export type PayloadProbability = {
  probability: any | undefined;
};
