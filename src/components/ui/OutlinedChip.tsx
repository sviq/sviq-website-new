import { fonts } from "@/config/fonts";

interface OutlinedChipProps {
  icon: string;
  text: string;
  subText: string;
}

const OutlinedChip = ({ icon, text, subText }: OutlinedChipProps) => {
  return (
    <div className="border-[3px] border-primaryGreen py-4 px-4 md:py-6 md:px-6 rounded-3xl sm:rounded-full text-primaryBlack flex flex-col sm:flex-row items-center  space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-lg">
      <img className="size-16 sm:size-[72px]" src={icon} alt={text} />
      <div className="text-center sm:text-left space-y-2">
        <p
          className={`${fonts.bricolageGrotesque} text-xl sm:text-2xl font-bold`}
        >
          {text}
        </p>
        <p className={`${fonts.inter} text-sm max-w-full`}>{subText}</p>
      </div>
    </div>
  );
};

export default OutlinedChip;
