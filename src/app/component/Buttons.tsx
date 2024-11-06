import Image from "next/image";

const Buttons = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  borderRounded,
  fontsize,
}: {
  label: string;
  iconURL?: string; // Optional prop for icon URL
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean; // Optional prop for full width button
  borderRounded?: boolean; // Optional prop for border-radius button
  fontsize?: string;
}) => {
 
    return (
      <>
        <button
          // onClick={handleEvent}
          className={`flex justify-center items-center px-6 py-2  font-Poppins
            ${backgroundColor || "bg-[#265073]"} 
            ${borderColor || "border-transparent"} 
            ${textColor || "text-white"} 
            ${fullWidth ? "w-full" : ""}
            ${borderRounded ? "rounded-full" : "rounded-xl"}
            ${fontsize ? fontsize : "text-lg"}  `} // Only one rounding class applied
        >
          {label}

          {iconURL && (
            <Image
              src={iconURL}
              alt="icon"
              width={25}
              height={25}
              className="ml-2 hover:animate-bounce"
            />
          )}
        </button>
      </>
    );
  };


export default Buttons;
