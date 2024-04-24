import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showChatWindow: null,
  chatName:'Loading',
};

const chatWindowSlice = createSlice({
  name: "chatWindow",
  initialState,
  reducers: {
    setShowChatWindow: (state, action) => {
      state.showChatWindow = action.payload;
    },
    setChatName:(state,action)=>{
      state.chatName = action.payload;
    },
  },
});

export const { setShowChatWindow,setChatName } = chatWindowSlice.actions;
export default chatWindowSlice.reducer;
