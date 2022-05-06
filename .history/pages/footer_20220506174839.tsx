import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import CallIcon from "@mui/icons-material/Call";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

function footer() {
  return (
    <div className="bg-blue-900">
      <hr className="w-full h-2 bg-gradient-to-tr from-indigo-600 to-pink-700" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6 my-10 md:grid-cols-3 lg:grid-cols-4 text-center ">
        {/* first*/}
        <div className="text-center">
          <img className="w-44 m-auto" src="/logo.png" alt="logo" />
          <p className="text-sm text-gray-200 py-2">
            Let's connect the world with our fashionated Ideas.
          </p>
        </div>
        {/* second*/}
        <div className=" text-gray-400">
          <h2 className="text-2xl font-bold  text-gray-200 ">Our Services</h2>
          <h4 className="hover:text-amber-600 hover:underline cursor-pointer">
            Blog
          </h4>
          <h4 className="hover:text-amber-600 hover:underline cursor-pointer">
            Advertisment
          </h4>
          <h4 className="hover:text-amber-600 hover:underline cursor-pointer">
            Business Tips
          </h4>
          <h4 className="hover:text-amber-600 hover:underline cursor-pointer">
            Interview
          </h4>
          <h4 className="hover:text-amber-600 hover:underline cursor-pointer">
            Latest Updates
          </h4>
        </div>
        {/* third*/}
        <div className=" text-gray-400 ">
          <h2 className="text-2xl font-bold text-gray-200">Social Network</h2>
          <Link href="https://www.facebook.com/" passHref>
            <a target="_blank">
              <h4>
                <FacebookIcon className="mr-1 text-blue-700 font-extrabold" />
                <span className="hover:text-amber-600 hover:underline cursor-pointer">
                  Facebook
                </span>
              </h4>
            </a>
          </Link>
          <Link href="https://instagram.com" passHref>
            <a target="_blank">
              <h4>
                <InstagramIcon className="mr-1 bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-500 rounded text-gray-100 font-bold " />
                <span className="hover:text-amber-600 hover:underline cursor-pointer">
                  Instagram
                </span>
              </h4>
            </a>
          </Link>

          <Link href="https://twitter.com" passHref>
            <a target="_blank">
              <h4>
                <TwitterIcon className="mr-1 text-sky-600" />
                <span className="hover:text-amber-600 hover:underline cursor-pointer">
                  Twitter
                </span>{" "}
              </h4>
            </a>
          </Link>
          <Link href="https://medium.com" passHref>
            <a target="_blank">
              <h4 className="flex ">
                <img
                  className="h-6 w-6 mr-1 items-center justify-center pt-2"
                  src="/medium.svg"
                  alt=""
                />
                <span className="hover:text-amber-600 hover:underline cursor-pointer">
                  Medium
                </span>
              </h4>
            </a>
          </Link>
          <Link href="https://telegram.com" passHref>
            <a target="_blank">
              <h4>
                <TelegramIcon className="mr-1 text-sky-500" />
                <span className="hover:text-amber-600 hover:underline cursor-pointer">
                  Telegram
                </span>
              </h4>
            </a>
          </Link>
          <Link href="https://discord.com" passHref>
            <a target="_blank">
              <h4 className="flex">
                <img
                  className="h-6 w-6 mr-1 items-center justify-center pt-2"
                  src="/discord.svg"
                  alt=""
                />
                <span className="hover:text-amber-600 hover:underline cursor-pointer">
                  Discord
                </span>
              </h4>
            </a>
          </Link>
        </div>

        {/* fourth*/}
        <div className=" text-gray-400 ">
          <h2 className="text-2xl font-bold  text-gray-200">Contact Us </h2>
          <h4>
            <EmailIcon className="mr-1 text-red-500 " />
            <span className="hover:text-indigo-600 hover:text-bold cursor-pointer">
              lukagarang011@gmail.com
            </span>
          </h4>
          <h4>
            <CallIcon className="mr-1 text-gray-800" />{" "}
            <span>+880181234567890</span>{" "}
          </h4>
          <h4>
            <WhatsappIcon className="mr-1 text-green-500" />{" "}
            <span>+88017123456789</span>{" "}
          </h4>
          <Link href="https://skype.com" passHref>
            <a target="_blank">
              <h4 className="flex ">
                <img
                  className="h-8 w-8 mr-1 items-center justify-center py-1"
                  src="/skype.svg"
                  alt=""
                />
                <span className="hover:text-amber-600 hover:text-bold hover:underline">
                  Skype
                </span>{" "}
              </h4>
            </a>
          </Link>
          <Link href="https://lukablog.sanity.studio/" passHref>
            <a target="_blank">
              <h4 className="text-red-600 font-bold py-1 border border-amber-100 rounded-full w-20 px-3 cursor-pointer hover:bg-white my-5">
                Admin
              </h4>
            </a>
          </Link>
        </div>
      </div>
      <hr className="w-full h-2 bg-gradient-to-tr from-indigo-600 to-pink-700" />
      <h1 className="text-3xl shadow-green-700 font-extralight text-gray-200 text-shadow text-center py-5">
        Luka Garang's Blog{" "}
        <span className="text-amber-600 text-sm text-extralight">
          {" "}
          &copy; 2022
        </span>
      </h1>
    </div>
  );
}

export default footer;
