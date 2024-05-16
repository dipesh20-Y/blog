import React, { useState } from "react";
import { useBlog } from "../context/BlogContext";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
    const navigate = useNavigate()
  const { addBlog } = useBlog();
  const [blog, setBlog] = useState({ title: "", description: "" });

  const handleCreate =  (e) => {
    e.preventDefault();

    if (blog) {
        console.log(blog);
       addBlog(blog);
      setBlog({ title: '', description: '' });
      navigate('/');
    }
  };

  return (
   
    
    <div className="flex flex-col items-center h-screen justify-center w-full">
        <Header />
    <div className="text-2xl font-mono font-bold">Add a new blog</div>
    <div className="mt-16 border py-8 px-8 shadow-lg w-full md:w-3/4 lg:w-1/2">
        <form  onSubmit={handleCreate}>
          <div>
            <div className="mb-2">
              <label className="text-lg font-mono ">
                Title
                <div>
                  <input
                  className="p-2 mb-2 border hover:bg-gray-50 w-full mt-1 rounded-lg"
                    value={blog.title}
                    onChange={(e) => {
                      setBlog((prev) => {
                        return { ...prev, title: e.target.value };
                      });
                    }}
                    type="text"
                    placeholder="Enter title"
                  />
                </div>
              </label>
            </div>
            <div>
              <label className="text-lg font-mono">
                Description
                <div>
                  <textarea
                  className="p-2 mb-2 border hover:bg-gray-50 w-full mt-1 rounded-lg"
                    value={blog.description}
                    onChange={(e) => {
                      setBlog((prev) => {
                        return { ...prev, description: e.target.value };
                      });
                    }}
                    type="text"
                    placeholder="Enter description"
                  />
                </div>
              </label>
            </div>
            <div className="flex justify-end">
              <button
              className="border px-3 py-2 mt-4 "
              type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default CreateBlog;
