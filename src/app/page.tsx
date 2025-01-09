"use client";

import { FaInfoCircle, FaClipboardList, FaBriefcase, FaPhoneAlt } from "react-icons/fa";
import { PlaceholdersAndVanishInput } from "./components/ui/placeholders-and-vanish-input";
import Image from "next/image";

export default function Home() {
  const placeholders = [
    "I need a Logo!",
    "Can you photoshoot my Studio?",
    "May I know your suite of services?",
    "I am dying for an aesthetic rebrand!",
    "Do you guys design packages for my product?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[100vh] w-[100vw] font-poppins tracking-tight flex flex-col justify-center items-center px-4 bg-[#F5F5DC]">
      {/* Logo Image at the Top */}
      <div className="mb-10 sm:mb-20">
        <Image 
          src="/images/influmarkilogo.png" 
          alt="Influmarki Logo" 
          width={400} 
          height={60} 
          className="mx-auto"
        />
      </div>

      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-2xl dark:text-black text-black">
        Influmarki is a creative agency that builds strong brands through innovative design and marketing.
      </h2>
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />

      {/* Rounded Boxes Section with Icons */}
      <div className="flex gap-4 m-10 mt-10">
        <div className="bg-black text-white border-3 border-red-500 px-6 py-2 rounded-full text-center shadow-md cursor-pointer flex items-center justify-center">
          <FaInfoCircle className="h-5 w-5 mr-2" /> About Us
        </div>
        <div className="bg-black text-white border-3 border-red-500 px-6 py-2 rounded-full text-center shadow-md cursor-pointer flex items-center justify-center">
          <FaPhoneAlt className="h-5 w-5 mr-2" /> Contact
        </div>
        <div className="bg-black text-white border-3 border-red-500 px-6 py-2 rounded-full text-center shadow-md cursor-pointer flex items-center justify-center">
          <FaBriefcase className="h-5 w-5 mr-2" /> Services
        </div>
        <div className="bg-black text-white border-3 border-red-500 px-6 py-2 rounded-full text-center shadow-md cursor-pointer flex items-center justify-center">
          <FaClipboardList className="h-5 w-5 mr-2" /> Portfolio
        </div>
      </div>
    </div>
  );
}