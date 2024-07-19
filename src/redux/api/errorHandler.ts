import {
  Middleware,
  MiddlewareAPI,
  configureStore,
  isRejected,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action:any) => {
    // isRejectedWithValue Or isRejected
    if (isRejected(action)) {
      console.log(action) // get all data from rejected request
      // if (action.payload?.status === 401) {
      //   console.log("error auth");
      // }
      toast.error(action.payload?.data?.message);
    }

    return next(action);
  };