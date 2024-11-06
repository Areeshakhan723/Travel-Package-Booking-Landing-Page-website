import Buttons from "../../app/component/Buttons";
import Image from "next/image";
import rightarrow from "../assets/icons/rightarrow.svg";
import { banner } from "../../app/assets/images/index";
const Subscribe = () => {
  return (
    <section className="">
      <div className="w-full relative">
        <Image
          src={banner}
          alt="Subscribe banner"
          height={300}
          width={1438}
          className="absolute w-full h-[300px] z-10"
        />
        <div className="pr-1 pl-1 flex justify-center items-center flex-col relative z-10">
          {/* heading */}
          <h1 className="text-white  text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-16 ">Subscribe And Be Updated</h1>
          {/* card */}
          
          <div className="relative h-auto rounded-lg mt-16 max-w-4xl md:w-[1034px] w-full px-2">
            {/* Background Layer */}
            <div className="absolute inset-0 rounded-3xl bg-white opacity-60"></div>
            {/* content layer */}
            <div className="relative z-10 gap-5 w-full">
              {/* form */}
            <form className="flex justify-between items-center p-2 md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  placeholder="Enter your email address to latest updates"
                  className="w-full  bg-transparent text-white placeholder-white  outline-none"
                />
                <Buttons label="Subscribe" iconURL={rightarrow} backgroundColor="bg-[#FF2222]" borderRounded={true}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
// max-container

