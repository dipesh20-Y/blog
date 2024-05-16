import React from 'react'
// import ReadMore from './ReadMore'
// import { Link } from 'react-router-dom'

function List(props) {
  // const handleReadMore = () => {
  //   history.push({
  //     pathname: '/Readmore',
  //     state: {
  //       title: props.title,
  //       description: props.description
  //     }
  //   });
  // };

 console.log(props.id)
  return (
    <div className='p-4 my-4 mx-8 border w-1/2 min-h-64 shadow-lg transition hover:translate-x-2'>
     
     <div className='mb-8 '>
     <div className='p-4  mb-2 text-2xl font-bold font-mono border-b-2'>{props.title}</div>
    
      <p className='p-4 truncate'>{props.description}</p>
      
     </div>
     <div className='flex justify-end '>
      <button 
      // onClick={handleReadMore}
      className='border px-3 py-2 bg-gray-500 text-white' >
         Read more 
       </button>
     </div>
    </div>
  )
}

export default List
