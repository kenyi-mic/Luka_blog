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
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6 bg-gradient-to-b from-blue-900 to-pink-900">
        <div className="bg-[url('/image/login.jpg')] text-gray-300 bg-cover p-10 flex justify-center items-center">
          <div>
            <h2 className="text-2xl my-5  text-gray-100 font-semibold">
              Information for Login
            </h2>
            <p>
              means any and all State Records not subject to disclosure under
              CORA. State Confidential Information shall include, but is not
              limited to, PII, PHI, PCI, Tax Information, CJI, and State
              personnel records not subject to disclosure under CORA. State
              Confidential Information shall not include information or data
              concerning individuals that is not deemed confidential but
              nevertheless belongs to the State, which has been communicated,
              furnished, or disclosed by the State to Contractor which (i) is
              subject to disclosure pursuant to CORA; (ii) is already known to
              Contractor without restrictions at the time of its disclosure to
              Contractor; (iii) is or subsequently becomes publicly available
              without breach of any obligation owed by Contractor to the State;
              (iv) is disclosed to Contractor, without confidentiality
              obligations, by a third party who has the right to disclose such
              information; or (v) was independently developed without reliance
              on any State Confidential Information.
            </p>
          </div>
        </div>
        <div className="p-10 ">
          <form
            className="border px-5  mx-auto shadow-white shadow-md"
            action=""
          >
            <h1
              className="text-center text-gray-100 text-2xl font-semibold py-5"
              title="Enter your credentials!"
            >
              Sign In
            </h1>
            <div className="pb-5">
              <label
                htmlFor="username"
                className="text-2xl font-semibold text-gray-200"
              >
                Username:
              </label>
              <input
                type="text"
                className="block w-full  outline-none rounded text-xl border-blue-400 border-2  px-2 py-1 "
                name="username"
              />
            </div>
            <div className="pb-5">
              <label
                htmlFor="password"
                className="text-2xl font-semibold text-gray-200"
              >
                Password:
              </label>
              <input
                type="password"
                className="block text-xl w-full outline-none rounded  border-blue-400 border-2 px-2 py-1 "
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
                  className="font-semibold text-gray-200 text-sm mx-2"
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
            <div className="my-5 lg:flex">
              <input
                type="submit"
                className="w-full lg:w-20 bg-cyan-600 p-2 text-gray-100 "
                name="submit"
                value="Submit"
              />
              <h2 className="invisible text-gray-100 lg:visible text-sm mx-5 pt-5">
                Don't have account?{" "}
                <a href="" className="text-sm text-amber-600 font-semibold">
                  Sign Up
                </a>{" "}
              </h2>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default login;
