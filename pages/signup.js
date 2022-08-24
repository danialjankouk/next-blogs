import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthActions } from "context/AuthContext";
import Layer from "components/Layer";
const RegesterForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("invalid Email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "minimum 8 character"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]{11}$/),
  });
  const dispatch = useAuthActions();
  const onSubmit = (val) => {
    const { name, email, password, phoneNumber } = val;
    dispatch({ type: "SIGNUP", payload: val });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div>
      <Layer />
      <div className="bg-slate-200 justify-center items-center flex h-screen">
        <div>
          <form
            className="flex flex-col h-[25rem] justify-evenly w-[20rem] items-center bg-white p-2 rounded-md"
            onSubmit={formik.handleSubmit}
          >
            <h1 className="text-xl">Sign Up</h1>
            {/* name */}
            <div>
              <label
                htmlFor="name"
                className="text-blue-500 w-full items-center flex justify-center"
              >
                user name
              </label>
              <input
                type="text"
                value={formik.values.name}
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="ring-1 ring-blue-400 text-black border-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.errors.name && formik.touched.name && (
                <div className="text-red-400 items-center justify-center flex">
                  {formik.errors.name}
                </div>
              )}
            </div>
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
            {/* phone number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="text-blue-500 w-full items-center flex justify-center"
              >
                Phone Number
              </label>
              <input
                type="tel"
                value={formik.values.phoneNumber}
                id="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="ring-1 ring-blue-400 text-black border-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <div className="text-red-400 items-center justify-center flex">
                  {formik.errors.phoneNumber}
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
          <Link href="/signin">
            <h1 className="pt-2 cursor-pointer text-slate-700">
              already have account ?
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegesterForm;
