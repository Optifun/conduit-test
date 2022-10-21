export type AsyncResult<TResponce, TError> = {
  body: TResponce | TError;
  loading: boolean;
};
