"use client";

import { contract_address, wagmiContractConfigErc20 } from "../utils/config";
import {
  useAccount,
  useReadContract,
  useWriteContract,
} from "wagmi";

export const useGetErc20Balance = () => {
  const { address } = useAccount();

  const { data, isPending, error } = useReadContract({
    ...wagmiContractConfigErc20,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  return {
    balance: data,
    isPending,
    error,
  };
};

export const useApproveErc20 = () => {
  const { address } = useAccount();
  const { writeContract, isPending, error, data } = useWriteContract();

  const approve = async (amount: bigint) => {
    if (!address) {
      console.error("No address found");
      return;
    }

    try {
      const result = await writeContract({
        ...wagmiContractConfigErc20,
        functionName: "approve",
        args: [contract_address, amount],
      });
      return result;
    } catch (err) {
      console.error("Error calling approve:", err);
      throw err;
    }
  };

  return {
    approve,
    isPending,
    error,
    data,
  };
};
