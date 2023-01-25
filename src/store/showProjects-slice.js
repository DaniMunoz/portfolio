import { createSlice } from "@reduxjs/toolkit";

//We create as many state slices as needed, but they are part of a single store
//Every slice can be in its own file, to simplify maintenance

const initialShowProjectsState = { showProjects: true };

const showProjectsSlice = createSlice({
  name: "showProjects",
  initialState: initialShowProjectsState,
  reducers: {
    changeShowProjectsTo(state, action) {
      //This is redux toolkit, we DO CAN mutate state here.
      //Redux toolkit transforms this into an inmutable operation
      state.showProjects = action.payload;
    },
  },
});

export const showProjectsActions = showProjectsSlice.actions;

//To obtain language state, would this work? - const language = useSelector((state) => state.language.language);

//We just need to export the reducer, which will be used to add this slice to the redux store
export default showProjectsSlice.reducer;