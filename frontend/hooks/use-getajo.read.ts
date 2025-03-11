import { wagmiContractConfig } from "@/utils";
import { useAccount, useReadContract } from "wagmi";

export const useGetUserContribution = () => {
  const { address } = useAccount();

  const { data, isPending, error } = useReadContract({
    ...wagmiContractConfig,
    functionName: "book",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  return {
    contributions: data,
    isPending,
    error,
  };
};
