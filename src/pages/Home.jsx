import React, { useEffect, useState } from 'react'
import {BlogProvider} from '../context/BlogContext'
import CreateBlog from '../components/CreateBlog'

function Home() {

    const[blogs, setBlogs]= useState([])

    const addBlog =(blog)=>{
        setBlogs((prev)=>{[...prev, {id: Date.now(), ...blog}]})
    }


    useEffect(()=>{
        const blogs= JSON.parse(localStorage.getItem("blogs"))
        if (blogs) {
            setBlogs(blogs)
        }
    },[])

    useEffect(()=>{
        todos
    },[])

  return (
    <BlogProvider value={{blogs, addBlog, updateBlog, deleteBlog}} >
        <CreateBlog />
    </BlogProvider>
  )
}

export default Home
