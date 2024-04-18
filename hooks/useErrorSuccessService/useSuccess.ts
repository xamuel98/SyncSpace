import { ApiResponse } from "@/types/ApiResponse";
import { useToast } from "../useToast";


const useSuccessService = () => {
  const { createToast } = useToast();

  const isSuccessWithMessage = (response: unknown): response is ApiResponse => {
    return (
      typeof response === "object" &&
      response !== null &&
      typeof (response as Record<string, unknown>).message === "string"
    )
  };

  const handleSuccess = (response: ApiResponse): void => {
    let successMessage: string = "";

    if (isSuccessWithMessage(response)) {
      // Handle Error object
      const { message } = response
      successMessage = message;
      
    } else if (typeof response === "string") {
      // Handle String response
      successMessage = String(response);
    }

    createToast({
      type: "success",
      message: successMessage,
    });
  };

  return { handleSuccess };
};

export default useSuccessService;