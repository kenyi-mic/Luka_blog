import Head from "next/head";
import React from "react";
import Header from "../../components/Header";

function login() {
  return (
    <main>
      <Head>
        <title>Login Page</title>
      </Head>
      <Header />
      <hr />
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6 bg-gradient-to-br from-purple-300 to-indigo-400">
        <div className="bg-[url('/image/login.jpg')] text-white p-10">
          <h2 className="text-2xl my-5 underline text-gray-100 font-semibold">
            Information for Login
          </h2>
          <p>
            means any and all State Records not subject to disclosure under
            CORA. State Confidential Information shall include, but is not
            limited to, PII, PHI, PCI, Tax Information, CJI, and State personnel
            records not subject to disclosure under CORA. State Confidential
            Information shall not include information or data concerning
            individuals that is not deemed confidential but nevertheless belongs
            to the State, which has been communicated, furnished, or disclosed
            by the State to Contractor which (i) is subject to disclosure
            pursuant to CORA; (ii) is already known to Contractor without
            restrictions at the time of its disclosure to Contractor; (iii) is
            or subsequently becomes publicly available without breach of any
            obligation owed by Contractor to the State; (iv) is disclosed to
            Contractor, without confidentiality obligations, by a third party
            who has the right to disclose such information; or (v) was
            independently developed without reliance on any State Confidential
            Information.
          </p>
        </div>
        <div className="flex border w-5/6 mx-auto justify-center">
          <form className="border" action="">
            <h1
              className="text-center text-gray-700 text-2xl font-semibold py-5"
              title="Enter your credentials!"
            >
              Sign In
            </h1>
            <div className="pb-5">
              <label
                htmlFor="username"
                className="text-xl font-semibold text-gray-600"
              >
                Username:
              </label>
              <input
                type="text"
                className="block w-full outline-none border border-gray-200 p-2"
                name="username"
              />
            </div>
            <div className="pb-5">
              <label
                htmlFor="password"
                className="text-xl font-semibold text-gray-600"
              >
                Password:
              </label>
              <input
                type="password"
                className="block w-full outline-none border border-gray-200 p-2"
                name="password"
              />
            </div>
            <div className="flex justify-between content-center">
              <div>
                <input
                  type="checkbox"
                  className="outline-slate-400"
                  name="checkbox"
                />
                <label
                  htmlFor="checkbox"
                  className="font-semibold text-gray-600 text-sm mx-2"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="font-semibold text-blue-600 text-sm mx-2"
                >
                  Forget Password
                </a>
              </div>
            </div>
            <div className="my-5">
              <input
                type="submit"
                className="w-full bg-blue-600 p-2 text-gray-100"
                name="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default login;
