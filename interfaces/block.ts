interface Block {
  blockHash: string;
  prevBlockHash: string;
  slot: number;
  timestamp: number;
  txCount: number;
  leader: string;
  rewardSol: number;
  rewardUsd: number;
}

export default Block;
