import { configureStore } from "@reduxjs/toolkit";

import blockReducer from "@/reducers/blockSlice";

const store = configureStore({
  reducer: {
    block: blockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
