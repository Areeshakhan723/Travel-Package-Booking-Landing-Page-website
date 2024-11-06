import DestinationImg from "../component/DestinationImg";
import { imgs } from "../constant/index";
import Buttons from "../component/Buttons";
import rightarrow from "../assets/icons/rightarrow.svg";
const Destinaton = () => {
  return (
    <section className="w-full ">
      <div className="padding">
        <h1 className="gap-3 text-4xl flex justify-center items-center md:text-3xl lg:text-4xl font-bold mb-8">
          Top <span className="text-[#265073]">Destinations</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {imgs.map((img) => (
            <DestinationImg key={img.title} {...img} />
          ))}
        </div>
        {/* Buttons */}
        <div className="flex justify-center items-center mt-4 transform transition duration-300 ease-in-out hover:scale-110">
        <Buttons label={"Book Now"} iconURL={rightarrow} className="w-[256px] h-[74px]"/>
        </div>
        
      </div>
    </section>
  );
};


export default Destinaton;
