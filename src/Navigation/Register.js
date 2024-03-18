// Register.js
import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/userAuthContext";
import { IoClose } from "react-icons/io5";
import { CreateAccountAsync } from "../Authentication/AuthSlice";
import { useDispatch } from "react-redux";
const Register = () => {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [pswd, setPswd] = useState("");
  const [con_pswd, setCon_pswd] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmObj, setConfirmObj] = useState("");
 const navigate=useNavigate();
 const dispatch =useDispatch();
  const [peye, setPeye] = useState(false);
  const toggle = () => {
    setPeye(!peye);
  };

  const [coneye, setConeye] = useState(false);
  const con_toggle = () => {
    setConeye(!coneye);
  };
  const { setRecatcha } = useUserAuth();
  // const [loading1, setLoading1] = useState(false);
  // const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (number === "" || number === undefined) {
      alert("Number is undefined");
      return;
    }
    if (pswd !== con_pswd) {
      alert("Password doesn't match!");
      return;
    }
    setFlag(!flag);
    // try {
    //   const response=await setRecatcha(number);
    //   setConfirmObj(response);
    // setFlag(!flag);
    // } catch (err) {
    //   console.log(err.message);
    //   return;
    // }
  };
  const handleOTP = async (e) => {
    e.preventDefault();
    // setLoading1(true);
    if (otp === "" || otp === undefined) {
      alert("OTP is undefined");
      return;
    }
    try {
      // await confirmObj.confirm(otp);
      dispatch(CreateAccountAsync({Phone_number:number,username:name,Password:pswd}))
      
      console.log("signup called")
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <section
      
        className={`bg-gray-50 min-h-screen flex items-center justify-center ${
          flag ? "hidden" : "flex"
        }`}
      >
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Sign Up</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <PhoneInput
                defaultCountry="IN"
                required
                placeholder="Mobile Number"
                onChange={(value) => setNumber(value)}
                maxLength={11}
                className="rounded-xl h-8 border"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={peye ? "text" : "password"}
                  name="password"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder="Password"
                  onChange={(e) => setPswd(e.target.value)}
                />
                <div onClick={toggle}>
                  {peye ? (
                    <IoEyeOutline className="absolute top-1/2 right-3 -translate-y-1/2" />
                  ) : (
                    <IoEyeOffOutline className="absolute top-1/2 right-3 -translate-y-1/2" />
                  )}
                </div>
              </div>
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={coneye ? "text" : "password"}
                  name="conpswd"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder="Confirm Password"
                  onChange={(e) => setCon_pswd(e.target.value)}
                />
                <div onClick={con_toggle}>
                  {coneye ? (
                    <IoEyeOutline className="absolute top-1/2 right-3 -translate-y-1/2" />
                  ) : (
                    <IoEyeOffOutline className="absolute top-1/2 right-3 -translate-y-1/2" />
                  )}
                </div>
              </div>
              <div id="recaptcha-container" />
              <button
                type="submit"
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="/">Forgot your password?</a>
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>I have an account?</p>
              <Link
                to="/login"
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="md:block hidden w-1/2 relative">
            <div className="absolute top-0 right-0 bg-black rounded-full"><Link to={'/'}><IoClose size={35} color="white"/></Link></div>
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="Login"
            />
          </div>
        </div>
      </section>

      <section
        className={`bg-gray-50 min-h-screen flex items-center justify-center ${
          flag ? "flex" : "hidden"
        }`}
      >
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <form onSubmit={handleOTP}>
          <div className="flex flex-col justify-center items-center gap-5">
            <FaBook size={35} className="text-green-600 cursor-pointer" />
            <h1 className=" font-bold text-2xl text-[#002D74]">
              Mobile Phone Verification
            </h1>
            <p className="text-center">
              Enter the 6-digit verification code that was sent to <br /> your
              phone number.
            </p>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Enter OTP"
              maxLength={6}
              name="otp"
              id="otp"
              onChange={(e)=>{setOtp(e.target.value)}}
              autoFocus
              className="w-full h-9 text-center border border-gray-400  px-3 rounded-md outline-8"
            />
            <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 w-full">
              Verify Account
            </button>
            <p>
              Didn't receive code?{" "}
              <a href="/" className="text-blue-800 font-bold">
                Resend
              </a>
            </p>
          </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
