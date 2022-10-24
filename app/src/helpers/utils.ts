import { AnyAction, SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function Pause(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const isError = (action: AnyAction) => {
  return action.type.endsWith("rejected");
};

export function errorMessage(error: FetchBaseQueryError | SerializedError | undefined) {
  if (error == undefined) return undefined;
  const fetchError = error as FetchBaseQueryError;
  const serializedError = error as SerializedError;

  if (fetchError) {
    return fetchError.status + " " + JSON.stringify(fetchError.data);
  }
  if (serializedError) {
    return `${serializedError.name} | ${serializedError.message}\n ${serializedError.stack}`
  }
}