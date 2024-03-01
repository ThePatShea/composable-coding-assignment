import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";

import SolanaIcon from "@/components/SvgIcon/SolanaIcon";
import SearchIcon from "@/components/SvgIcon/SearchIcon";
import PageHeading from "@/components/PageHeading";

import truncateString from "@/helpers/truncateString";
import formatAsUsd from "@/helpers/formatAsUsd";

import BlocksState from "@/interfaces/blocksState";
import Block from "@/interfaces/block";

import { selectBlock } from "@/reducers/blockSlice";

export default function Home() {
  const allBlocks = useSelector((state: BlocksState) => state.allBlocks);

  const [activeBlocks, setActiveBlocks] = useState<Block[]>(allBlocks);
  const [searchValue, setSearchValue] = useState<string>("");

  const dispatch = useDispatch();
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

  const handleSearchIconClick = () => {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.focus();
    }
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
            id="searchInput"
            className="w-full rounded-2xl bg-white-opacity-02 hover:bg-white-opacity-05 focus:bg-picasso-opacity-06 focus:bg-opacity-10 px-11 py-[18px] text-white text-sm placeholder-gray-50 placeholder-opacity-60 group-hover:placeholder-opacity-100 outline-none focus:border-solid border border-deep-catch focus:border-picasso-opacity-70 caret-picasso"
            placeholder="Search for transactions, blocks, accounts"
            value={searchValue}
            onChange={handleSearch}
          />
          <ClearSearchButton />
        </div>
        <div>
          <div className="grid grid-cols-3 md:grid-cols-11 gap-1 px-6 py-[10px] text-white text-opacity-60">
            <div className="col-span1 md:col-span-2 text-xs">Block hash</div>
            <div className="col-span1 md:col-span-2 text-xs">Slot</div>
            <div className="col-span1 md:col-span-2 text-xs">Timestamp</div>
            <div className="hidden md:flex md:col-span-1 text-xs">Tx count</div>
            <div className="hidden md:flex md:col-span-2 text-xs">Leader</div>
            <div className="hidden md:flex md:col-span-2 text-xs">Reward</div>
          </div>
          {activeBlocks.map((block, i) => (
            <div
              key={i}
              className="grid grid-cols-3 md:grid-cols-11 gap-1 bg-white-opacity-02 hover:bg-white-opacity-05 px-6 py-[18px] rounded-2xl mb-1 text-white text-opacity-60 hover:text-opacity-100 hover:cursor-pointer"
              onClick={() => handleRowClick(block)}
            >
              <div className="col-span1 md:col-span-2 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50">
                {truncateString(block.blockHash)}
              </div>
              <div className="col-span1 md:col-span-2 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50">
                #{block.slot}
              </div>
              <div className="col-span1 md:col-span-2 text-sm">
                {moment.unix(block.timestamp).fromNow()}
              </div>
              <div className="hidden md:flex md:col-span-1 text-sm">
                {block.txCount}
              </div>
              <div className="hidden md:flex md:col-span-2 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50">
                {truncateString(block.leader)}
              </div>
              <div className="hidden md:flex md:col-span-2 text-sm">
                <div className="flex justify-center items-center mr-2 bg-black rounded-full w-4 h-4 relative top-[1px]">
                  <SolanaIcon height={9} width={9} />
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
