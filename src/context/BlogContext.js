import { createContext, useContext } from "react";

export const BlogContext = createContext({

    
    blogs:[
        {
            id:1,
            title: "Start",
            description:"first day"
        }
    ],
    addBlog: (blog)=>{
    },
    updateBlog:(id, Blog)=>{},
    deleteBlog:(id)=>{}
})

export const useBlog= ()=>{
    return useContext(BlogContext)

}

export const BlogProvider = BlogContext.Provider