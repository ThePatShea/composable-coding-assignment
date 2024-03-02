import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import BlocksState from "@/interfaces/blocksState";
import Block from "@/interfaces/block";

import initialBlocks from "@/data/blocks.json";

const initialState: BlocksState = {
  allBlocks: initialBlocks as Block[],
  selectedBlock: null,
};

const blocksSlice = createSlice({
  name: "block",
  initialState,
  reducers: {
    selectBlock: (state, action: PayloadAction<Block | null>) => {
      state.selectedBlock = action.payload;
    },
  },
});

export const { selectBlock } = blocksSlice.actions;

export default blocksSlice.reducer;
