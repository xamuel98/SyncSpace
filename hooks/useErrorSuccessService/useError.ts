import { ApiResponse } from "@/types/ApiResponse";
import { useToast } from "../useToast";

const useErrorService = () => {
  const { createToast } = useToast();

  const isErrorWithMessage = (error: unknown): error is ApiResponse => {
    return (
      typeof error === "object" &&
      error !== null &&
      "data" in error &&
      typeof ((error.data as any).data as Record<string, unknown>).message === "string"
    )
  };

  const handleError = (error: unknown): void => {
    let errorMessage: string = "";

    if (isErrorWithMessage(error)) {
      // Handle Error object
      const { data: { message } } = error.data;
      errorMessage = message;
    } else if (typeof error === "string") {
      // Handle String error
      errorMessage = String(error);
    } else {
      // Handle other types of errors
    }

    createToast({
      type: "danger",
      message: errorMessage,
    });
  };

  return { handleError };
};

export default useErrorService;
