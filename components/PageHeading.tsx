import SolanaIcon from "@/components/SvgIcon/SolanaIcon";

interface PageHeadingProps {
  title: string;
  subtitle: string;
}

const PageHeading = ({ title, subtitle }: PageHeadingProps) => {
  return (
    <div className="flex px-2 md:px-[23px] py-6 rounded-3xl border border-white border-opacity-10">
      <div className="flex justify-center items-center mr-2 md:mr-6 bg-black rounded-full w-14 h-14">
        <SolanaIcon height={34} width={34} />
      </div>
      <div>
        <h1 className="text-white text-xl md:text-2xl font-medium leading-none mb-2">
          {title}
        </h1>
        <h6 className="text-white text-opacity-60 text-sm font-medium leading-none">
          {subtitle}
        </h6>
      </div>
    </div>
  );
};

export default PageHeading;
