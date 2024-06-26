import { NextFunction, Request, Response } from "express";

import HttpException from "../interfaces/httpException";

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  result: T;
};

export const apiResponse = <T>({
  success,
  message,
  result,
}: ApiResponse<T>) => {
  return {
    success,
    message,
    result,
  };
};
export const errorHandler = (error: unknown) => {
  const errorMessage =
    error instanceof Error ? error?.message : "Something went wrong!";

  return apiResponse({
    success: false,
    message: errorMessage,
    result: null,
  });
};

function errorMiddleware(
  error: HttpException,
  _request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) {
  const status = error.status ?? 500;
  const message = error.message ?? "Something went wrong";
  response.status(status).send(errorHandler(message));
}

export default errorMiddleware;
