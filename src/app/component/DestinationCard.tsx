import Image, { StaticImageData } from "next/image";
import slocation from "../assets/icons/slocation.svg"
const DestinationCard = ({
  imgURL,
  name,
  days,
  location,
}: {
  imgURL: string | StaticImageData;
  name: string;
  days: string;
  location: string;
}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[294px] max-h-[337px] bg-white gap-4 flex p-2 justify-center items-center flex-col m-6 shadow-md rounded-xl translate transition duration-300 ease-in-out hover:scale-110">
          <Image
            src={imgURL}
            alt={name}
            width={254}
            height={208}
            className="w-full h-[208px]  overflow-hidden object-contain rounded-lg"
          />
          <div className="flex flex-col pb-2 pl-2 w-full items-start">
            <h3 className="text-lg font-sans font-semibold text-gray-900">{name}</h3>
            <p className="text-sm pt-0.5 text-gray-500">{days} days</p>
            <div className="flex justify-center items-center gap-1">
             <Image
             src={slocation}
             alt="location"
             width={18}
             height={18}
             />
             <p className="text-sm pt-0.5 text-gray-500">
              {location}
            </p>
            </div>
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;
