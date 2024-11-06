import Image, { StaticImageData } from "next/image";
import heart from "../assets/icons/heart.svg";
import star from "../assets/icons/star.svg";
import clock from "../assets/icons/clock.svg";
import check from "../assets/icons/check.svg";
const DestinationImg = ({
  imgURL,
  title,
  description,
  price,
  days,
  locationName,
}: {
  imgURL: string | StaticImageData;
  title: string;
  description: string;
  price: string;
  days: string;
  locationName: string;
}) => {
  return (
    <>
      <div className="p-4 h-auto flex justify-center items-start flex-col bg-white m-2 rounded-xl hover:scale-110 transform transition duration-300 ease-in-out">
        {/* Image Section */}
        <div className="w-full h-[150px] sm:h-[175px] md:h-[200px] overflow-hidden rounded-md ">
          <Image
            src={imgURL}
            alt="destination image"
            className="object-cover w-full h-full rounded-md"
            height={188}
            width={360}
          />
        </div>
        {/* Title */}
        <div className="flex justify-start mt-2">
          <h4 className="font-semibold text-start md:text-lg">{title}</h4>
        </div>

        {/*description and Favorite Icon */}
        <div className="pt-1 flex justify-center gap-8 items-center flex-row">
          <p className="text-gray-500 font-medium pt-1">{description}</p>

          <div className="flex justify-end flex-col items-end">
            <div className="bg-[#EFEAD3] h-[40px] w-[40px] rounded-full flex  justify-center items-center">
              <Image src={heart} alt="icon" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Price and Rating */}
        <div className="flex justify-between items-center mt-3 w-full p-2">
          <div className="flex justify-start flex-col">
            <p className="text-sm text-[#000000] opacity-60">From</p>
            <p className="text-sm font-bold text-gray-900">${price}</p>
            <p className="text-sm text-[#000000] opacity-60">*Price varies</p>
          </div>
          <div className="flex justify-end flex-col pt-7 ">
            <div className="flex items-center">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <Image
                    key={i}
                    src={star}
                    alt="star icon"
                    width={14}
                    height={14}
                  />
                ))}
            </div>
            <p className="pt-1 font-medium text-sm text-[#000000] opacity-60 mt-1 ">
              4.8 (11k)
            </p>
          </div>
        </div>
        {/* Details Row */}
        <div className="flex justify-start items-start  flex-col mt-4 space-y-1 text-gray-600 text-sm">
          <div className="flex">
            <Image src={clock} alt="clock icon" width={15} height={15} />
            <span className="text-sm text-[#000000] opacity-60 ml-1">
              {days}
            </span>
          </div>
          <div className="flex gap-5 justify-start items-start ">
            {/* check icon and location */}
            <div className="flex">
              <Image src={check} alt="check icon" width={15} height={15} />
              <span className="text-sm text-[#000000] opacity-60 ml-1">
                Free Cancellation
              </span>
            </div>
            {/* location */}
            <div className="flex">
              <Image src={check} alt="check icon" width={15} height={15} />
              <span className="text-sm text-[#000000] opacity-60 ml-1">
                {locationName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationImg;
