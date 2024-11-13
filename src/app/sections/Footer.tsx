import Image from "next/image";
import logo from "../assets/images/logo.png";
import Link from "next/link";
import { footerLinks } from "../constant/index";
import { socialMedia } from "../constant/index";
import copyrightSign from "../assets/icons/copyright-sign.svg";

const Footer = () => {
  return (
    <footer className="max-container padding">
      <div className=" padding-t flex items-start max-lg:flex-col flex-wrap gap-20 justify-center">
        {/* logo */}
        <div className="flex items-start flex-col">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={70} height={70} />
          </Link>
          <p className=" sm:max-w-sm leading-7 text-base">ADVENTURE</p>
          <div className="max-sm:pt-3 mt-2 w-full max-w-[357px] h-auto font-sans">
            <span>
              Discover new destinations and create unforgettable memories. From scenic landscapes to vibrant cultures, we’re here to guide you on every step of your journey. Let adventure lead the way!
            </span>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-1 justify-end max-sm:justify-center items-center lg:gap-20 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[#265073] font-semibold text-[16px] pb-4 ">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.links.map((links) => (
                  <li
                    className="mt-1 font-medium text-base text-white-400 hover:text-gray-400"
                    key={links.name}
                  >
                    <a href={links.link}>{links.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* socials icons */}

        <div className="flex items-center flex-col gap-5 mt-8">
          <h4 className="text-[#265073] font-semibold text-[16px] pb-4">
            Follow Us
          </h4>
          <div className="flex justify-center items-center gap-3 p-2">
            {socialMedia.map((icons) => (
              <div
                className="flex justify-center items-center rounded-full w-12 h-12 bg-white"
                key={icons.alt}
              >
                <a
                  href={icons.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icons.alt}
                  className="flex justify-center items-center rounded-full w-12 h-12 bg-white transition duration-300 translate hover:scale-125"
                >
                  <Image src={icons.src} alt={icons.alt} width={24} height={24} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* copyright sign */}
      <div className="flex justify-center mt-20 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-center items-center cursor-pointer gap-2 ">
          <Image
            src={copyrightSign}
            alt="copyright sign"
            height={20}
            width={20}
            className="rounded-full m-0"
          />
          <p className="font-medium text-[#0A142F] ">
            Copyright 2024 - Adventure • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
