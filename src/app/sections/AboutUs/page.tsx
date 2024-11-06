import Image from "next/image";
import { videotour } from "../../assets/images/index";
import { tourguide } from "@/app/constant";
import { AboutCard } from "@/app/component";
import { reviews } from "@/app/constant";
import ReviewsCard from "@/app/component/ReviewsCard";
const page = () => {
  return (
    <div className="relative bg-[#87CEEB]">
      <div className="w-full">
        <Image
          src={videotour}
          alt="Banner"
          className="w-full max-h-[500px] object-fill"
        />
      </div>
      <h1 className="z-10 flex justify-center mt-20 gap-3 text-white items-center text-4xl md:text-3xl lg:text-4xl font-bold">
        Tour <span className="text-[#265073]">Guides </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {tourguide.map((details) => (
          <AboutCard key={details.name} {...details} />
        ))}
      </div>
      {/* Reviews */}
      <h1 className="z-10 flex text-white gap-3 justify-center mt-20 items-center text-4xl md:text-3xl lg:text-4xl font-bold">
        Clients <span className="text-[#265073]"> Reviews </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 padding-x">
        {reviews.map((details) => (
          <ReviewsCard key={details.name} {...details} />
        ))}
      </div>
    </div>
  );
};

export default page;
