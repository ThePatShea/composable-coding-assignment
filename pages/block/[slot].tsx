import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import moment from "moment";

import { selectBlock } from "@/reducers/blockSlice";

import getRelativeTime from "@/helpers/getRelativeTime";
import formatAsUsd from "@/helpers/formatAsUsd";

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
        <PageHeading
          title={`Block #${selectedBlock.slot}`}
          subtitle="Check the block details."
        />
        <div className="grid grid-cols-4 gap-3">
          <InfoBox
            title="Block"
            subtitle={`#${selectedBlock.slot}`}
            colSpan={1}
          />
          <InfoBox
            title="Timestamp"
            subtitle={getRelativeTime(selectedBlock.timestamp)}
            colSpan={1}
          />
          <InfoBox
            title="Date (UTC)"
            subtitle={moment
              .unix(selectedBlock.timestamp)
              .utc()
              .format("MMM D, YYYY HH:mm:ss")}
            colSpan={1}
          />
          <InfoBox
            title="Transactions"
            subtitle={String(selectedBlock.txCount)}
            colSpan={1}
          />
          <InfoBox
            title="Block hash"
            subtitle={selectedBlock.blockHash}
            colSpan={4}
          />
          <InfoBox title="Leader" subtitle={selectedBlock.leader} colSpan={2} />
          <InfoBox
            title="Reward"
            subtitle={`${selectedBlock.rewardSol} SOL (${formatAsUsd(
              selectedBlock.rewardUsd
            )})`}
            colSpan={2}
          />
          <InfoBox
            title="Previous Block Hash"
            subtitle={selectedBlock.prevBlockHash}
            colSpan={4}
          />
        </div>
      </div>
    </main>
  );
}
