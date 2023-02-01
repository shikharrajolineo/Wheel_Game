import React from "react";
import { useStoreContext } from "../context/store";

const Auth = ({ children }) => {
  const { store } = useStoreContext();
  console.log(store, "store");
  
  
  return <div>{children}</div>;
};

export default Auth;
