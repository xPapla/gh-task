import wretch, { Wretcher } from "wretch";

const apiClient = wretch("https://api.github.com", {
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
}).errorType("json");

const genericApiErrorHandler = (err: any) => {
  const errorMessage =
    err?.json?.message?.toString() ||
    err?.message?.toString() ||
    err?.toString();

  throw new Error(errorMessage);
};

type CallbackType<T> = (apiClient: Wretcher) => Promise<T>;

export const withApiClient = <T>(
  cb: CallbackType<T>,
): ReturnType<CallbackType<T>> => cb(apiClient).catch(genericApiErrorHandler);
