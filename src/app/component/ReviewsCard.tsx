import Image, { StaticImageData } from "next/image";
import Buttons from "./Buttons";
const ReviewsCard = ({
  banner,
  imgURL,
  role,
  name,
  description,
}: {
  banner: string | StaticImageData;
  imgURL: string | StaticImageData;
  role: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="relative mt-10 w-full max-w-[294px]  rounded-lg shadow-lg bg-white flex flex-col ">
        <Image
          src={banner}
          alt="clients banner"
          width={294}
          height={91}
          className="object-cover h-[91px] rounded-t-lg w-full"
        />
        <div className="ml-2 -mt-[10%]">
          <Image
            src={imgURL}
            alt={name}
            height={60}
            width={60}
            className="w-[60px] h-[60px] rounded-full object-cover "
          />
        </div>
        <div className="p-4">
          <div className="flex flex-col justify-start items-start mb-2">
            <h3 className="text-lg font-semibold  text-gray-900">{name}</h3>
            <h4 className="text-xs text-gray-500 mt-1">{role}</h4>
          </div>
          <p className="text-sm font-sans text-start text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex justify-center items-center p-4 translate transition duration-300 ease-in-out hover:scale-110">
          <Buttons label="Message" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
