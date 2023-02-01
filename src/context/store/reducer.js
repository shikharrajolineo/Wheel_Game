import { OTP, STORE, VERIFYOTP } from "./constant";

export function storeReducer(state, action) {
  switch (action.type) {
    case STORE:
      return { ...state, store: action.payload };
    case OTP:
      return { ...state, otp: action.payload };
    case VERIFYOTP:
      return { ...state, verify: action.payload };  
    default:
      return state;
  }
}
