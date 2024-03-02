import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import moment from "moment";

import ClearSearchButton from "@/components/ClearSearchButton";
import SolanaIcon from "@/components/SvgIcon/SolanaIcon";
import SearchIcon from "@/components/SvgIcon/SearchIcon";
import PageHeading from "@/components/PageHeading";

import truncateString from "@/helpers/truncateString";
import roundDecimal from "@/helpers/roundDecimal";
import formatAsUsd from "@/helpers/formatAsUsd";

import type { AppDispatch } from "@/data/store";
import { RootState } from "@/data/store";

import { selectBlock } from "@/reducers/blockSlice";
import Block from "@/interfaces/block";

export default function Home() {
  const allBlocks: Block[] = useSelector(
    (state: RootState) => state.block.allBlocks
  );

  const [activeBlocks, setActiveBlocks] = useState<Block[]>(allBlocks);
  const [searchValue, setSearchValue] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(selectBlock(null));
  }, [dispatch]);

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

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchIconClick = () => {
    searchInputRef.current?.focus();
  };

  const handleRowClick = (block: Block) => {
    dispatch(selectBlock(block));
    router.push(`/block/${block.slot}`);
  };

  return (
    <main className="flex justify-center pt-3 md:pt-[72px] px-2 pb-3">
      <div className="flex flex-col w-[800px] min-w-[350px]">
        <div className="mb-3 md:mb-10">
          <PageHeading
            title={"Assignment block explorer"}
            subtitle="Check list of blocks and detailed view."
          />
        </div>
        <div className="relative mb-2 md:mb-8 hover:cursor-pointer">
          <div
            className="absolute left-4 top-[21px]"
            onClick={handleSearchIconClick}
          >
            <SearchIcon height={16} width={16} fill={"white"} />
          </div>
          <input
            type="text"
            ref={searchInputRef}
            className="w-full rounded-2xl bg-white-opacity-02 hover:bg-white-opacity-05 focus:bg-picasso-opacity-06 focus:bg-opacity-10 px-11 py-[18px] text-white text-sm placeholder-gray-50 placeholder-opacity-60 hover:placeholder-opacity-100 outline-none focus:border-solid border border-deep-catch focus:border-picasso-opacity-70 caret-picasso"
            placeholder="Search for transactions, blocks, accounts"
            value={searchValue}
            onChange={handleSearch}
          />
          <ClearSearchButton
            searchValue={searchValue}
            handleClearSearch={handleClearSearch}
          />
        </div>
        <div>
          <div className="grid grid-cols-3 md:grid-cols-11 px-6 py-[10px] text-white text-opacity-60">
            <div className="col-span1 md:col-span-2 text-xs">Block hash</div>
            <div className="col-span1 md:col-span-2 text-xs">Slot</div>
            <div className="col-span1 md:col-span-2 text-xs">Timestamp</div>
            <div className="hidden md:flex md:col-span-1 text-xs">Tx count</div>
            <div className="hidden md:flex md:col-span-2 text-xs">Leader</div>
            <div className="hidden md:flex md:col-span-2 text-xs">Reward</div>
          </div>
          {activeBlocks.map((block) => (
            <div
              key={block.slot}
              className="grid grid-cols-3 md:grid-cols-11 bg-white-opacity-02 hover:bg-white-opacity-05 px-6 py-[18px] rounded-2xl mb-1 text-white text-opacity-60 hover:text-opacity-100 hover:cursor-pointer"
              onClick={() => handleRowClick(block)}
            >
              <div className="col-span1 md:col-span-2 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50">
                {truncateString(block.blockHash)}
              </div>
              <div className="col-span1 md:col-span-2 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50">
                #{block.slot}
              </div>
              <div className="col-span1 md:col-span-2 text-sm">
                {moment(block.timestamp).fromNow()}
              </div>
              <div className="hidden md:flex md:col-span-1 text-sm">
                {block.txCount}
              </div>
              <div className="hidden md:flex md:col-span-2 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50">
                {truncateString(block.leader)}
              </div>
              <div className="hidden md:flex md:col-span-2 text-sm relative">
                <div className="absolute flex w-[145px]">
                  <div className="flex justify-center items-center mr-2 bg-black rounded-full w-4 h-4 relative top-[1px]">
                    <SolanaIcon height={9} width={9} />
                  </div>
                  <div>
                    {roundDecimal(block.rewardSol, 3)} SOL (
                    {formatAsUsd(block.rewardUsd)})
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
