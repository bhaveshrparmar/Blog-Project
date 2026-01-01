import { useForm } from "react-hook-form";
import Api from "../Api";
import {  useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate()

  async function sendOtp(data) {
    console.log(data);
    await Api.post("/api/userpass/sendOtp", data);
       reset()
       redirect("/forgetpass")
  }

 return (
  <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div
      className="card shadow border-0 rounded-3 p-4"
      style={{ maxWidth: "420px", width: "100%" }}
    >
      <h4 className="text-center fw-bold mb-2">
        Forgot Password
      </h4>

      <p className="text-center text-muted mb-4" style={{ fontSize: "14px" }}>
        Enter your registered email and we will send you an OTP
      </p>

      <form onSubmit={handleSubmit(sendOtp)}>
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Email Address
          </label>
          <input
            type="email"
            {...register("email")}
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <button className="btn btn-primary w-100 fw-semibold mt-2">
          Send OTP
        </button>
      </form>

      <div className="text-center mt-3">
        <a href="/login" className="text-decoration-none fw-semibold text-secondary">
          ← Back to Login
        </a>
      </div>
    </div>
  </div>
);

}
