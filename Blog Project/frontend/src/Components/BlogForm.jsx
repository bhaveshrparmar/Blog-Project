import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../Api";

export default function Form() {
  const { register, handleSubmit, reset } = useForm();
  const [id, setId] = useState(null);
  const [image, setImage] = useState("");
  const [blogs, setBlogs] = useState([]);
  const redirect = useNavigate();

  async function getData() {
    const res = await Api.get("/api/blog");
    setBlogs(res.data.blogs);
  }

  async function add(data) {
    const formData = new FormData();

    const images = data.image;
    for (var i in images) {
      formData.append("image", images[i]);
    }

    formData.append("title", data.title);
    formData.append("description", data.description);

    if (id === null) {
      await Api.post("/api/blog", formData);
    } else {
      await Api.put(`/api/blog?id=${id}`, formData);
      setId(null);
      setImage("");
    }

    redirect("/");
    reset({
      title: "",
      description: "",
      image: "",
    });
  }

  const params = useParams();

  async function update(blogId) {
    setId(blogId);

    const singleBlog = blogs.find((blog) => blog._id == blogId);
    if (!singleBlog) return;

    reset(singleBlog);

    const img = `${import.meta.env.VITE_IMAGE_URL}/${singleBlog.image}`;
    setImage(img);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (params.id && blogs.length > 0) {
      update(params.id);
    }
  }, [params.id, blogs]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="card shadow border-0 rounded-3">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="mb-0">
                {id === null ? "Create Blog" : "Update Blog"}
              </h4>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit(add)} encType="multipart/form-data">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("title", { required: true })}
                    placeholder="Enter blog title"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    {...register("description", { required: true })}
                    placeholder="Enter blog description"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    {...register("image", { required: false })}
                    multiple
                    accept="image/*"
                  />

                  {image !== "" && (
                    <div className="mt-3">
                      <p className="mb-1 text-muted">Current Image</p>
                      <img
                        src={image}
                        width="120"
                        height="120"
                        style={{ objectFit: "cover", borderRadius: "6px" }}
                        alt=""
                      />
                    </div>
                  )}
                </div>

                <div>
                  {id === null ? (
                    <button type="submit" className="btn btn-primary px-4">
                      Create Blog
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-warning px-4">
                      Update
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
