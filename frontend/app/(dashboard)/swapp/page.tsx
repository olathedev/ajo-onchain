import Image from "next/image";
import React from "react";

const Swap = () => {
  return (
    <div className="h-full mt-32 flex justify-center items-center">
      <div className="w-1/2 border p-6 rounded-2xl ">
        <h3 className="text-lg font-medium mb-4">Swap</h3>

        <div className="w-full rounded-xl p-3 bg-[#7165e3]/10">
          <p className="text-sm text-gray-500">Send</p>

          <div className="w-full flex justify-between my-2">
            <input
              type="text"
              className="text-2xl bg-transparent focus:outline-none"
              value="0"
            />
            tokennn
            <div className="inline-flex text-sm items-center gap-2">
              <span className="h-6 w-6 rounded-full relative">
                <Image
                  src="/images/tether-usdt-logo.png"
                  alt=""
                  fill
                  className="object-cover"  
                />
              </span>
              Owo token
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
