import { configureStore } from "@reduxjs/toolkit";

import blockReducer from "@/reducers/blockSlice";

const store = configureStore({
  reducer: blockReducer,
});

export default store;
