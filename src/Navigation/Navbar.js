import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
  const [profile, setProfile] = useState(false);

  return (
    <div
      className="flex justify-evenly items-center gap-6 h-20  w-full "
      style={{ backgroundColor: "#F0F8FF" }}
    >
      <div className="hidden md:flex justify-evenly gap-6 ">
        <div>
         < Link to="/" > <FaBook size={35} className="text text-green-600 cursor-pointer" /></Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to={'/books'}>Books</Link>
        </div>
        <div>
          <Link to={'/products'}>Featured</Link>
        </div>
      </div>
      <div className="font-extrabold font-lato cursor-pointer">
        <FaBook size={35} className=" text text-green-600 cursor-pointer lg:hidden md:hidden" />
        <Link to="/" className="hidden lg:flex">Bookly.com</Link>

      </div>
      <div className="flex justify-evenly gap-6">
        <div className="flex">
          <div className="flex ">
            <input
              type="text"
              name="text"
              placeholder="search users..."
              className="bg-white  outline-none p-2 rounded"
            />
            <button
              type="submit"
              className="p-2 text-center text-blue-500  bg-white border-l"
            >
              Search
            </button>
          </div>
        </div>
        <div>
          < Link to="/cart"><CiShoppingCart size={25} className="cursor-pointer" /></ Link>
        </div>
        <div>
         <Link to={"/profile"}> <CiUser
            size={25}
            className="cursor-pointer"
            onClick={() => setProfile(!profile)}
          /></Link>
          <div className="absolute my-8 ml-10 ">
            <ul
              className={`${profile ? 'flex' : 'hidden'} flex-col justify-center items-center p-2 gap-2 ml-[-4rem] w-24 rounded`}
              style={{ backgroundColor: "#F0F8FF" }}
            >
              <li><Link to="/">Accounts</Link></li>
              <li><Link to="/">Favourites</Link></li>
              <li><Link to="/">Orders</Link></li>
              <li><Link to="/">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
