import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { Box, Grid, TextField, Button } from "@mui/material";
import Heading from "../common/Heading/Heading";

const SignInPage = () => {
  const auth = getAuth();
  const signInUser = () => {
    signInWithEmailAndPassword(
      auth,
      formik.values.signInEmail,
      formik.values.signInPassword
    )
      .then((val) => {
        alert("User Signed In successfully:", val.user);
      })
      .catch((error) => {
        alert("Error Signing user:", error.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      signInEmail: "",
      signInPassword: "",
    },
    onSubmit: (values) => {
      if (!values.signInEmail || !values.signInPassword) {
        alert("Please enter both email and password.");
        return;
      }
      signInUser();
      formik.resetForm();
    },
  });

  return (
    <Box sx={{ m: 2 }}>
      <Heading text={"Sign In"} />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <TextField
              {...formik.getFieldProps("signInEmail")}
              sx={{ width: "100%" }}
              label="Email"
              placeholder="Enter your email address"
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              {...formik.getFieldProps("signInPassword")}
              sx={{ width: "100%" }}
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item lg={12}>
            <Button
              type="submit"
              sx={{ color: "#fff", background: "#FF6200", width: "100%" }}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SignInPage;
