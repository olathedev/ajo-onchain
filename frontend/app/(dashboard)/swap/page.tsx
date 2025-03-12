import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const Swap = () => {
  return (
    <div className="h-full mt-16 flex justify-center items-center">
      <div className="w-1/2 border p-6 rounded-2xl ">
        <h3 className="text-lg font-medium mb-4">Swap</h3>

        <div className="flex flex-col gap-3 relative">
          <div className="w-full rounded-xl p-3 bg-[#7165e3]/10">
            <p className="text-sm text-gray-500">Send</p>

            <div className="w-full flex justify-between items-center my-1">
              <input
                type="text"
                className="text-2xl bg-transparent focus:outline-none w-2/3 font-poppins"
                value="0.0"
              />
              <div className="inline-flex  whitespace-nowraptext-sm items-center gap-1 py-1 px-3 bg-[#7165e3] bg-opacity-80 rounded-full ">
                <span className="h-4 w-4 rounded-full relative text-xs">
                  <Image
                    src="/images/eth.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </span>
                <span className="text-xs text-gray-50">SepolaEth</span>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center absolute bottom-[70px]">
            <span className="h-10 w-10 flex items-center justify-center text-[#7165e3] rounded-xl bg-[#7165e3]/30 backdrop-blur">
              <ArrowDown size={20} />
            </span>
          </div>
          <div className="w-full rounded-xl p-3 bg-[#7165e3]/10">
            <p className="text-sm text-gray-500">Receive</p>

            <div className="w-full flex justify-between items-center my-1">
              <input
                type="text"
                className="text-2xl bg-transparent focus:outline-none w-2/3 font-poppins"
                value="0.0"
              />
              <div className="inline-flex  whitespace-nowraptext-sm items-center gap-1 py-1 px-3 bg-[#7165e3] bg-opacity-80 rounded-full ">
                <span className="h-4 w-4 rounded-full relative text-xs">
                  <Image
                    src="/images/tether-usdt-logo.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </span>
                <span className="text-xs text-gray-50">owo</span>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-6 bg-[#7165e3] py-3 w-full text-sm rounded-xl font-medium text-white">
              Swap
            </button>
      </div>
    </div>
  );
};

export default Swap;
