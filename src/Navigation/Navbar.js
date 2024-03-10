import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
  const [profile, setProfile] = useState(false);

  return (
    <div
      className="flex justify-evenly items-center gap-6 h-20 fixed w-full"
      style={{ backgroundColor: "#F0F8FF" }}
    >
      <div className="hidden md:flex justify-evenly gap-6 ">
        <div>
          <FaBook size={35} className="text text-green-600 cursor-pointer" />
        </div>
        <div>
          <Link>Home</Link>
        </div>
        <div>
          <Link>Books</Link>
        </div>
        <div>
          <Link>Featured</Link>
        </div>
      </div>
      <div className="font-extrabold font-lato cursor-pointer">
        <FaBook size={35} className=" text text-green-600 cursor-pointer lg:hidden md:hidden" />
        <span className=" hidden lg:flex "> Bookly.com</span>
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
          <CiShoppingCart size={25} className="cursor-pointer" />
        </div>
        <div>
          <CiUser
            size={25}
            className="cursor-pointer"
            onClick={() => setProfile(!profile)}
          />
          <div className="absolute my-8 ml-10 ">
            <ul
              className={`${profile ? 'flex' : 'hidden'} flex-col justify-center items-center p-2 gap-2 ml-[-4rem] w-24 rounded`}
              style={{ backgroundColor: "#F0F8FF" }}
            >
              <li><a href="/">Accounts</a></li>
              <li><a href="/">Favourites</a></li>
              <li><a href="/">Orders</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
