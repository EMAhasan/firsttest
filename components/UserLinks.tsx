"use client";

import { sign } from "crypto";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div>
            <Link className="text-yellow-400 hover:text-gray-300 px-8" href="/">Home</Link>
          <Link className="text-white hover:text-gray-300 px-8" href="/todoServerAction">Todo Server Action</Link>
          <Link className="text-white hover:text-gray-300 px-8" href="/todoRoute">Tooo Route</Link>
          <Link className="text-white hover:text-gray-300 px-8" href="/hookform/basic">hook basic</Link>
        
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <span className="ml-4 cursor-pointer" onClick={() => signIn()}>Login</span>
      )}
    </div>
  );
};

export default UserLinks;