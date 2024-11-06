"use client";
import Image from "next/image";
import { banner2 } from "../../assets/images/index";
import Buttons from "@/app/component/Buttons";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Page = () => {
   const [isSmallSize, setIsSmallSize] = useState(false);

   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      packageType: "",
      arrivalDate: "",
      departureDate: "",
      pickup: "",
      specialRequest: ""
   });

   // Function to check screen size and update placeholder text
   const updateScreenSize = () => {
      setIsSmallSize(window.innerWidth < 768);
   };

   useEffect(() => {
      updateScreenSize();
      window.addEventListener("resize", updateScreenSize);
      return () => window.removeEventListener("resize", updateScreenSize);
   }, []);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Validation check for required fields
      const { fullName, email, packageType, arrivalDate } = formData;
      if (!fullName || !email || !packageType || !arrivalDate) {
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all required fields!",
         });
         return;
      }

      // Show success dialog if all fields are filled
      Swal.fire({
         position: "center",
         icon: "success",
         title: "Successfully submitted",
         showConfirmButton: true,
         timer: 2000,
      });
   };

   return (
      <section>
         <div className="relative bg-[#87CEEB] flex justify-center items-center flex-col">
            <div className="w-full">
               <Image
                  src={banner2}
                  alt="banner"
                  width={1440}
                  height={264}
                  className="w-full max-h-[400px] object-fill"
               />
            </div>
            <h1 className="z-10 flex justify-center mt-20 gap-3 text-[#265073] items-center text-2xl md:text-3xl lg:text-4xl font-bold">
               BOOK YOUR PACKAGE
            </h1>
            <p className="font-medium font-sans text-center mt-2">
               Experience Something New Every Moment
            </p>

            {/* Form */}
            <div className="flex justify-center items-center w-full mt-8 padding-b">
               <form onSubmit={handleSubmit}
                className="w-[884px] h-[952px] bg-[#EFEAD3] rounded-2xl padding font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                        <label className="block font-medium">Full Name</label>
                        <input
                           name="fullName"
                           type="text"
                           placeholder={isSmallSize ? "Name" : "Enter your full name"}
                           className="w-full p-3 border rounded-lg mt-2"
                           onChange={handleChange}
                           required
                        />
                     </div>
                     <div>
                        <label className="block font-medium">Email</label>
                        <input
                           name="email"
                           type="text"
                           placeholder={isSmallSize ? "Email" : "example@gmail.com"}
                           className="w-full p-3 border rounded-lg mt-2"
                           onChange={handleChange}
                           required
                        />
                     </div>

                     {/* Package Type */}
                     <div>
                        <label className="block font-medium">Package Type</label>
                        <select
                           name="packageType"
                           className="w-full p-3 border rounded-lg mt-2"
                           onChange={handleChange}
                           required
                        >
                           <option value="">{isSmallSize ? "Package" : "Select your package"}</option>
                           <option>Tourist - Exclusive - 1 Week</option>
                           <option>Adventure - 2 Weeks</option>
                           <option>Relaxation - 1 Week</option>
                        </select>
                     </div>

                     {/* Arrival Date */}
                     <div>
                        <label className="block font-medium">Arrival Date & Time</label>
                        <input
                           type="datetime-local"
                           className="w-full p-3 border rounded-lg mt-2"
                           name="arrivalDate"
                           onChange={handleChange}
                           required
                        />
                     </div>

                     {/* Departure Date */}
                     <div>
                        <label className="block font-medium">Departure Date</label>
                        <div className="grid grid-cols-3 gap-2">
                           <select className="rounded-lg p-3 border m-2">
                              <option>{isSmallSize ? "M" : "Month"}</option>
                              <option>January</option>
                              <option>February</option>
                              <option>March</option>
                           </select>
                           <select className="p-3 border rounded-lg m-2">
                              <option>{isSmallSize ? "D" : "Day"}</option>
                              <option>Monday</option>
                              <option>Tuesday</option>
                              <option>Wednesday</option>
                           </select>
                           <select className="p-3 border rounded-lg m-2">
                              <option>{isSmallSize ? "Y" : "Year"}</option>
                              <option>2024</option>
                              <option>2025</option>
                           </select>
                        </div>
                     </div>
                  </div>

                  {/* Free Pickup */}
                  <div className="mt-8">
                     <label className="block font-medium">Free Pickup?</label>
                     <div className="flex items-center space-x-16">
                        <label>
                           <input
                              type="radio"
                              name="pickup"
                              value="Yes"
                              className="mr-2 mt-3"
                              onChange={handleChange}
                           />
                           Yes Please - Pick me up on arrival
                        </label>
                        <label>
                           <input
                              type="radio"
                              name="pickup"
                              value="No"
                              className="mr-2 mt-3"
                              onChange={handleChange}
                           />
                           No Thanks - I’ll make my own way there
                        </label>
                     </div>
                  </div>

                  {/* Special Request */}
                  <div className="mt-10">
                     <label className="block font-medium">Special Request</label>
                     <textarea
                        name="specialRequest"
                        placeholder="Please describe your special request here"
                        className="w-full p-4 h-[200px] border rounded-lg mt-2"
                        onChange={handleChange}
                     />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center items-center m-5">
                     <Buttons label="Book"  />
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Page;
