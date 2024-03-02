import { ReactNode, useState } from "react";

import copyTextToClipboard from "@/helpers/copyTextToClipboard";
import CopyIcon from "@/components/SvgIcon/CopyIcon";
import Toast from "@/components/Toast";

interface InfoBoxProps {
  title: string;
  subtitle?: string;
  colSpan: number;
  copy?: boolean;
  children: ReactNode;
}

const colSpanClasses: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
};

const InfoBox = ({
  title,
  subtitle,
  colSpan,
  copy = false,
  children,
}: InfoBoxProps) => {
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastKey, setToastKey] = useState<number>(0);

  const copySubtitle = (subtitle: string) => {
    copyTextToClipboard(subtitle);
    setToastMessage("Copied to clipboard");
    setToastKey((prevKey) => prevKey + 1);
  };

  const colSpanClass = colSpanClasses[colSpan] || "md:col-span-4";

  return (
    <div
      className={`col-span-4 ${colSpanClass} bg-white-opacity-02 px-2 py-[22px] rounded-3xl shadow-lg`}
    >
      <h6 className="text-white text-center text-opacity-60 text-xs leading-none mb-[14px]">
        {title}
      </h6>
      <div className="mt-1 text-white text-sm text-center leading-none flex justify-center">
        <span className="truncate">{children}</span>
        <span
          className={`ml-[6px] hover:cursor-pointer copy-icon-container relative -top-[2px] ${
            copy === false && "hidden"
          }`}
          onClick={() => subtitle && copySubtitle(subtitle)}
        >
          <CopyIcon width={17} height={16} fill="white" />
        </span>
      </div>
      {toastMessage && <Toast message={toastMessage} toastKey={toastKey} />}
    </div>
  );
};

export default InfoBox;
