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
      <p className="mt-1 text-white text-sm text-center leading-none">
        {subtitle}
      </p>
    </div>
  );
};

export default InfoBox;
