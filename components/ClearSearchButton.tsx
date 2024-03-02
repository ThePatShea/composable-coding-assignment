import CancelIcon from "@/components/SvgIcon/CancelIcon";

interface ClearSearchButtonProps {
  searchValue: string;
  handleClearSearch: () => void;
}

const ClearSearchButton = ({
  searchValue,
  handleClearSearch,
}: ClearSearchButtonProps) => (
  <button
    className={`absolute right-4 top-5 text-xl font-light text-white text-opacity-60 hover:text-opacity-100 focus:outline-none ${
      searchValue === "" && "hidden"
    }`}
    onClick={handleClearSearch}
  >
    <CancelIcon />
  </button>
);

export default ClearSearchButton;
