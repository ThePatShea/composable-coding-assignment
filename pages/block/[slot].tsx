import { useState } from "react";

import Image from "next/image";
import moment from "moment";

import PageHeading from "@/components/PageHeading";
import formatAsUsd from "@/helpers/formatAsUsd";
import blocks from "@/data/blocks.json";
import Block from "@/interfaces/block";

import "@/app/globals.css";

export default function Block() {
  return (
    <main className="flex justify-center pt-[72px] px-2 font-roboto-light">
      <div className="flex flex-col w-[800px]">
        <PageHeading
          title={"Block #####"}
          subtitle="Check the block details."
        />
      </div>
    </main>
  );
}
