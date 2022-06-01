import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export const Store = configureStore({reducer});

//const unsubscribe = Store.subscribe(() => {
  //  console.log(`State is Changed : ${Store.getState()}`)
//});
