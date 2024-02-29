import copyTextToClipboard from "@/helpers/copyTextToClipboard";

import CopyIcon from "@/components/SvgIcon/CopyIcon";

interface InfoBoxProps {
  title: string;
  subtitle: string;
  colSpan: number;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, subtitle, colSpan }) => {
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
        <span>{subtitle}</span>
        <span
          className="ml-2 hover:cursor-pointer copy-icon-container"
          onClick={() => copyTextToClipboard(subtitle)}
        >
          <span className="copy-icon-transparent">
            <CopyIcon width={17} height={16} fill="white" fillOpacity={0.6} />
          </span>
          <span className="copy-icon-solid">
            <CopyIcon width={17} height={16} fill="white" fillOpacity={1} />
          </span>
        </span>
      </p>
    </div>
  );
};

export default InfoBox;
