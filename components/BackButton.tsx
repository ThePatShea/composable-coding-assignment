import React from "react";

import BackIcon from "@/components/SvgIcon/BackIcon";

interface BackButtonProps {
  handleBackClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ handleBackClick }) => (
  <button
    className={`back-button h-full w-[72px] mr-3 md:mr-6 flex justify-center items-center bg-white-opacity-02 py-6 rounded-3xl shadow-lg hover:cursor-pointer hover:bg-white-opacity-05 group`}
    onClick={handleBackClick}
  >
    <span className="block group-hover:hidden">
      <BackIcon height={25} width={24} fill="white" fillOpacity={0.6} />
    </span>
    <span className="hidden group-hover:block">
      <BackIcon height={25} width={24} fill="white" fillOpacity={1} />
    </span>
  </button>
);

export default BackButton;
