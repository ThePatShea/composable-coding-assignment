import { useSelector } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import moment from "moment";

import PageHeading from "@/components/PageHeading";
import formatAsUsd from "@/helpers/formatAsUsd";

import BlocksState from "@/interfaces/blocksState";
import Block from "@/interfaces/block";

import "@/app/globals.css";

export default function Home() {
  const allBlocks = useSelector((state: BlocksState) => state.allBlocks);

  console.log("allBlocks");
  console.log(allBlocks);

  const [activeBlocks, setActiveBlocks] = useState<Block[]>(allBlocks);

  return (
    <main className="flex justify-center pt-[72px] px-2 font-roboto-light">
      <div className="flex flex-col w-[800px]">
        <PageHeading
          title={"Assignment block explorer"}
          subtitle="Check list of blocks and detailed view."
        />
        <input
          type="text"
          className="rounded-2xl bg-white-opacity-02 hover:bg-white-opacity-05 focus:bg-picasso-opacity-06 focus:bg-opacity-10 px-4 py-[19px] text-white text-sm placeholder-gray-50 placeholder-opacity-60 hover:placeholder-opacity-100 outline-none focus:border-solid border border-deep-catch focus:border-picasso caret-picasso mb-6"
          placeholder="Search for transactions, blocks, accounts"
        />
        <div>
          <div className="grid grid-cols-6 gap-2 px-6 py-4 text-white text-opacity-60">
            <div className="col-span-1 text-xs">Block hash</div>
            <div className="col-span-1 text-xs">Slot</div>
            <div className="col-span-1 text-xs">Timestamp</div>
            <div className="col-span-1 text-xs">Tx count</div>
            <div className="col-span-1 text-xs">Leader</div>
            <div className="col-span-1 text-xs">Reward</div>
          </div>
          {activeBlocks.map((block, i) => (
            <div
              key={i}
              className="grid grid-cols-6 gap-2 bg-white-opacity-02 hover:bg-white-opacity-05 px-6 py-[18px] rounded-2xl mb-1 text-white text-opacity-60 hover:text-opacity-100 hover:cursor-pointer"
            >
              <div className="col-span-1 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50 truncate">
                {block.blockHash}
              </div>
              <div className="col-span-1 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50">
                #{block.slot}
              </div>
              <div className="col-span-1 text-sm">
                {moment.unix(block.timestamp).fromNow()}
              </div>
              <div className="col-span-1 text-sm">{block.txCount}</div>
              <div className="col-span-1 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50 truncate">
                {block.leader}
              </div>
              <div className="col-span-1 text-sm flex">
                <div className="flex justify-center mr-2 bg-black rounded-full w-4 h-4">
                  <Image
                    src="/icons/solana.svg"
                    alt="Solana Icon"
                    width="9"
                    height="9"
                  />
                </div>
                <div>
                  {block.rewardSol} SOL ({formatAsUsd(block.rewardUsd)})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
