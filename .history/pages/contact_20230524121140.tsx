import React from "react";
import Header from "../components/Header";
import { getCurrentUser } from "../services/auth.service";

function contact() {
  const currentUser = getCurrentUser;
  return (
    <div className="bg-blue-200 h-2/4">
      <Header user={currentUser} />
      <hr />
      <main className="grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 lg:gap-6">
          {/*left -- contact page info*/}
          <div className="mx-10 ">
            <h2 className="text-2xl font-semibold mb-10 underline">
              Let's talk about your new ideas
            </h2>
            <p className="text-lg font-light text-gray-600">
              Let get connceted to share incredible ideas, enter your
              information in the space provided.
            </p>
          </div>
          {/*right -- contact page form*/}
          <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
            <h1 className="text-2xl font-bold dark:text-gray-50">
              Send a message
            </h1>

            <label
              htmlFor="fullname"
              className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
              Full name<span className="text-red-500 dark:text-gray-50">*</span>
            </label>
            <input
              type="text"
              name="fullname"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
              htmlFor="email"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
              htmlFor="subject"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
              htmlFor="message"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            ></textarea>
            <div className="flex flex-row items-center justify-start">
              <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                Send
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-cyan-500 ml-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </form>
          {/*Middle */}
          <div className="mx-10">
            <h2 className="font-semibold text-2xl underline">
              For urgent info, check this out.
            </h2>

            <p className="my-10 text-sm text-amber-600">
              <span className="text-xl text-gray-700 block font-semibold">
                Email:
              </span>{" "}
              <a href="mailto:lukagarang011@gmail.com">
                <i>lukagarang011@gmail.com</i>
              </a>
            </p>
            <p className="my-10 text-sm text-amber-600">
              <span className="text-xl text-gray-700 block font-semibold">
                Phone:
              </span>{" "}
              <a href="tel:+880181234567890">
                <i>+880181234567890</i>
              </a>
            </p>
            <p className="my-10 text-sm text-amber-600">
              <span className="text-xl text-gray-700 block font-semibold">
                Address:
              </span>{" "}
              <a href="address">
                <i>4051 St francisco Us</i>
              </a>
            </p>
            <p className="my-10 text-sm text-amber-600">
              <span className="text-xl text-gray-700 block font-semibold">
                For Developer:
              </span>{" "}
              <a href="https://michael-kenyi.herokuapp.com/">
                <i>@hyper-devs</i>
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default contact;
