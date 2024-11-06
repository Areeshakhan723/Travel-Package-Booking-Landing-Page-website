"use client"

import Link from "next/link";
import Image from "next/image"
import { logo } from "../assets/images"
import Buttons from "./Buttons";
import Mobile from "./Mobile"
import { usePathname } from "next/navigation";


const Navbar = () => {
 const usepath = usePathname();
  return (
    <>
      <header className={`p-3 ${usepath === "/" ? "bg-transparent" : "bg-[#F4E1C6]"}  padding-x w-full z-20 relative`}>
        <nav className="max-container flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Logo"
              width={70}
              height={70}
            />
          </Link>

          <ul className="flex justify-center gap-7 items-center max-lg:hidden">
            <li className="hover:underline hover:text-red-600 hover:text-lg"><Link href={"/"}>Home</Link></li>
            <li className="hover:underline hover:text-red-600 hover:text-lg "><Link href={"../sections/AboutUs"}>About Us</Link></li>
            <li className="hover:underline hover:text-red-600 hover:text-lg"><Link href={"../sections/Destinations"}>Destinations</Link></li>
            <li className="hover:underline hover:text-red-600 hover:text-lg"><Link href={"../sections/ContectUs"}>Contact Us</Link></li>
          </ul>

          <div className="flex items-center gap-4 justify-center ">
            <Buttons
              label="Login"
              backgroundColor="bg-red-500"
              textColor="text-white"
              borderColor="border-red-500"
            />
            <Buttons
              label="Sign Up"
              backgroundColor="bg-white"
              textColor="text-black"
              borderColor="border-red-500"
            />
          </div>
        {/* Mobile Nav */}
        <Mobile />
        </nav>
      </header>
    </>
  )
}

export default Navbar;
// #87CEEB