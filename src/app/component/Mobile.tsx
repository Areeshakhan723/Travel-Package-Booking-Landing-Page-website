import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {AlignRight} from "lucide-react";
import Link from "next/link";


const Mobile = () => {
  return (
    <div className="hidden max-lg:block">
      <Sheet>
        <SheetTrigger>
          <AlignRight />
        </SheetTrigger>
        <SheetContent>
          <nav>
            <ul className="flex justify-center items-center flex-col gap-7 mt-10">
              <li className="hover:underline hover:text-red-600">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:underline hover:text-red-600">
                <Link href={"../sections/AboutUs"}>About Us</Link>
              </li>
              <li className="hover:underline hover:text-red-600">
                <Link href={"../sections/Destinations"}>Destinations</Link>
              </li>
              <li className="hover:underline hover:text-red-600">
                <Link href={"../sections/ContectUs"}>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobile;
