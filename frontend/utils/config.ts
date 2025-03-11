import { erc20Abi } from "viem";
import rawabi from "./abi/Alajo.json";
import erc20abi from "./abi/OwoToken.json";

export const abi = rawabi.abi;
export const erc20 = erc20abi.abi;
export const contract_address = "0xA7921c71A3A3Cc23Dd21709f12Df79f398fD17B4";
export const erc20ContractAddress =
  "0xABd6B870107613098B8213F61c4da29615aA2d91";

export const wagmiContractConfig = {
  address: contract_address,
  abi: abi,
} as const;

export const wagmiContractConfigErc20 = {
  address: erc20ContractAddress,
  abi: erc20Abi,
} as const;
