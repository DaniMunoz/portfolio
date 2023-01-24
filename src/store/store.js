import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language-slice";

const store = configureStore({
  reducer: { language: languageReducer
    //, auth: authSlice.reducer   //to add an hypothetical authSlice to the store
 },
});

export default store;


