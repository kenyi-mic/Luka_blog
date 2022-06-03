
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import IUser from "../../types/user.types";
import { register } from "../../services/auth.service";
const Register: React.FC = () => {
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const initialValues: IUser = {
    username: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });
  const handleRegister = (formValue: IUser) => {
    const { username, email, password } = formValue;
    register(username, email, password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };
  return (
    <div className="col-md-12  h-screen pt-12 w-4/5 m-auto">
      <div className="card card-container shadow-lg w-2/3 mx-auto  p-12 bg-slate-100">
        <img 
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="w-14 h-14 rounded-full"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div className="">
                <div className="form-group ">
                  <label htmlFor="username " className="block text-xl text-slate-600"> Username </label>
                  <Field name="username" type="text" className="form-control w-full" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="block text-xl text-slate-600"> Email </label>
                  <Field name="email" type="email" className="form-control w-full" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="block text-xl text-slate-600"> Password </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control w-full"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block text-xl text-slate-50 bg-amber-600 border border-emerald-700 bg-amber ">Sign Up</button>
                </div>
              </div>
            )}
            {message && (
              <div className="form-group">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Register;