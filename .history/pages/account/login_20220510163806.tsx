import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link } from "../../components";
import { Layout } from "../../components/account";
import { userService, alertService } from "../../services";
import { Resolver } from "dns";

interface Formdata {
  name: string;
  username: string;
  password: string;
  rememberMe: boolean;
}

function login() {
  const router = useRouter();

  //form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    rememberMe: Yup.boolean().oneOf([true] || [false]),
  });

  //get Function to build form with useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Formdata>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: Formdata) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <main>
      <Head>
        <title>Login Page</title>
      </Head>
      <Header />
      <hr />
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6 bg-opacity-80 bg-gradient-to-b from-blue-900 to-pink-900">
        <div onSubmit={handleSubmit(onSubmit)} className="p-10 ">
          <form className="w-10/12 mx-auto" action="">
            <h1
              className="text-center text-gray-100 text-3xl font-semibold py-5"
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
                {...register("username")}
                className={`form-control block w-full  outline-none rounded text-xl border-blue-400 border-2  px-2 py-1 ${
                  errors.username ? "is-invalid" : ""
                }`}
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
                {...register("password")}
                className={`form-control block text-xl w-full outline-none rounded  border-blue-400 border-2 px-2 py-1 ${
                  errors.password ? "is-invalid" : ""
                }`}
                name="password"
              />
            </div>
            <div className="flex justify-between content-center">
              <div>
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className={`form-check-input outline-slate-400 ${
                    errors.rememberMe ? "is-invalid" : ""
                  }`}
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
        <div className="bg-[url('/image/login.jpg')] text-gray-300 bg-cover p-10 flex justify-center items-center">
          <div>
            <h2 className="text-4xl my-5  text-gray-100 font-mono font-bold drop-shadow-lg shadow-gray-600">
              Nurture the ideas
              <br /> you may need
              <br /> tomorrow
            </h2>
            <button className="flex justify-center items-center hover:border-amber-600 border-cyan-700 hover:text-amber-600 text-cyan-700 text-xl font-bold py-1 px-2 border-2 ">
              Join
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default login;
