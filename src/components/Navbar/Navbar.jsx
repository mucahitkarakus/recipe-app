import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-blue-300">
      <div className="flex justify-between items-center  ">
        <div className="m-5 font-semibold text-[20px]">
          <a href="">Recipe</a>
        </div>
        <div className="font-semibold text-[20px]">
          <a href="" className="mr-[10rem]">
            About
          </a>
          <a href="" className="mr-[10rem]">
            GıtHub
          </a>
          <a href="" className="mr-[10rem]">
            LogOut
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
