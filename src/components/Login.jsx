import React from "react";
import resim from "../assets/çatal.jpg";

const Login = () => {
  return (
    <div className=" items-center justify-center mt-5 text-center ">
      <div>
        <h1 className=" text-red-700 font-semibold text-[40px]">Delicious</h1>
        <p className="mt-10 text-[50px] text-blue-200 font-semibold">
          Login to See All of the Delicious Recipes
        </p>
      </div>
      <div className="m-auto mt-20 items-center justify-center w-[400px] h-[400px] bg-blue-200 rounded-xl">
        <div>
          <img className="w-[150px] h-[150px]  m-auto " src={resim} alt="" />
        </div>
        <div className="block mx-auto my-[1rem] p-[.4rem] border-none outline-none font-[1.5rem] border-b  ">
          <input type="text" name="name" placeholder="Your name" className="" />
        </div>
        <div>
          <input
            type="password"
            name="pass"
            placeholder="Your password"
            className=""
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-600 font-[1rem] border-none outline rounded-[10px] cursor-pointer h-[2rem] w-[10rem] text-black mt-10 "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
