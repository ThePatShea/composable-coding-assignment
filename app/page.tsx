import formatAsUsd from "@/helpers/formatAsUsd";
import blocks from "@/helpers/blocks.json";
import Image from "next/image";
import moment from "moment";

export default function Home() {
  return (
    <main className="flex justify-center pt-[72px] px-2 font-roboto-light">
      <div className="flex flex-col w-[800px]">
        <div className="flex p-6 rounded-3xl border border-white border-opacity-10 mb-10">
          <div className="flex justify-center mr-6 bg-black rounded-full w-14 h-14">
            <Image src="/icons/solana.svg" alt="Solana Icon" width="33" height="33"/>
          </div>
          <div>
            <h1 className="text-white text-2xl font-medium leading-none mb-4">Assignment block explorer</h1>
            <h6 className="text-white text-opacity-60 text-sm font-medium leading-none">Check list of blocks and detailed view.</h6>
          </div>
        </div>
        <input
          type="text"
          className="rounded-2xl bg-white-opacity-02 hover:bg-white-opacity-05 focus:bg-picasso-opacity-06 focus:bg-opacity-10 px-4 py-[19px] text-white text-sm placeholder-gray-50 placeholder-opacity-60 hover:placeholder-opacity-100 outline-none focus:border-solid focus:border focus:border-picasso caret-picasso mb-6"
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
            {blocks.map((block, i) => (
              <div key={i} className="grid grid-cols-6 gap-2 bg-white-opacity-02 hover:bg-white-opacity-05 px-6 py-[18px] rounded-2xl mb-1 text-white text-opacity-60 hover:text-opacity-100 hover:cursor-pointer">
                <div className="col-span-1 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50 truncate">{block.blockHash}</div>
                <div className="col-span-1 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50">#{block.slot}</div>
                <div className="col-span-1 text-sm">{moment.unix(block.timestamp).fromNow()}</div>
                <div className="col-span-1 text-sm">{block.txCount}</div>
                <div className="col-span-1 text-sm text-picasso text-opacity-100 hover:text-picasso-opacity-50 truncate">{block.leader}</div>
                <div className="col-span-1 text-sm flex">
                  <div className="flex justify-center mr-2 bg-black rounded-full w-4 h-4">
                    <Image src="/icons/solana.svg" alt="Solana Icon" width="9" height="9"/>
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
