import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Api from "../Api";

export default function MyForm() {
  const [blogs, setBlogs] = useState([]);

  async function getData() {
    const res = await Api.get("/api/blog");
    setBlogs(res.data.blogs);
  }

  async function trash(id) {
    await Api.delete(`/api/blog/${id}`);
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className="mt-5 text-center border-3 border-dark border-bottom mx-5  py-2">
        All Blogs
      </h2>

      <div className="container mt-4">
        <div className="row">
          {blogs &&
            blogs.map((blog, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card h-100 shadow">
                  <div className="p-2 d-flex flex-wrap justify-content-center">
                    {blog.image?.map((ele, i) => (
                      <img
                        key={i}
                        src={`${import.meta.env.VITE_IMAGE_URL}/${ele}`}
                        width="100%"
                        height="200px"
                        className="mb-2"
                        style={{ objectFit: "cover", borderRadius: "5px" }}
                      />
                    ))}
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Title : {blog.title}</h5>
                    <p className="card-text mb-2">
                      <strong>Description</strong> : {blog.description}
                    </p>

                    <p className=" mb-1">
                      <strong>Created :</strong>{" "}
                      {new Date(blog.createdAt).toLocaleString()}
                    </p>
                    <p>
                      <strong>Updated :</strong>{" "}
                      {new Date(blog.updatedAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="text-center mb-3">
                    <a
                      href={`/form/${blog._id}`}
                      className="btn btn-warning me-5"
                    >
                      Update
                    </a>
                    <button
                      onClick={() => trash(blog._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
