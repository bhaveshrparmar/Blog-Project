import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Api from "../Api";

export default function ChangePassword() {
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate();

  async function changePass(data) {
    try {
      if (data.new_pass != data.comfirm_pass) {
        return alert("New Password & Confirm Password Not Match!");
      }
      const res = await Api.post("/api/userpass/changePass", data);
      if (res.data.success) {
        alert(res.data.message);
        reset();
        redirect("/");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  }
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow border-0 rounded-3 p-4"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <h4 className="text-center fw-bold mb-4">Change Password</h4>

        <form method="post" onSubmit={handleSubmit(changePass)}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Current Password</label>
            <input
              type="password"
              {...register("curr_pass")}
              className="form-control"
              placeholder="Enter current password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">New Password</label>
            <input
              type="password"
              {...register("new_pass")}
              className="form-control"
              placeholder="Enter new password"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Confirm Password</label>
            <input
              type="password"
              {...register("comfirm_pass")}
              className="form-control"
              placeholder="Confirm new password"
            />
          </div>

          <button className="btn btn-success w-100 fw-semibold">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
