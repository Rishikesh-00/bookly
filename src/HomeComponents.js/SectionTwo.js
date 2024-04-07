import React from 'react';

export default function SectionTwo() {
  return (
    <div>
      <div className=' flex justify-center flex-col items-center bg-blue-100 pt-2 pb-8  pl-8 pr-10 lg:mt-10 '>
        <p className='pt-2 text-3xl sansita-regular-italic text-center underline'>Category</p> <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Model 1"
              className="w-40 h-44 object-contain"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl ">Fiction</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Model 2"
              className="w-40 h-44 object-contain"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl ">Thriller</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Model 3"
             className="w-40 h-44 object-contain"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl ">Romance</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Model 4"
             className="w-40 h-44  object-contain"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl ">Science Fiction</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Model 5"
             className="w-40 h-44 object-contain"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl ">Horror</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Model 6"
             className="w-40 h-44  object-contain"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl ">History</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Model 7"
             className="w-40 h-44  object-contain"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl ">Psychology</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Model 8"
             className="w-40 h-44  object-contain"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl ">Philosophy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
