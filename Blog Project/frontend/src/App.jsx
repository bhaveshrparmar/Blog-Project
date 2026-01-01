import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AllBlogs from "./Components/AllBlogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/BlogForm";
import Navbar from "./Components/BlogNavbar";
import SimpleForm from "./Components/SignupForm";
import LoginForm from "./Components/LoginForm";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import ChangePassword from "./Components/Pass-Change";
import ForgetPasswordEmail from "./Components/ForgetPass-Email";
import ForgetOtpPass from "./Components/SendOtp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <AllBlogs />
                </>
              }
            />
            <Route
              path="/form"
              element={
                <>
                  <Navbar />
                  <Form />
                </>
              }
            />
            <Route
              path="/changePass"
              element={
                <>
                  <Navbar />
                  <ChangePassword />
                </>
              }
            />
            <Route
              path="/form/:id"
              element={
                <>
                  <Navbar />
                  <Form />
                </>
              }
            />
          </Route>
          <Route path="/signup" element={<SimpleForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sendOtp" element={<ForgetPasswordEmail />} />
          <Route path="/forgetpass" element={<ForgetOtpPass />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
