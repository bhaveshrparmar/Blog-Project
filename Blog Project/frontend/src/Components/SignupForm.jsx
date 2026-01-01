import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "../Api";

export default function SimpleForm() {
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate();

  async function signup(data) {
    const res = await Api.post("/api/userpass/signup", data);
    if (!res.data.success) {
      return alert(res.data.message);
    }
    alert("SignUp");
    reset();
    redirect("/login");
  }

return (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-lg-5 col-md-6 col-sm-12">
        <div className="card shadow border-0 rounded-3 p-4">

          <h4 className="mb-4 text-center fw-bold">
            User Signup
          </h4>

          <form method="post" onSubmit={handleSubmit(signup)}>

            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                {...register("username")}
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                {...register("email")}
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Mobile</label>
              <input
                type="number"
                {...register("mobile")}
                className="form-control"
                placeholder="Enter mobile number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                {...register("password")}
                className="form-control"
                placeholder="Create a password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              Signup
            </button>

            <div className="text-center mt-3">
              <span className="text-muted">
                Already have an account?{" "}
                <a href="/login" className="fw-semibold">
                  Login
                </a>
              </span>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
);

}
