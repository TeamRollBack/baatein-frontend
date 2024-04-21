//store.jsx:

import { configureStore } from "@reduxjs/toolkit";
import chatWindowReducer from "../features/chatWindowSlice";

export const store = configureStore({
    reducer: {
        chatWindow: chatWindowReducer
        // Add other slices and reducers as needed
    }
});
