import i18next from "i18next";
import { toast } from "react-toastify";

export const toastError = (err: any) => {
  const errorMsg = err.response?.data?.message || err.response.data.error;
  if (errorMsg) {
    if (i18next.exists(`backendErrors.${errorMsg}`)) {
      toast.error(i18next.t(`backendErrors.${errorMsg}`), {
        toastId: errorMsg,
      });
    } else {
      toast.error(errorMsg, {
        toastId: errorMsg,
      });
    }
  } else {
    toast.error("An error occurred!");
  }
};
