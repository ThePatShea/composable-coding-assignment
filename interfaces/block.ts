interface Block {
  blockHash: string;
  slot: number;
  timestamp: number;
  txCount: number;
  leader: string;
  rewardSol: number;
  rewardUsd: number;
}

export default Block;
