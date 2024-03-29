import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import moment from "moment";

import getRelativeTime from "@/helpers/getRelativeTime";
import truncateString from "@/helpers/truncateString";
import roundDecimal from "@/helpers/roundDecimal";
import formatAsUsd from "@/helpers/formatAsUsd";

import SolanaIcon from "@/components/SvgIcon/SolanaIcon";
import PageHeading from "@/components/PageHeading";
import BackButton from "@/components/BackButton";
import InfoBox from "@/components/InfoBox";

import type { AppDispatch } from "@/data/store";
import { RootState } from "@/data/store";

import { selectBlock } from "@/reducers/blockSlice";
import Block from "@/interfaces/block";

export default function Block() {
  const allBlocks: Block[] = useSelector(
    (state: RootState) => state.block.allBlocks
  );
  const selectedBlock: Block | null = useSelector(
    (state: RootState) => state.block.selectedBlock
  );

  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (selectedBlock) return;

    const slot: string = router.query.slot as string;
    const block: Block | null =
      allBlocks.find((block) => block.slot === +slot) || null;

    dispatch(selectBlock(block));
  }, [router, allBlocks, dispatch, selectedBlock]);

  const handleBackClick = () => {
    dispatch(selectBlock(null));
    router.push(`/`);
  };

  if (!selectedBlock) {
    return (
      <main className="flex justify-center pt-3 md:pt-[72px] px-2">
        <div className="flex flex-col w-[800px] min-w-[350px]">
          <div className="flex">
            <BackButton handleBackClick={handleBackClick} />
            <div className="flex-grow">
              <PageHeading
                title="Block not found"
                subtitle="Select a block from the list."
              />
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex justify-center pt-3 md:pt-[72px] px-2 pb-3">
      <div className="flex flex-col w-[800px] min-w-[350px]">
        <div className="flex mb-3 md:mb-10">
          <BackButton handleBackClick={handleBackClick} />
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
          <InfoBox title="Timestamp" colSpan={1}>
            {getRelativeTime(selectedBlock.timestamp)}
          </InfoBox>
          <InfoBox title="Date (UTC)" colSpan={1}>
            {moment(selectedBlock.timestamp)
              .utc()
              .format("MMM D, YYYY HH:mm:ss")}
          </InfoBox>
          <InfoBox title="Transactions" colSpan={1}>
            {String(selectedBlock.txCount)}
          </InfoBox>
          <InfoBox title="Block Hash" colSpan={4}>
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
          <InfoBox title="Reward" colSpan={2}>
            <div className="flex">
              <div className="flex justify-center items-center bg-black rounded-full w-4 h-4 relative -top-[1px]">
                <SolanaIcon height={9} width={9} />
              </div>
              <div className="ml-2">
                <span className="mr-2">{`${roundDecimal(
                  selectedBlock.rewardSol,
                  9
                )} SOL`}</span>
                <span className="text-white text-opacity-60">
                  {`(${formatAsUsd(selectedBlock.rewardUsd)} @ ${formatAsUsd(
                    selectedBlock.solanaPriceUsd
                  )})`}
                </span>
              </div>
            </div>
          </InfoBox>
          <InfoBox title="Previous Block Hash" colSpan={4}>
            {selectedBlock.prevBlockHash}
          </InfoBox>
        </div>
      </div>
    </main>
  );
}
