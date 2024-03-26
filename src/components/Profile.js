import React from "react";
import Navbar from "../Navigation/Navbar";
import ProfileNavigation from "../Navigation/ProfileNavigation";
import Order from "../Profile_Pages.js/Order";
import Address from "../Profile_Pages.js/Address";
import { useSelector } from "react-redux";
import { activestate } from "../Authentication/AuthSlice";

export default function Profile() {
  const active = useSelector(activestate);
  return (
    <div className="w-full">
      <Navbar />
      <div className=" pt-20">
        <div className="col-span-1">
          <ProfileNavigation />
        </div>
        <div
          className=""
          style={{ display: active === "order" ? "block" : "none" }}
        >
          <Order />
        </div>
        <div  className='' style={{display:active==="Address"?"block":"none"}}>
        <Address/>
        </div>
      </div>
    </div>
  );
}
