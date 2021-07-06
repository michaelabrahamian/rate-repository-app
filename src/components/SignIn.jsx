import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Button from "./SubmitButton";
import useSignIn from "../hooks/useSignIn";
import AuthStorage from "../utils/authStorage";

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => (
  <>
    <FormikTextInput name="username" placeholder="Username" />
    <FormikTextInput name="password" placeholder="Password" secureTextEntry />
    <Button onPress={onSubmit} title="Sign in" />
  </>
);

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const authStorage = new AuthStorage("auth");

  const onSubmit = async (values) => {
    console.log(values);
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      authStorage.setAccessToken(data.authorize.accessToken);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
