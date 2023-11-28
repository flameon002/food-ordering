"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  
  const { data: session, status } = useSession()
  // const session = useSession();
  console.log(status);
  // const status = session.status;
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 items-center text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">
          ST PIZZA
        </Link>
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className=" flex gap-4 items-center font-semibold">
        {status === "authenticated" && (
          <Link
            href={"/register"}
            className="bg-primary rounded-full text-white px-8 py-2"
          >
            Log out
          </Link>
        )}

        {status !== "authenticated" && (
          <>
            <Link href={"/login"}>Login</Link>
            <button
              onClick={()=>signOut()}
              className="bg-primary rounded-full text-white px-8 py-2"
            >
              Register
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
