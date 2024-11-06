import Image, { StaticImageData } from "next/image";

const AboutCard = ({
  imgURL,
  name,
  role,
  description,
}: {
  imgURL: string | StaticImageData;
  name: string;
  role: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative mt-10 w-full max-w-[350px] rounded-lg shadow-lg bg-white flex flex-col ">
            <Image
              src={imgURL}
              alt="Tour guides"
              width={300}
              height={280}
              className="object-cover h-[280px] rounded-t-lg w-full"
            />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm text-center r font-semibold  text-gray-900">
                {name}
              </h3>
              <h4 className="text-sm text-gray-500">{role}</h4>
            </div>
            <p className="text-sm font-sans text-center  text-gray-700">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
