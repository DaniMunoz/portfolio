import { createSlice } from "@reduxjs/toolkit";

//We create as many state slices as needed, but they are part of a single store
//Every slice can be in its own file, to simplify maintenance

const initialShowContactState = { showContact: false };

const showContactSlice = createSlice({
  name: "showContact",
  initialState: initialShowContactState,
  reducers: {
    changeShowContactTo(state, action) {
      //This is redux toolkit, we DO CAN mutate state here.
      //Redux toolkit transforms this into an inmutable operation
      state.showContact = action.payload;
    },
  },
});

export const showContactActions = showContactSlice.actions;

//To obtain language state, would this work? - const language = useSelector((state) => state.language.language);

//We just need to export the reducer, which will be used to add this slice to the redux store
export default showContactSlice.reducer;