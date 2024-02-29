import blocks from "@/helpers/blocks.json";
import moment from 'moment';

export default function Home() {
  return (
    <main className="flex justify-center pt-[72px] font-roboto-light">
      <div className="flex flex-col w-[800px]">
        <div className="p-6 rounded-3xl border border-white border-opacity-10 mb-10">
          <h1 className="text-white text-2xl font-medium leading-none mb-4">Assignment block explorer</h1>
          <h6 className="text-white text-opacity-60 text-sm font-medium leading-none">Check list of blocks and detailed view.</h6>
        </div>
        <input
          type="text"
          className="rounded-2xl bg-white-opacity-02 hover:bg-white-opacity-05 focus:bg-picasso-opacity-10 focus:bg-opacity-10 px-4 py-[19px] text-white text-sm placeholder-gray-50 placeholder-opacity-60 hover:placeholder-opacity-100 outline-none focus:border-solid focus:border focus:border-picasso caret-picasso mb-6"
          placeholder="Search for transactions, blocks, accounts"
        />
        <div>
          <div className="grid grid-cols-6 gap-4 px-6 py-4 text-white text-opacity-60">
            <div className="col-span-1 text-xs">Block hash</div>
            <div className="col-span-1 text-xs">Slot</div>
            <div className="col-span-1 text-xs">Timestamp</div>
            <div className="col-span-1 text-xs">Tx count</div>
            <div className="col-span-1 text-xs">Leader</div>
            <div className="col-span-1 text-xs">Reward</div>
          </div>
            {blocks.map((block, i) => (
              <div key={i} className="grid grid-cols-6 gap-4 bg-white-opacity-02 hover:bg-white-opacity-05 px-6 py-[18px] rounded-2xl mb-1 hover:cursor-pointer text-white text-opacity-60 hover:text-opacity-100">
                <div className="col-span-1 text-sm text-picasso text-opacity-100 truncate">{block.blockHash}</div>
                <div className="col-span-1 text-sm text-picasso text-opacity-100">#{block.slot}</div>
                <div className="col-span-1 text-sm">{moment.unix(block.timestamp).fromNow()}</div>
                <div className="col-span-1 text-sm">{block.txCount}</div>
                <div className="col-span-1 text-sm text-picasso text-opacity-100 truncate">{block.leader}</div>
                <div className="col-span-1 text-sm">{block.rewardSol} SOL (${block.rewardUsd})</div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
