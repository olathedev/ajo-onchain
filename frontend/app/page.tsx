"use client";
import Hero from "@/components/home/Hero";
import Nav from "@/components/shared/Nav";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected, router]);

  return (
    <div className="font-outfit min-h-screen">
      <header className="bg-[url('/images/bg.png')] bg-cover bg-center h-screen w-full">
        <div className="sticky top-0 bg-white z-50">
          <Nav />
        </div>

        <Hero />
      </header>
    </div>
  );
}
