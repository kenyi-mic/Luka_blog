import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../services/auth.service";
import { RouteComponentProps } from "react-router-dom";
import Header from "../../components/Header";
interface RouterProps {
  history: string;
}
type Props = RouteComponentProps<RouterProps>;
const Login: React.FC<Props> = ({ history }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const initialValues: {
    username: string;
    password: string;
  } = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });
  const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;
    setMessage("");
    setLoading(true);
    login(username, password).then(
      () => {
        history.push("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };
  return (
    <>
    <Header/>
    <div className="col-md-12 flex justify-center align-middle w-full py-12 mx-auto ">
      <div className="card card-container shadow-lg w-2/5 mx-auto  p-12 bg-slate-100 ">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card w-14 h-14 rounded-full"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="username" className="block text-xl text-slate-600">Username</label>
              <Field name="username" type="text" className="form-control w-full h-10 outline-none text-lg" />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger text-red-600 text-xs font-light"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="block text-xl text-slate-600">Password</label>
              <Field name="password" type="password" className="form-control w-full h-10 outline-none text-lg" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger text-red-600 text-xs font-light"
              />
            </div>
            <div className="form-group flex  gap-5">
              <button type="submit" className="btn btn-primary btn-block text-xl text-slate-50 bg-amber-600 px-3 pb-1  rounded-lg border border-emerald-700 bg-amber mt-6" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span className="">Login</span>
              </button>
              <p className="mt-6">Don't have account? <span className="text-blue-500 font-bold text-xl cursor-pointer">Sign Up</span></p>
            </div>
            {message && (
              <div className="form-group">
                <div className="alert alert-danger text-red-500 text-xs" role="alert">
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div></>
    
  );
};
export default Login;