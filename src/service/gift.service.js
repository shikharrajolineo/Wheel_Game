import axios from "axios";
import { giftUrl } from "../constant/urlConstant";

export const sendGiftService = async (payload) => {
  return await axios.post(giftUrl, payload);
};
