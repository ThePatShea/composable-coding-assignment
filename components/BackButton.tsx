import BackIcon from "@/components/SvgIcon/BackIcon";

interface BackButtonProps {
  handleBackClick: () => void;
}

const BackButton = ({ handleBackClick }: BackButtonProps) => (
  <button
    className={`back-button h-full w-[72px] mr-3 md:mr-6 flex justify-center items-center bg-white-opacity-02 py-6 rounded-3xl shadow-lg hover:bg-white-opacity-05 group`}
    onClick={handleBackClick}
  >
    <BackIcon height={25} width={24} fill="white" />
  </button>
);

export default BackButton;
