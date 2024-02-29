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

  const [activeBlocks, setActiveBlocks] = useState<Block[]>(allBlocks);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    const lowercaseValue = value.toLowerCase();

    const filteredBlocks = allBlocks.filter((block) => {
      return (
        block.blockHash.toLowerCase().includes(lowercaseValue) ||
        block.leader.toLowerCase().includes(lowercaseValue) ||
        block.slot.toString().includes(lowercaseValue)
      );
    });

    setActiveBlocks(filteredBlocks);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setActiveBlocks(allBlocks);
  };

  const ClearSearchButton = () => (
    <button
      className={`absolute right-4 top-5 text-xl font-light text-white text-opacity-60 hover:text-opacity-100 focus:outline-none ${
        searchValue === "" && "hidden"
      }`}
      onClick={handleClearSearch}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[18px] h-[18px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );

  return (
    <main className="flex justify-center pt-[72px] px-2 font-roboto-light">
      <div className="flex flex-col w-[800px]">
        <PageHeading
          title={"Assignment block explorer"}
          subtitle="Check list of blocks and detailed view."
        />
        <div className="relative">
          <div className="absolute left-4 top-[22px]">
            <Image
              src="/icons/search.svg"
              alt="Search Icon"
              width="16"
              height="16"
            />
          </div>
          <input
            type="text"
            className="w-full rounded-2xl bg-white-opacity-02 hover:bg-white-opacity-05 focus:bg-picasso-opacity-06 focus:bg-opacity-10 px-10 pr-4 py-[19px] text-white text-sm placeholder-gray-50 placeholder-opacity-60 hover:placeholder-opacity-100 outline-none focus:border-solid border border-deep-catch focus:border-picasso caret-picasso mb-6"
            placeholder="Search for transactions, blocks, accounts"
            value={searchValue}
            onChange={handleSearch}
          />
          <ClearSearchButton />
        </div>

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
