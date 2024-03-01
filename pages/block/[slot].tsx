import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import moment from "moment";

import { selectBlock } from "@/reducers/blockSlice";

import getRelativeTime from "@/helpers/getRelativeTime";
import truncateString from "@/helpers/truncateString";
import formatAsUsd from "@/helpers/formatAsUsd";

import BackIcon from "@/components/SvgIcon/BackIcon";
import PageHeading from "@/components/PageHeading";
import InfoBox from "@/components/InfoBox";

import BlocksState from "@/interfaces/blocksState";
import Block from "@/interfaces/block";

import "@/app/globals.css";

export default function Block() {
  const allBlocks = useSelector((state: BlocksState) => state.allBlocks);
  const selectedBlock = useSelector(
    (state: BlocksState) => state.selectedBlock
  );

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (selectedBlock) return;

    const slot = router.query.slot as string;
    const block = allBlocks.find((block) => block.slot === +slot) || null;

    dispatch(selectBlock(block));
  }, [router, allBlocks, dispatch, selectedBlock]);

  const handleBackClick = () => {
    dispatch(selectBlock(null));
    router.push(`/`);
  };

  if (!selectedBlock) {
    return (
      <main className="flex justify-center pt-[72px] px-2 font-roboto-light">
        <div className="flex flex-col w-[810px]">
          <PageHeading
            title="Block not found"
            subtitle="Please select a block from the list."
          />
        </div>
      </main>
    );
  }

  return (
    <main className="flex justify-center pt-[72px] px-2 font-roboto-light">
      <div className="flex flex-col w-[810px]">
        <div className="flex">
          <button
            className={`w-[72px] mr-6 flex justify-center items-center bg-white-opacity-02 py-6 rounded-3xl shadow-lg mb-10 hover:cursor-pointer hover:bg-white-opacity-05`}
            onClick={handleBackClick}
          >
            <BackIcon height={25} width={24} fill="white" fillOpacity={0.6} />
          </button>
          <div className="flex-grow">
            <PageHeading
              title={`Block #${selectedBlock.slot}`}
              subtitle="Check the block details."
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <InfoBox
            title="Block"
            subtitle={`#${selectedBlock.slot}`}
            colSpan={1}
            copy={true}
          >
            {`#${selectedBlock.slot}`}
          </InfoBox>
          <InfoBox title="Timestamp" colSpan={1} copy={false}>
            {getRelativeTime(selectedBlock.timestamp)}
          </InfoBox>
          <InfoBox title="Date (UTC)" colSpan={1} copy={false}>
            {moment
              .unix(selectedBlock.timestamp)
              .utc()
              .format("MMM D, YYYY HH:mm:ss")}
          </InfoBox>
          <InfoBox title="Transactions" colSpan={1} copy={false}>
            {String(selectedBlock.txCount)}
          </InfoBox>
          <InfoBox title="Block hash" colSpan={4} copy={false}>
            {selectedBlock.blockHash}
          </InfoBox>
          <InfoBox
            title="Leader"
            subtitle={selectedBlock.leader}
            colSpan={2}
            copy={true}
          >
            <span className="text-picasso">
              {truncateString(selectedBlock.leader)}
            </span>
          </InfoBox>
          <InfoBox title="Reward" colSpan={2} copy={false}>{`${
            selectedBlock.rewardSol
          } SOL (${formatAsUsd(selectedBlock.rewardUsd)})`}</InfoBox>
          <InfoBox title="Previous Block Hash" colSpan={4} copy={false}>
            {selectedBlock.prevBlockHash}
          </InfoBox>
        </div>
      </div>
    </main>
  );
}
