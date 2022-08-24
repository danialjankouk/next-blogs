import React,{useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth, useAuthActions } from "context/AuthContext";
import Layer from "components/Layer";
import Router from "next/router";
const SignIn = () => {
  const user = useAuth()
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("invalid Email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "minimum 8 character"),
  });
  const dispatch = useAuthActions();
  const onSubmit = (val) => {
    const { email, password } = val;
    dispatch({ type: "SIGNIN", payload: val });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  // useEffect(() => {
  //   if (user) Router.push("/blogs");
  // }, [user]);
  return (
    <div>
      <Layer />
      <div className="bg-slate-200 justify-center items-center flex flex-col h-screen">
        <div>
          <form
            className="flex flex-col h-[25rem] justify-evenly w-[20rem] items-center bg-white p-2 rounded-md"
            onSubmit={formik.handleSubmit}
          >
            <h1 className="text-xl">Sign In</h1>
            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="text-blue-500 w-full items-center flex justify-center"
              >
                Email
              </label>
              <input
                type="email"
                value={formik.values.email}
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="ring-1 ring-blue-400 text-black border-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-400 items-center justify-center flex">
                  {formik.errors.email}
                </div>
              )}
            </div>
            {/* password */}
            <div>
              <label
                htmlFor="password"
                className="text-blue-500 w-full items-center flex justify-center"
              >
                Password
              </label>
              <input
                type="password"
                value={formik.values.password}
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="ring-1 ring-blue-400 text-black border-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-400 items-center justify-center flex">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={!formik.isValid}
              className={`${
                !formik.isValid ? `cursor-not-allowed` : `cursor-pointer`
              } bg-slate-300 p-1 rounded-md px-2 text-blue-600`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
