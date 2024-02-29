import Image from "next/image";

interface InfoBoxProps {
  title: string;
  subtitle: string;
  colSpan: number;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, subtitle, colSpan }) => {
  return (
    <div
      className={`col-span-${String(
        colSpan
      )} bg-white-opacity-02 px-1 py-6 rounded-lg shadow-lg`}
    >
      <h6 className="text-white text-center text-opacity-60 text-xs leading-none mb-3">
        {title}
      </h6>
      <p className="mt-1 text-white text-sm text-center leading-none">
        {subtitle}
      </p>
    </div>
  );
};

export default InfoBox;
