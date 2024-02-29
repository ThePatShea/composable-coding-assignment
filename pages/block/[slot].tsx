import { useSelector } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import moment from "moment";

import PageHeading from "@/components/PageHeading";
import formatAsUsd from "@/helpers/formatAsUsd";

import BlocksState from "@/interfaces/blocksState";
import Block from "@/interfaces/block";

import "@/app/globals.css";

export default function Block() {
  const selectedBlock = useSelector(
    (state: BlocksState) => state.selectedBlock
  );

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
          title={`Block #${selectedBlock?.slot}`}
          subtitle="Check the block details."
        />
      </div>
    </main>
  );
}
