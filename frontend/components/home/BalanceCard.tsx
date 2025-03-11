import { maskstring } from "@/utils";
import Image from "next/image";
import React from "react";
import Loader from "../shared/Loader";

type Props = {
  className?: string;
  gray?: number;
  title: string;
  showAddress?: boolean;
  address?: string;
  balance?: number | string;
  loading?: boolean;
};

const BalanceCard = ({
  className,
  gray = 200,
  title,
  showAddress,
  address,
  balance = 0.0,
  loading = false,
}: Props) => {
  return (
    <div
      className={`${className} w-full h-full border  bg-[#7165E3] bg-opacity-90 px-6 pt-6 pb-2 rounded-2xl flex flex-col gap-2`}
    >
      <div className="flex justify-between">
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

        <p className={`text-sm text-gray-${gray}`}>{title}</p>
      </div>

      <div className="flex justify-between">
        {loading ? (
          <Loader />
        ) : (
          <div className="font-bold text-3xl font-outfit">
            <span className="px-1 font- text-lg">OWO</span>
            {balance}
          </div>
        )}

        <div className="cursor-pointer text-gray-300">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
        </div>
      </div>

      {showAddress && (
        <div className="mt-2 flex items-center justify-between">
          <div className="inline-flex items-center gap-1 px-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </span>
            <p className="text-sm text-gray-200">
              {maskstring(address || "")}{" "}
            </p>
          </div>

          <span className="py-1 px-4 bg-green-500 text-xs bg-opacity-70 cursor-pointer  rounded-lg">
            copy
          </span>
        </div>
      )}
    </div>
  );
};

export default BalanceCard;
