import React, { createContext, useReducer, useContext } from "react";
import { storeReducer } from "./store/reducer";
import { sendOtpService, verifyOtpService } from "../service/auth.service";
import { addOtp, addVerifyOtp } from "./store/action";
import { toast } from "react-hot-toast";
export const StoreContext = createContext();

const initialState = {
  store: false,
  otp: false,
  verify: false,
};

function StoreProvider(props) {
  const [store, dispatch] = useReducer(storeReducer, initialState);
  const handleOtpService = async (payload) => {
    try {
      const data = await sendOtpService(payload);
      dispatch(addOtp(true));
      toast.success(data.data.detail);
    } catch (err) {
      console.error(err)
      toast.error(err?.response?.data?.warning || "Internal Server Error" );
    }
  };

  const handleVerifyOtpService = async (payload) => {
    try {
      const data = await verifyOtpService(payload);
      dispatch(addVerifyOtp(true));
      toast.success(data.data.detail);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "internal server error");
      throw new err()
    }
  };

  const storeData = {
    store,
    dispatch,
    handleOtpService,
    handleVerifyOtpService,
  };
  return <StoreContext.Provider value={storeData} {...props} />;
}

function useStoreContext() {
  return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };
