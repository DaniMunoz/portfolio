import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language-slice";
import showProjectsReducer from "./showProjects-slice";
import backenReducer from "./backend-slice";
import showContactReducer from "./showContact-slice";

const store = configureStore({
  reducer: { language: languageReducer
    , showProjects: showProjectsReducer
    , backend: backenReducer
    , showContact: showContactReducer
    //, auth: authSlice.reducer   //to add an hypothetical authSlice to the store
 },
});

export default store;


