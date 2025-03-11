import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { toast } from "sonner";
import { useApproveErc20 } from "@/hooks/use-erc20";
import { usePayAjo } from "@/hooks/use-payajo.write";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  balance: string;
};

export function AddContributionModal({
  isOpen,
  setIsOpen,
  balance,
}: ModalProps) {
  const { approve } = useApproveErc20();
  const { payAjo, hash } = usePayAjo();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<string | null>(null);

  const isValid = !isLoading && error === null && amount.length > 0;

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);

    if (parseFloat(value) > parseFloat(balance)) {
      setError("Insufficient balance");
    } else {
      setError(null);
    }
  };

  const handleSubmit = async () => {
    if (amount.length === 0) {
      toast.error("Please provide a valida amount");
      return;
    }

    setIsLoading(true);

    try {
      const decimals = 18;
      const amountBigInt = BigInt(
        Math.round(parseFloat(amount) * 10 ** decimals)
      );
      await approve(amountBigInt);
      console.log("approval done");

      await payAjo(amountBigInt);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (hash) {
      setAmount("");
      setIsLoading(false);
      setIsOpen(false);
      toast.success("Payment successfull");
    }
  }, [hash]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[500px] &rounded-2xl  w-[600px]  h-[300px]">
        <div className="w-full h-full justify-center flex flex-col items-center p-10">
          <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center gap-1 text-gray-600  ">
              <span className="h-4 w-4 rounded-full relative">
                <Image
                  src="/images/tether-usdt-logo.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </span>
              <span className="">OWO</span>
            </div>
            <input
              type="text"
              className="w-full text-center px-4 text-2xl focus:outline-none"
              value={amount}
              placeholder="Enter amount"
              onChange={(e) => handleAmount(e)}
            />
          </div>
          <p
            className={`pt-4  text-sm text-red-500 ${
              error ? "opacity-95" : "opacity-0"
            } transition-opacity`}
          >
            {error || ""}
          </p>
          <div className="flex gap-3 mt-10">
            <button
              className="py-3 px-10 text-sm bg-gray-300 rounded-full  flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className={`py-3 px-10 text-sm ${isValid ? "bg-opacity-100" : "bg-opacity-40"} bg-[#7165e3] rounded-full text-white flex items-center gap-2`}
              onClick={handleSubmit}
              disabled={isLoading || !isValid}
            >
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
              Send
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
