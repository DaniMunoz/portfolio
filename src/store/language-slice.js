import { createSlice } from "@reduxjs/toolkit";

//We create as many state slices as needed, but they are part of a single store
//Every slice can be in its own file, to simplify maintenance

const initialLanguageState = { language: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState: initialLanguageState,
  reducers: {
    changeLanguageTo(state, action) {
      //This is redux toolkit, we DO CAN mutate state here.
      //Redux toolkit transforms this into an inmutable operation
      state.language = action.payload;
    },
  },
});

export const languageActions = languageSlice.actions;

//To obtain language state, would this work? - const language = useSelector((state) => state.language.language);

//We just need to export the reducer, which will be used to add this slice to the redux store
export default languageSlice.reducer;


