import { hero } from "../../assets/images";
import Image from "next/image";
import arrow from "@/app/assets/icons/arrow.svg";
import location from "@/app/assets/icons/location.svg";
import calendar from "@/app/assets/icons/calendar.svg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen -mt-[100px] padding">
      <div className="flex flex-col justify-start text-start z-10">
        <Image
          src={hero}
          alt="Hero background"
          height={1024}
          className="absolute inset-0 h-full w-full z-0 object-cover"
        />
        <div className=" text-start max-sm:pt-12 pt-2 z-20 w-full">
          <p className="z-10 text-white">ADVENTURE</p>
        </div>
      </div>

      {/* content */}
      <div className="relative flex flex-col items-center justify-evenly h-full text-white z-10">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Explore The Beauty of Nature
          </h1>
          <p className="mt-2 text-3xl md:text-3xl text-center font-bold">
            DISCOVER THE NEW WORLD
          </p>
        </div>

        {/* cards */}
        <div className="relative h-auto md:h-[130px] p-4 w-full max-w-[689px] rounded-lg flex md:flex-row flex-col justify-between items-center inset-y-24 max-sm:inset-y-2">
          {/* Background Layer */}
          <div className="absolute inset-0 rounded-3xl bg-white opacity-20 text-black"></div>

          {/* content layer */}
          <div className="relative flex flex-col md:flex-row justify-between items-center z-10 gap-5 md:gap-3 w-full ">
            {/* first div */}
            <div className="p-3 flex justify-center items-center h-[100px] w-[200px] md:w-[195px] bg-white text-black rounded-3xl">
              <Image src={location} alt="icon" height={34} width={34} />
              <div className="flex justify-center items-center flex-col">
                <p>Destination</p>

                <div className="mt-2 flex justify-center items-center gap-8">
                  <p className="text-sm font-bold ml-7">Pakistan</p>
                  <Image src={arrow} alt="icon" />
                </div>
              </div>
            </div>

            {/* second div */}
            <div className="p-3 flex justify-center items-center gap-3 h-[100px] w-[200px] md:w-[195px] bg-white text-black rounded-3xl">
              <Image src={calendar} alt="icon" height={34} width={34} />
              <div className="flex justify-center items-center flex-col">
                <p>Choose date</p>

                <div className="mt-2 flex justify-between items-center gap-8">
                  <p className="text-sm font-semibold ml-5">Anydate</p>
                  <Image src={arrow} alt="icon" />
                </div>
              </div>
            </div>
            {/* button */}
            <button className="h-[40px] w-auto px-3 py-2 rounded-md bg-[#265073] text-white z-10 translate transition duration-300 ease-in-out hover:scale-110">
              View Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
