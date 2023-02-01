import axios from "axios";
import { categoryUrl } from "../constant/urlConstant";

export const sendCatService = async (payload) => {
  return await axios.post(categoryUrl, payload);
};
