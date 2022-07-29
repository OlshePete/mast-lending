import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SECTION_ID_LIST } from "../Data/ContentText";


const initialState = {
  pageYOffset:false,
  currentSection:SECTION_ID_LIST[0],
};

const mastSlice = createSlice({
  name: "mast",
  initialState,
  reducers: {
    setPageYOffset(state, action) {
      state.pageYOffset = action.payload
    },
    setCurrentSection(state, action) {
      state.currentSection = action.payload
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const {
  setPageYOffset,setCurrentSection
} = mastSlice.actions;

export default mastSlice.reducer;
