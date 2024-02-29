import { useState } from "react";

import Image from "next/image";
import moment from "moment";

import formatAsUsd from "@/helpers/formatAsUsd";
import blocks from "@/data/blocks.json";
import Block from "@/interfaces/block";

import "@/app/globals.css";

export default function Block() {
  const [activeBlocks, setActiveBlocks] = useState<Block[]>(blocks);

  return (
    <main className="flex justify-center pt-[72px] px-2 font-roboto-light">
      <div className="flex flex-col w-[800px]">
        <div className="flex p-6 rounded-3xl border border-white border-opacity-10 mb-10">
          <div className="flex justify-center mr-6 bg-black rounded-full w-14 h-14">
            <Image
              src="/icons/solana.svg"
              alt="Solana Icon"
              width="33"
              height="33"
            />
          </div>
          <div>
            <h1 className="text-white text-2xl font-medium leading-none mb-4">
              Assignment block explorer 2
            </h1>
            <h6 className="text-white text-opacity-60 text-sm font-medium leading-none">
              Check list of blocks and detailed view.
            </h6>
          </div>
        </div>
      </div>
    </main>
  );
}
