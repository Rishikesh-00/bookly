import React from 'react'
import '../css/main.css'
export default function SectionThree() {

  const products = [
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "The Great Gatsby",
      reviews: 120,
      rating: 4.5,
      price: 15.99,
      discountPercentage: 10,
      description: "The Great Gatsby is a novel by American author F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "To Kill a Mockingbird",
      reviews: 95,
      rating: 4.8,
      price: 12.50,
      discountPercentage: 15,
      description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
  ];

  const arr = [1, 1, 1]

  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center bg-gray p-2 pl-20 pr-20 '>
        <p className='pt-20 text-3xl sansita-regular-italic underline'>Catalog</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 md:flex-row'>
          {/* left div */}
          <div className=' flex justify-center items-center flex-col'>
            <img src={products[0].image} alt={products[0].title} className=' h-[80vh] object-contain rounded-lg sm:mx-auto md:mx-0' />


            <div className='py-2 sm:p-2'>
              <p className='  chathura-regular text-gray-green text-4xl'>{products[0].title}</p>
              <div className='pl-2'>
                {arr.map(() =>
                  <span className='text text-dark-orange-1000 text-xl'>&#9733; </span>
                )}
                <span className='charmonman-regular text-dark-orange-1000'>{products[0].reviews} reviews</span>
              </div>
              <div className='pl-2'>
                <span className=' line-through pr-2 text-gray-green'>&#x20B9; {products[0].price}</span>
                <span className='pr-2 text-gray-green sansita-regular'> &#x20B9;{Math.round(products[0].price - (products[0].price * products[0].discountPercentage / 100))}</span>
                <span className='text-dark-orange-1000 charmonman-regular text-sm'>{products[0].discountPercentage}% Save</span>
                <p className='w-[400px] rufina-regular overflow-hidden line-clamp-3'>{products[0].description}</p>
                <div className='flex flex-col md:flex-row gap-4 md:gap-20 pt-2'>
                  <button className='text text-white px-5 py-2 bg-gray-green rounded-full text-base shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] sansita-regular'>Add to Cart</button>
                  <button className='text text-white px-5 py-2 bg-green-700 rounded-full text-base shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] sansita-regular'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          {/* right div */}
          <div className='grid gap-y-4 '>
            {products.map((data, index) => {
              return (
                <div key={index} className='  p-4   grid grid-cols-1 sm:grid-cols-2  border-green-50 gap-1 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
                  <div className="flex justify-center items-center ">
                    <img src={data.image} alt={products[0].title} className='w-full h-40 object-contain' />
                  </div>

                  <div className='py-4 flex flex-col justify-center '>
                    <p className='chathura-regular text-gray-green text-4xl text-center md:text-left'>{data.title}</p>
                    <div className='pl-4 '>
                      {arr.map(() =>
                        <span key={index} className='text text-dark-orange-1000 text-xl'>&#9733; </span>
                      )}
                      <span className='charmonman-regular text-dark-orange-1000'>{data.reviews} reviews</span>
                    </div>
                    <div className='pl-4'>
                      <span className=' line-through pr-2 text-gray-green'>&#x20B9; {data.price}</span>
                      <span className='pr-2 text-gray-green sansita-regular'> &#x20B9;{Math.round(data.price - (data.price * data.discountPercentage / 100))}</span>
                      <span className='text-dark-orange-1000 charmonman-regular text-sm'>{data.discountPercentage}% Save</span>
                      <p className='rufina-regular overflow-hidden line-clamp-2 text-center md:text-left'>{data.description}</p>
                      <div className='flex flex-col md:flex-row gap-4 md:gap-20 pt-2 justify-center md:justify-start'>
                        <button className='text text-white px-5 py-2 bg-gray-green rounded-full text-base shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] sansita-regular'>Add to Cart</button>
                        <button className='text text-white px-5 py-2 bg-green-700 rounded-full text-base shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] sansita-regular'>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )


}
