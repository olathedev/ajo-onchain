"use client";
import Nav from "@/components/home/Nav";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { address, isConnected } = useAccount();

  // useEffect(() => {
  //   if (isConnected) {
  //     setIsLoading(false);
  //   } else {
  //     router.push("/");
  //   }
  // }, [isConnected, router]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className=" text-center">
          <h2 className="text-xl font-semibold text-[#7165e3]">Alajọ̀</h2>
          <p className="text-gray-400 my-2  font-outfit">
            Decentralized Ajo system with crypto
          </p>
          <div className="loader mt-4 ease-linear rounded-full border-2 border-t-2 border-gray-200 h-6 w-6 mx-auto"></div>
          <style jsx>{`
            .loader {
              border-top-color: #7165e3;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex h-screen font-raleway justify-center py-10">
      <div className="w-full lg:max-w-[60%] h-full">
        <Nav />
        {/* <hr  className="" /> */}

        <div className="w-full pt-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
