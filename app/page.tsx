import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center pt-12 font-roboto-light">
      <div className="flex flex-col w-[800px]">
        <div className="p-6 rounded-3xl border border-white border-opacity-10 mb-10">
          <h1 className="text-white text-2xl font-medium leading-none mb-2">Assignment block explorer</h1>
          <h6 className="text-white text-opacity-60 text-sm font-medium leading-none">Check list of blocks and detailed view.</h6>
        </div>
        <input
          type="text"
          className="rounded-2xl bg-white bg-white-02 px-4 py-5 text-white text-opacity-60"
          placeholder="Search for transactions, blocks, accounts"
        />
      </div>
    </main>
  );
}
