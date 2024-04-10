import React from 'react'

export default function SectionFour() {
    return (
      
            <div className='pt-8 p-4 ' style={{backgroundColor:"#E3E6F3"}}>

                <p className='text-3xl sansita-regular-italic text-center underline'>Trending On Top</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[80vh]'>
                    <div className='flex flex-col justify-center items-center md:pl-10'>
                        <div className="flex flex-col items-center justify-center h-full">
                            <div >
                                <span className='text-2xl lg:text-4xl '>Unlock <span className='sansita-bold-italic'> the door to a world of imagination and exploration.</span></span>
                                <span className='text-2xl lg:text-4xl'>Dive into our online book emporium </span>
                                <span className='text-2xl lg:text-4xl '>and discover the treasures that await within the pages of our  <span className='satisfy italic text-green-800'>curated collection.</span></span>
                            </div>
                            {/* <div className='flex flex-col md:flex-row gap-4 md:gap-20 pt-10'>
                                <button className='text text-white px-6 py-2 bg-gray-green rounded-full text-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] sansita-regular'>Shop now</button>
                                <button className='text text-white px-6 py-2 bg-green-700 rounded-full text-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] sansita-regular'>Trending</button>
                            </div> */}
                        </div>
                    </div>
                    <div className='flex justify-center items-center order-first md:order-none'>
                        <img className='rounded' src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="book reading pic" style={{ height: "90%" }} />
                    </div>
                </div>
            </div>
        
    )
}
