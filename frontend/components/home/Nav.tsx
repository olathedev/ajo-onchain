"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { useDisconnect } from "wagmi";

const Nav = () => {
  const router = useRouter();
  const { disconnect } = useDisconnect();

  const handleDisconnect = () => {
    disconnect();
    toast.error("You've been signed out, come back soon")
    router.push("/");
  };
  return (
    <nav className="flex justify-between items-center pb-6">
      <div className="flex text-[#7165e3]">
        <h2 className="text-xl font-semibold  ">Alajọ̀</h2>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="py-2 px-6 text-white bg-[#63626e] rounded-full flex gap-1 items-center text-sm"
          onClick={handleDisconnect}
        >
          Disconnect wallet
        </button>

        <div className="h-10 w-10 rounded-full relative">
          <Image
            src="/images/profile-avarter.svg"
            alt=""
            fill
            className="object-fit"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
