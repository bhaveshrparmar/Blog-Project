import { useForm } from "react-hook-form";
import Api from "../Api";
import { useNavigate } from "react-router-dom";

export default function ForgetOtpPass() {
  const { register, handleSubmit, reset } = useForm();

  const redirect = useNavigate();

  async function forgetPass(data) {
    console.log(data);
    try {
      if (data.new_pass === data.confirm_pass) {
        const res = await Api.post("/api/userpass/updatePassword", data);
        console.log(res)
        if (res.data.success) {
          alert(res.data.message)
          reset();
          redirect("/login");
        }else{
          alert(res.data.message)
        }
      } else {
        alert("New Password & Confirm Password Not Match!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
  <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div
      className="card shadow border-0 rounded-3 p-4"
      style={{ maxWidth: "420px", width: "100%" }}
    >
      <h4 className="text-center fw-bold mb-2">
        Reset Password
      </h4>

      <p className="text-center text-muted mb-4" style={{ fontSize: "14px" }}>
        Enter OTP and set your new password
      </p>

      <form onSubmit={handleSubmit(forgetPass)}>
        <div className="mb-3">
          <label className="form-label fw-semibold">OTP</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter OTP"
            {...register("otp")}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter new password"
            {...register("new_pass")}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            {...register("confirm_pass")}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-semibold mt-2">
          Update Password
        </button>

        <div className="text-center mt-3">
          <a
            href="/sendOtp"
            className="text-decoration-none fw-semibold text-secondary"
          >
            ← Back to Email
          </a>
        </div>
      </form>
    </div>
  </div>
);

}
