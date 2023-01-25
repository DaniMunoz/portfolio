import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language-slice";
import showProjectsReducer from "./showProjects-slice";

const store = configureStore({
  reducer: { language: languageReducer
    , showProjects: showProjectsReducer
    //, auth: authSlice.reducer   //to add an hypothetical authSlice to the store
 },
});

export default store;


