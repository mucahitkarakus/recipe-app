import React from "react";
import logo from "../../assets/log-photo.jpg";
const Login = () => {
  return (
    <div className="logcontainer flex  items-center justify-center  ">
      <div className="flex flex-col items-center justify-center   w-[30rem] h-[30rem]   ">
        <img
          src={logo}
          alt="logo"
          className="w-[13rem] h-[10rem] rounded-full mb-5 "
        />
        <input
          type="text"
          name="nick"
          placeholder="Enter Name"
          className="mb-5 text-white bg-yellow-300 text-black  w-[15rem] h-[2rem] rounded-xl text-center"
        />
        <input
          type="password"
          name="pass"
          placeholder="Enter Passwords"
          className="mb-5 text-white bg-yellow-300 text-black  w-[15rem] h-[2rem] rounded-xl text-center"
        />
        <button className="bg-gray-400 rounded-xl h-[30px] w-[15rem] ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
