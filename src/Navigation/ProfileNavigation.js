import React from 'react';
import { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoPower } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { activestate, changeProfileNavigationAsync } from "../Authentication/AuthSlice";
export default function ProfileNavigation() {
  const [open, setOpen] = useState(false);
  const dispatch=useDispatch();
  const active =useSelector(activestate);
  return (
    <div className="grid grid-cols-4 fixed">
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } bg-green-200 h-screen p-5  pt-8 relative duration-300`}
      >
        <FaGreaterThan
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
       
        <ul className="pt-6">
          <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-xl items-center gap-x-4 mt-2 ${active === "order" ? "bg-green-300" : "bg-green-200"}`} onClick={()=>{dispatch(changeProfileNavigationAsync("order"))}} >
            <FaBagShopping />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Your Order
            </span>
          </li>
          <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-xl items-center gap-x-4 mt-2 ${active === "Address" ? "bg-green-300" : "bg-green-200"}`} onClick={()=>{dispatch(changeProfileNavigationAsync("Address"))}}  >
            <MdLocationPin />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Address
            </span>
          </li>
          <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-xl items-center gap-x-4 mt-2 ${active === "EditProfile" ? "bg-green-300" : "bg-green-200"}`} >
            <FaUserEdit />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Edit Profile
            </span>
          </li>
          <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-xl items-center gap-x-4 mt-2 ${active === "Notification" ? "bg-green-300" : "bg-green-200"}`} >
            <IoMdNotifications />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Notification
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-xl items-center gap-x-4 mt-2">
            <IoMdSettings />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Setting
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-xl items-center gap-x-4 mt-2">
            <IoPower />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold underline font-lato">My Profile</h1>
      </div>
    </div>
  );
}
