import React from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import useQuery from '../useQuery'

function ReadMore({blogs}) {
    var block=[];
    const query = useQuery()
    const id= query.get('id')
    if (blogs) {
        console.log(blogs)
         block = blogs.find((blog)=>blog.id ==id)
        console.log(block)
    }
    
   
 
  return (
    <div className="p-4 my-4 mx-8 border w-fit min-h-64 shadow-lg transition hover:translate-x-2">
     {block && 
     <>
      <div className="mb-8 ">
        <div className="p-4  mb-2 text-2xl font-bold font-mono border-b-2">
          {block.title}
        </div>

        <p className="p-4 ">{block.description}</p>
      </div>
      <div className="flex justify-end ">
        <button
          className="border px-3 py-2 bg-gray-500 text-white"
        >
          <Link to='/'>Back </Link>
        </button>
      </div>
     </>
     }
    </div>
  )
}

export default ReadMore
