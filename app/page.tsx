import { Header } from "@/components";
import { Lemon } from "next/font/google";
const lemon = Lemon({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <Header />
      <hr />
      <div className="p-8 max-w-6xl mx-auto flex items-center justify-center min-h-[80vh]">
        <h1 className="text-center text-5xl">NextJS Clerk Auth</h1>
      </div>
    </>
  );
}
