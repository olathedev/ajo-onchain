"use client";

import { wagmiContractConfig } from "@/utils";
import { useAccount, useWriteContract } from "wagmi";

export const usePayAjo = () => {
  const { address } = useAccount();
  const { data: hash, writeContract, isPending } = useWriteContract();

  const payAjo = async (amount: bigint) => {
    writeContract({
      ...wagmiContractConfig,
      functionName: "payAjo",
      args: [amount],
    });
  };

  return {
    payAjo,
    isPending,
    hash,
  };
};
