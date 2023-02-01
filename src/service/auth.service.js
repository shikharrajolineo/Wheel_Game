import axios from "axios";
import { OtpUrl, verifyOtpUrl } from "../constant/urlConstant";

export const sendOtpService = async (payload) => {
  return await axios.post(OtpUrl, payload);
};

export const verifyOtpService = async (payload) => {
  return await axios.post(verifyOtpUrl, payload);
};
