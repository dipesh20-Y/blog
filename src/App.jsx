import React, { useEffect, useState } from "react";
import { BlogProvider } from "./context/BlogContext";
import List from "./components/List";
import { Link } from "react-router-dom";
import Header from "./components/Header";
function App() {
  const [blogs, setBlogs] = useState(() => {
    const localStorageValue = window.localStorage.getItem('blogs')
    if (localStorageValue && localStorageValue !== 'undefined') {
      return JSON.parse(localStorageValue)
    }
    return []
  })
  // const[isSearchClicked, setIsSearchClicked] = useState(false)
  const [search, setSearch] = useState('')
  var searchedBlog = []

  const addBlog = (blog) => {
    console.log(blog);
    return setBlogs((prev) => [...prev, { id: Date.now(), ...blog }]);
  };

  // useEffect(() => {
  //   const blogs = JSON.parse(localStorage.getItem("blogs"));
  //   console.log(blogs);
  //   if (blogs) {
  //     setBlogs(blogs);
  //   }
  // }, []);

  useEffect(() => {
    console.log(blogs )
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  // useEffect(()=>{
  // setBlogs( blogs.filter((blog)=>blog.title.includes(search)))
  // },[search])

  // const handleSearch =(e)=>{
  //   setIsSearchClicked(true)
  //   console.log(search)
  //   search && (
  //     searchedBlog = blogs.filter((blog)=>blog.title.include(search))
      
      
  //   )
  //   console.log(searchedBlog);
  // }

  return (
    <BlogProvider value={{ blogs, addBlog }}>
      <div>
        <Header />
        <div className=" flex justify-between  mr-24 mt-24 items-center">
          <div className="mt-16 ml-16">
            <button className="  bg-blue-700 hover:bg-blue-800 transition hover:translate-x-2 rounded-md py-2 px-3 mt-8 text-white  text-lg">
              <Link to="/createBlog"> Add Blog </Link>
            </button>
          </div>
          <div className="mt-24">
            <form  className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="Search Blogs..."
                  required
                  onChange={(e)=>{setSearch(e.target.value)}}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col  flex-wrap justify-center  items-center mt-36">
          <div className="text-5xl mt-24  font-bold">Our Latest Blogs</div>
          {/* {isSearchClicked ? (
            searchedBlog &&
            searchedBlog.map((blog) => {
              return (
                <List
                  key={blog.id}
                  title={blog.title}
                  description={blog.description}
                />
              );
            })
          ) : (
            blogs &&
            blogs.map((blog) => {
              return (
                <List
                  key={blog.id}
                  title={blog.title}
                  description={blog.description}
                />
              );
            })
          ) } */}
          
          {blogs.length>0 &&
            blogs.map((blog) => {
              return (
                <List
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  description={blog.description}
                />
              );
            })}
        </div>
      </div>
    </BlogProvider>
  );
}

export default App;
