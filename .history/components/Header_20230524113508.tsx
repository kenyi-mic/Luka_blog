import React from "react";
import Link from "next/link";
import { getCurrentUser, logout } from "../services/auth.service";

function Header() {
  const currentUser = localStorage.getItem("user");
  const isSignedIn = !!currentUser;

  return (
    <div className="bg-gray-50 w-screen m-auto sticky top-0 z-10">
      <header className="flex justify-between px-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <img
              className="w-32 h-16 object-contain cursor-pointer py-1"
              src="/image/logo.png"
              alt="logo"
            />
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5 ">
            <Link href="../About">
              <h3 className="cursor-pointer ">About</h3>
            </Link>
            <Link href="../contact">
              <h3 className="cursor-pointer">Contact</h3>
            </Link>

            <h3 className="text-white bg-gradient-to-br from-amber-600  to-yellow-400 py-1 px-4 rounded-full cursor-pointer">
              Follow
            </h3>
          </div>
        </div>
        <div className=" flex md:inline-flex items-center  space-x-5 text-amber-600 ">
          {isSignedIn ? (
            <Link href="/">
              <a onClick={() => logout()} className="cursor-pointer">
                Sign out
              </a>
            </Link>
          ) : (
            <Link href="/account/login">
              <a className="cursor-pointer">Sign In</a>
            </Link>
          )}

          <Link href="../account/register">
            <a className="border px-4 py-1 rounded-full border-amber-600 cursor-pointer">
              Get Started
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
