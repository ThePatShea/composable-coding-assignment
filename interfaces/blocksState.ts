import Block from "@/interfaces/block";

interface BlocksState {
  allBlocks: Block[];
  selectedBlock: Block | null;
}

export default BlocksState;
