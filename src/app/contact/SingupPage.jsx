"use client";
import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { app } from "../database/firebase";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import banner from "../../../public/assets/images/banner1.webp";
import { useFormik } from "formik";
import SignInPage from "./SignInPage";
const db = getDatabase(app);
// const pushData = () => {
//     set(ref(db, 'users/userdata'), {
//         id: 1,
//         name: "Anas Mehboob Khan",
//         age: 21,
//         image: banner
//     });
// }
const Page = () => {
  const auth = getAuth();
  const creatUser = () => {
    createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then((val) => {
        alert("User created successfully:", val.user);
      })
      .catch((error) => {
        alert("Error creating user:", error.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      creatUser();
      if (formik.values == "") {
        alert("Please Enter Any Value");
      } else {
        formik.resetForm();
      }
    },
  });
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
            border: "2px solid #ccc",
            my: 6,
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ m: 2 }}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <TextField
                    {...formik.getFieldProps("email")}
                    formik={formik}
                    name="email"
                    sx={{ width: "100%" }}
                    label="Email"
                    placeholder="Enter your email address"
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    {...formik.getFieldProps("password")}
                    formik={formik}
                    name="password"
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
                    Create User
                  </Button>
                  {/* <Button onClick={creatUser} sx={{ color: "#fff", background: "#FF6200", width: "100%" }} >
                                    Create User
                                </Button> */}
                  {/* <Button onClick={pushData} sx={{ color: "#fff", background: "#FF6200", width: "100%" }} >
                                Submit
                            </Button> */}
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Box>
      <SignInPage />
    </Box>
  );
};

export default Page;
