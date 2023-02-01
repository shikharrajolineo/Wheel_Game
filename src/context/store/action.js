import { OTP, STORE, VERIFYOTP } from "./constant";

export const addStore = (store_id) => {
  return { type: STORE, payload: store_id };
};

export const addOtp = (otp) => {
  return { type: OTP, payload: otp };
};

export const addVerifyOtp = (payload) => {
  return { type: VERIFYOTP, payload };
};
