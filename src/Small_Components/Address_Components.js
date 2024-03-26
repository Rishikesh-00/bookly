import React from 'react';

export default function Address_Component({ data }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 py-6 px-6 sm:px-8 md:px-12 rounded border border-green-300 hover:border-green-600 ml-20'>
      <div className='flex flex-col'>
        <div className='mb-2'>
          <span className='text-gray-green sansita-regular text-base'>Name:</span>
          <span className='ml-1 text-dark-red sansita-regular'>{data.Name}</span>
        </div>
        <div className='mb-2'>
          <span className='text-gray-green sansita-regular text-sm'>Primary Contact Number:</span>
          <span className='ml-1 text-dark-red sansita-regular'>{data.Primary_Contact_Number}</span>
        </div>
        <div className='mb-2'>
          <span className='text-gray-green sansita-regular text-sm'>Secondary Contact Number:</span>
          <span className='ml-1 text-dark-red sansita-regular'>{data.Secondary_Contact_Number}</span>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='mb-2'>
          <span className='text-gray-green sansita-regular text-base'>Street:</span>
          <span className='ml-1 text-dark-red sansita-regular'>{data.Street}</span>
        </div>
        <div className='mb-2'>
          <span className='text-gray-green sansita-regular text-sm'>District:</span>
          <span className='ml-1 text-dark-red sansita-regular'>{data.District}</span>
        </div>
        <div className='mb-2'>
          <span className='text-gray-green sansita-regular text-sm'>State:</span>
          <span className='ml-1 text-dark-red sansita-regular'>{data.State}</span>
        </div>
        <div className='mb-2'>
          <span className='text-gray-green sansita-regular text-sm'>ZipCode:</span>
          <span className='ml-1 text-dark-red sansita-regular'>{data.Pincode}</span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <button className='bg-gray-green text-white py-2 px-6 rounded-full mb-2'>Edit Address</button>
        <button className='bg-red-300 hover:bg-red-500 text-white py-2 px-6 rounded-full'>Delete Address</button>
      </div>
    </div>
  );
}
