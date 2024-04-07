import React from 'react'

export default function SectionFive() {
  return (
    <div className='pt-8 p-4 bg-lime-200'>

                {/* <p className='text-3xl sansita-regular-italic text-center underline'>Trending On Top</p> */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[80vh]'>
                <div className='flex justify-center items-center order-first md:order-none'>
                        <img className='rounded' src="https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_1280.jpg" alt="book reading pic" style={{ height: "90%" }} />
                    </div>

                    <div className='flex flex-col justify-center items-center md:pl-10'>
                        <div className="flex flex-col items-center justify-center h-full">
                            <div >
                                <span className='text-xl  '>Stay ahead of the curve with our top trending reads! Explore the latest sensations captivating readers worldwide, handpicked for your enjoyment. From bestsellers igniting conversations to hidden gems awaiting discovery, delve into our curated selection and experience the pulse of contemporary literature. Elevate your reading experience and join the literary conversation with our trending on top section. </span>
                                
                            </div>
                            <div className='flex flex-col md:flex-row gap-4 md:gap-20 pt-10'>
                                <button className='text text-white px-6 py-2 bg-gray-green rounded-full text-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] sansita-regular'>View Collection</button>
                                {/* <button className='text text-white px-6 py-2 bg-green-700 rounded-full text-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] sansita-regular'>Trending</button> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
  )
}
