import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "../Api";

export default function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate();

  async function login(data) {
    const res = await Api.post("/api/userpass/login", data);
    if (!res.data.success) {
      return alert(res.data.message);
    }
    alert("Login");
    reset();
    redirect("/");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow border-0 rounded-3 p-4">
            <h4 className="mb-4 text-center fw-bold">User Login</h4>

            <form method="post" onSubmit={handleSubmit(login)}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email")}
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password")}
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-2">
                Login
              </button>

              <div className="text-center mt-3">
                <span className="text-muted">
                  Don't have an account?{" "}
                  <a href="/signup" className="fw-semibold">
                    Signup
                  </a>
                </span>
              </div>

              <div className="text-center mt-2">
                <a href="/sendOtp" className="text-decoration-none">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
