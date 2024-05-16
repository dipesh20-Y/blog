import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import CreateBlog from './components/CreateBlog.jsx';
import './index.css';
import Contact from './components/Contact.jsx';
import { BlogProvider } from './context/BlogContext.js';

const Main = () => {
  const [blogs, setBlogs] = useState(() => {
    const localStorageValue = window.localStorage.getItem('blogs');
    if (localStorageValue && localStorageValue !== 'undefined') {
      return JSON.parse(localStorageValue);
    }
    return [];
  });

  const [searchedBlog, setSearchedBlog] = useState(() => {
    const localStorageValue = window.localStorage.getItem('blogs');
    if (localStorageValue && localStorageValue !== 'undefined') {
      return JSON.parse(localStorageValue);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {
    setBlogs((prev) => [...prev, { id: Date.now(), ...blog }]);
    setSearchedBlog((prev) => [...prev, { id: Date.now(), ...blog }]);
  };

  return (
    <React.StrictMode>
      <BlogProvider value={{ blogs, addBlog }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App searchedBlog={searchedBlog} setSearchedBlog={setSearchedBlog} />} />
            <Route path="/createBlog" element={<CreateBlog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </BlogProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
