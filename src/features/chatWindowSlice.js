import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showChatWindow: null,
};

const chatWindowSlice = createSlice({
  name: "chatWindow",
  initialState,
  reducers: {
    setShowChatWindow: (state, action) => {
      state.showChatWindow = action.payload;
    },
  },
});

export const { setShowChatWindow } = chatWindowSlice.actions;
export default chatWindowSlice.reducer;
