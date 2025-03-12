"use client";
import { AddContributionModal } from "@/components/home/AddcontributionModal";
import BalanceCard from "@/components/home/BalanceCard";
import { useGetErc20Balance } from "@/hooks/use-erc20";
import { useGetUserContribution } from "@/hooks/use-getajo.read";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BaseError } from "viem";
import { useAccount } from "wagmi";

const Dashboard = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const { address, isConnected } = useAccount();

  const { balance, error, isPending } = useGetErc20Balance();
  const { contributions, isPending: loadingContributions } =
    useGetUserContribution();

  const [addMoneyModal, setAddMoneyModal] = useState(false);
  const [formattedBalance, setFormattedBalance] = useState("0.00");
  const [formattedBalance2, setFormattedBalance2] = useState("0.00");

  useEffect(() => {
    if (balance) {
      setFormattedBalance((Number(balance) / 10 ** 18).toFixed(2));
    }
  }, [balance]);

  useEffect(() => {
    if (contributions) {
      setFormattedBalance2((Number(contributions) / 10 ** 18).toFixed(2));
    }
  }, [contributions]);

  return (
    <div className="w-full ">
      {!isPending && formattedBalance === "0.00" && (
        <div className="py-4 px-6 w-full bg-blue-500 bg-opacity-30 mb-4 rounded-2xl flex justify-between">
          <div>
            <h4 className="font-medium text-sm">Get owo token</h4>
            <p className="text-gray-600 text-sm">
              Seems you dont have OWO token for now, you can use swap by alajo
              to swap your sepoliaEth to Owo
            </p>
          </div>

          <div
            className="flex flex-col justify-end cursor-pointer"
            onClick={() => router.push("/swap")}
          >
            <button className="bg-black py-2 px-8 text-sm rounded-lg text-white">
              Try Swap
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2  items-center gap-6">
        <BalanceCard
          title="your total balace"
          className="text-gray-100"
          showAddress={true}
          address={address}
          balance={formattedBalance}
          loading={isPending}
        />

        <BalanceCard
          title="Your contributions"
          balance={formattedBalance2}
          gray={600}
          className="bg-white text-gray-700 gap-3"
        />
      </div>
      <div className="w-full flex my-10  justify-center items-center gap-3">
        <button
          className="py-3 px-6 text-sm bg-gray-300 rounded-full  flex items-center gap-2"
          onClick={() => setAddMoneyModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
          Add contribution
        </button>

        <button className="py-3 px-6 text-sm bg-[#7165e3] rounded-full text-white flex items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4799 2.02031C18.2836 1.82389 18.0384 1.68336 17.7697 1.61319C17.5009 1.54302 17.2183 1.54575 16.951 1.6211L16.9338 1.62656L1.94087 6.17188C1.63633 6.26017 1.36587 6.43903 1.1654 6.68469C0.964932 6.93035 0.843946 7.23119 0.818512 7.54724C0.793079 7.86329 0.864402 8.1796 1.02301 8.45416C1.18161 8.72871 1.42 8.94852 1.70649 9.08438L8.29399 12.2094L11.419 18.7969C11.5437 19.0645 11.7424 19.2908 11.9916 19.4492C12.2407 19.6075 12.53 19.6913 12.8252 19.6906C12.8698 19.6906 12.9151 19.6906 12.9604 19.6852C13.2762 19.66 13.5767 19.5385 13.8213 19.3372C14.0659 19.1359 14.2429 18.8644 14.3284 18.5594L18.8737 3.56641C18.876 3.56084 18.8778 3.55509 18.8791 3.54922C18.9545 3.28189 18.9572 2.99931 18.8871 2.73058C18.8169 2.46185 18.6764 2.21668 18.4799 2.02031ZM12.7659 17.2594L10.1315 11.6977L13.6666 8.1625C13.8428 7.98638 13.9417 7.74751 13.9417 7.49844C13.9417 7.24937 13.8428 7.0105 13.6666 6.83438C13.4905 6.65826 13.2517 6.55931 13.0026 6.55931C12.7535 6.55931 12.5146 6.65826 12.3385 6.83438L8.80337 10.3695L3.24087 7.73438L16.9065 3.59375L12.7659 17.2594Z"
              fill="currentColor"
            ></path>
          </svg>
          Withdraw contributions
        </button>
      </div>

      <div className="">
        <header className="flex justify-between">
          <h3 className="text-sm text-gray-600 font-medium">
            Contribution Activies
          </h3>

          <div className="flex gap-4 items-center text-sm">
            <p className="text-[#7165e3] pb-2  px-3 border-b-2 border-[#7165e3]">
              All
            </p>

            <p className="text-gray-500 pb-2 px-2">Your own</p>
          </div>
        </header>
      </div>

      <AddContributionModal
        isOpen={addMoneyModal}
        setIsOpen={setAddMoneyModal}
        balance={formattedBalance}
      />
    </div>
  );
};

export default Dashboard;
