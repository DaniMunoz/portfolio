import { createSlice } from "@reduxjs/toolkit";

//We create as many state slices as needed, but they are part of a single store
//Every slice can be in its own file, to simplify maintenance

const initialBackendState = { backend: 0 };

const backendSlice = createSlice({
  name: "backend",
  initialState: initialBackendState,
  reducers: {
    changeBackendTo(state, action) {
      //This is redux toolkit, we DO CAN mutate state here.
      //Redux toolkit transforms this into an inmutable operation
      state.backend = action.payload;
    },
  },
});

export const backendActions = backendSlice.actions;

//We just need to export the reducer, which will be used to add this slice to the redux store
export default backendSlice.reducer;