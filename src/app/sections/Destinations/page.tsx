import { Buttons, DestinationCard } from "@/app/component";
import { packages } from "@/app/constant/index";
import rightarrow from "@/app/assets/icons/rightarrow.svg";
const page = () => {
  return (
    <>
      <section className="bg-[#87CEEB]">
        <div className="padding w-full">
          <h1 className="z-10 flex justify-center items-center max-md:flex-col gap-3 font-bold text-4xl md:text-3xl lg:text-4xl text-white">
            Our <span className="text-[#265073]">Signature</span> Packages
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 padding">
            {packages.map((details) => (
              <DestinationCard key={details.name} {...details} />
            ))}
          </div>

          <div className="flex justify-center text-lg items-center p-4 translate transition duration-300 ease-in-out hover:scale-110">
            <Buttons
              label="Explore All Packages"
              iconURL={rightarrow}
              fontsize="text-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
