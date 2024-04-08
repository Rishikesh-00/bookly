import React from 'react'
import { FaBook } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <footer className="bg-slate-600 text-white py-8 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex justify-center items-center flex-col mb-4 lg:mb-0 p-4">
            <FaBook size={30} className="text text-green-600 cursor-pointer" />
          <div className='flex flex-col justify-center items-center'>
            <p className="text-lg font-bold">Bookly.com</p>
            <p className="text-sm">Discover the joy of reading</p>
          </div>
        </div>

        <div className="mb-4 lg:mb-0">
          <h3 className="text-lg font-bold mb-2">Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Books</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Contact Details</h3>
          <p>Email: keshrishi1789@gmail.com</p>
          <p>Customer Care No: 1112223330</p>
          <p>Location: 1234 Bookly.com Lane, jaipur,Rajasthan,India</p>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-400" />
      <div className="text-center text-sm mt-4">© 2024 Bookly.com. All rights reserved.</div>
    </footer>
    </div>
  )
}

