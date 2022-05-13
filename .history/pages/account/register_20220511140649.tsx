import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Head from "next/head";
import { Header } from "../../components/Header";
import { Link } from "../../components";
import { Layout } from "../../components/account";
import { userService, alertService } from "../../services";

interface Formdata {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export default Register;

function Register() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Formdata>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(user: FormData) {
    return userService
      .register(user)
      .then(() => {
        alertService.success("Registration successful", {
          keepAfterRouteChange: true,
        });
        router.push("login");
      })
      .catch(alertService.error);
  }

  return (
    <main>
      <Head>
        <title>Sign Up </title>
      </Head>
      {/* <Header/> */}
      <div className="lg:w-5/6 mx-auto">
        <Layout>
          <div className="grid grid-cols-1 md:gird-cols-2 gap-3 lg:gap-6 lg:grid-cols-2">
            <div className="card my-10 lg:w-2/5 sm:w-4/5 md:w-2/3 mx-auto  p-3">
              <h4 className="card-header text-2xl text-center font-semibold">
                Sign Up
              </h4>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group  mb-5">
                    <label
                      htmlFor="firstName"
                      className="my-5 text-xl text-gray-700"
                    >
                      First Name:
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      className="block  p-2 w-full outline-none border-slate-200 border"
                      {...register("firstName")}
                      id={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback text-xs text-red-600 italic">
                      {errors.firstName?.message}
                    </div>
                  </div>
                  <div className="form-group mb-5">
                    <label className="my-2 text-xl text-gray-700">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      className={`form-control block  p-2 w-full outline-none border-slate-200 border ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                      name="lastName"
                    />
                    <div className="invalid-feedback  text-xs text-red-600 italic">
                      {errors.lastName?.message}
                    </div>
                  </div>
                  <div className="form-group mb-5">
                    <label className="my-2 text-xl text-gray-700">
                      Username:
                    </label>
                    <input
                      name="username"
                      type="text"
                      className="block  p-2 w-full outline-none border-slate-200 border"
                      {...register("username")}
                      id={`form-control ${errors.username ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback  text-xs text-red-600 italic">
                      {errors.username?.message}
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="password"
                      className="my-2 text-xl text-gray-700"
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      {...register("password")}
                      className={`form-control block p-2 w-full outline-none border-slate-200 border ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      name="password"
                    />
                    <div className="invalid-feedback  text-xs text-red-600 italic">
                      {errors.password?.message}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <button
                      disabled={formState.isSubmitting}
                      className="bg-indigo-500 text-white text-xl mt-10 py-2 px-4 mr-2"
                    >
                      {formState.isSubmitting && (
                        <span className="spinner-border spinner-border-sm mr-2"></span>
                      )}
                      Register
                    </button>
                    <Link
                      href="/account/login"
                      className="btn btn-link mt-10 bg-amber-600 text-white text-xl py-2 px-4 ml-2"
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </main>
  );
}
