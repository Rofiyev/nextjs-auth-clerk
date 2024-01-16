"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Crete_Round } from "next/font/google";
import { useRouter } from "next/navigation";

const crete_round = Crete_Round({ weight: "400", subsets: ["latin"] });

const Header = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { push } = useRouter();
  console.log(user);

  return (
    <header className="shadow-sm py-2 bg-slate-700 text-gray-100">
      <nav className="container max-w-6xl mx-auto flex items-center justify-between">
        <h3
          className={`${crete_round.className} text-3xl cursor-pointer flex items-center`}
        >
          <Image
            height={40}
            width={40}
            src={logo.src}
            className="brightness-[0] invert-[1]"
            alt="Logo"
          />
          <span className="ml-2 text-emerald-400">Rof1yev</span>
        </h3>
        {isLoaded ? (
          isSignedIn && <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={() => push("/sign-in")}
            className="bg-emerald-400 hover:bg-emerald-500 transition-colors py-1 px-4 rounded font-semibold"
          >
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
