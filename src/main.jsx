import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import CreateBlog from './components/CreateBlog.jsx';
import './index.css';
// import ReadMore from './components/ReadMore.jsx';
import Contact from './components/Contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        {/* <Route path="/Readmore" element={<ReadMore />} /> */}
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
