import Image from "next/image";

interface PageHeadingProps {
  title: string;
  subtitle: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="flex p-6 rounded-3xl border border-white border-opacity-10 mb-10">
      <div className="flex justify-center mr-6 bg-black rounded-full w-14 h-14">
        <Image
          src="/icons/solana.svg"
          alt="Solana Icon"
          width="33"
          height="33"
        />
      </div>
      <div>
        <h1 className="text-white text-2xl font-medium leading-none mb-4">
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
