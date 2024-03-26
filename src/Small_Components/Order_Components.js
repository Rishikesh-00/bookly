import React from 'react';
import '../css/main.css';

export default function Order_Components({ data }) {
  const arr = [];

  for (let i = 0; i < data.rating; i++) {
    arr.push(1);
  }

  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-16 rounded border border-green-300 hover:border-green-600 ml-3'>
      
      <img src={data.thumbnail} className='p-6 sm:p-8 md:p-12 h-64 sm:h-80 md:h-96 rounded-t sm:rounded sm:rounded-l-none md:rounded-none justify-self-center' alt='Product_image' />
      <div className='p-6 sm:p-8 md:p-12 flex flex-col justify-center'>
        <p className='chathura-regular text-gray-green text-2xl sm:text-3xl md:text-4xl mb-4 text-center'>{data.title}</p>
        <div className='flex items-center justify-center'>
          {arr.map(() => (
            <span key={Math.random()} className='text-dark-orange-1000 '>&#9733; </span>
          ))}
          <span className='charmonman-regular text-orange-800 ml-2'>{data.reviews} reviews</span>
        </div>
        <div className='mb-2 text-center'>
          <span className='line-through pr-2 text-green-800'>&#x20B9; {data.price}</span>
          <span className='pr-2 text-gray-green sansita-regular'>&#x20B9; {Math.round(data.price - (data.price * data.discountPercentage / 100))}</span>
          <span className='text-dark-orange-1000 charmonman-regular text-sm'>{data.discountPercentage}% Save</span>
        </div>
        <div className='mb-2 text-center'>
          <span className='text-gray-green sansita-regular text-lg pr-1'>Payment:-</span>
          <span className='text-red-800 sansita-regular'>{data.paymentMethod}</span>
        </div>
        <div className='mb-2 text-center'>
          <span className='text-gray-green sansita-regular text-lg pr-1'>Address:-</span>
          <span className='text-red-800 sansita-regular'>{data.Address}</span>
        </div>
        <div className='mb-2 text-center'>
          <span className='text-gray-green sansita-regular text-lg pr-1'>Contact:-</span>
          <span className='text-dark-red sansita-regular'>{data.Contact_Number}</span>
        </div>
        <button className='px-7 mt-3 shadow-2xl sansita-regular text-white rounded-full py-2 bg-red-400 hover:bg-red-600 w-full sm:w-auto self-center'>Cancel</button>
      </div>
      <div className='p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center'>
        <div className='mb-2 text-center'>
          <span className='text-gray-green sansita-regular text-lg pr-1'>Delivery up-to:-</span>
          <span className='text-red-800 sansita-regular'>{data.expected_dilevery_date}</span>
        </div>
        <div className='mb-2 text-center'>
          <span className='text-gray-green sansita-regular text-lg pr-1'>Ordered on :-</span>
          <span className='text-red-800 sansita-regular'>{data.dileverd_Date}</span>
        </div>
        <div className='text-center'>
          <span className='text-gray-green sansita-regular text-lg pr-1'>Status:- </span>
          <span className='text-red-800 sansita-regular'>{data.status}</span>
        </div>
      </div>
    </div>
  );
}
