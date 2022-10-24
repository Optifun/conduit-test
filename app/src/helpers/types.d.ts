export interface AsyncResult<TError> {
  errors: TError[];
  loading: boolean;
}
