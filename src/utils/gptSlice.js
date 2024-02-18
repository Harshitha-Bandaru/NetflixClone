import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchButton: false,
  },
  reducers: {
    toggleGPTSearchButton: (state) => {
      state.gptSearchButton = !state.gptSearchButton;
    },
  },
});

export const { toggleGPTSearchButton } = gptSlice.actions;
export default gptSlice.reducer;
