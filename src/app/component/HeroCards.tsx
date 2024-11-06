import Image, { StaticImageData } from "next/image";
const HeroCards = ({
  imgcard,
  title,
  description,
}: {
  imgcard: string | StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center pt-7 items-center flex-col h-[283px] w-[266px] bg-white text-black text-center m-7 rounded-xl">
        <Image src={imgcard} alt="icons" width={34} height={34} className="" />
        <div className="p-5">
        <h5 className="font-semibold pt-3">{title}</h5>
        <p className="text-sm pt-2">{description}</p>
        </div>
        
      </div>
    </>
  );
};

export default HeroCards;
