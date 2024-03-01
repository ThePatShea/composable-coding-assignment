import React, { ReactNode, useState } from "react";

import copyTextToClipboard from "@/helpers/copyTextToClipboard";
import CopyIcon from "@/components/SvgIcon/CopyIcon";
import Toast from "@/components/Toast";

interface InfoBoxProps {
  title: string;
  subtitle?: string;
  colSpan: number;
  copy: boolean;
  children: ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  subtitle,
  colSpan,
  copy = false,
  children,
}) => {
  const [toastMessage, setToastMessage] = useState("");

  const showToast = () => {
    setToastMessage("Copied to clipboard");
  };

  return (
    <div
      className={`${
        colSpan === 1
          ? "col-span-1"
          : colSpan === 2
          ? "col-span-2"
          : colSpan === 3
          ? "col-span-3"
          : "col-span-4"
      } bg-white-opacity-02 px-1 py-6 rounded-3xl shadow-lg`}
    >
      <h6 className="text-white text-center text-opacity-60 text-xs leading-none mb-3">
        {title}
      </h6>
      <p className="mt-1 text-white text-sm text-center leading-none flex justify-center">
        <span>{children}</span>
        <span
          className={`ml-2 hover:cursor-pointer copy-icon-container ${
            copy === false && "hidden"
          }`}
          onClick={() => {
            copyTextToClipboard(subtitle ?? "");
            showToast();
          }}
        >
          <span className="copy-icon-transparent">
            <CopyIcon width={17} height={16} fill="white" fillOpacity={0.6} />
          </span>
          <span className="copy-icon-solid">
            <CopyIcon width={17} height={16} fill="white" fillOpacity={1} />
          </span>
        </span>
      </p>
      {toastMessage && <Toast message={toastMessage} duration={5000} />}
    </div>
  );
};

export default InfoBox;
