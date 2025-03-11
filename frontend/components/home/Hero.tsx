import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex items-center h-full grow gap-10 container mx-auto px-10">
      <div className="w-[45%] flex flex-col space-y-6">
        <div className="w-2/3 text-center py-2 px-4 bg-primaryLight rounded-full">
          🔥 Smart savings for your crypto
        </div>
        <h2 className="text-5xl font-bold font-raleway">
          The Better Way to Save & Invest your crypto
        </h2>
        <p className="py-2 text-xl w-2/3 text-gray-800">
          Safe lock helps people achieve their financial goals by helping them
          save and invest with ease in crypto.
        </p>
      </div>

      <div className="w-[55%] flex justify-center relative py-6">
        <Image
          src="/images/hero.png"
          alt="hero"
          height={550}
          width={550}
          className="object-cover"
        />

        <Image
          src="/images/Frame 18.png"
          alt="hero"
          height={200}
          width={200}
          className="object-cover absolute top-0 left-0 hover:scale-110 transition-all duration-300 ease-in-out"
        />
        <Image
          src="/images/Frame 78.png"
          alt="hero"
          height={220}
          width={220}
          className="object-cover absolute top-10 right-0 hover:scale-110 transition-all duration-300 ease-in-out"
        />

         <Image
          src="/images/Frame 82.png"
          alt="hero"
          height={200}
          width={200}
          className="object-cover absolute bottom-10 left-0 hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Hero;
