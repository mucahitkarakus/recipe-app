import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-blue-300">
      <div className="flex justify-between items-center  ">
        <div className="m-5 font-semibold text-[20px]">
          <NavLink to="/home">Recipe</NavLink>
        </div>
        <div className="font-semibold text-[20px]">
          <NavLink to="/About" className="mr-[10rem]">
            About
          </NavLink>
          <a
            href="https://github.com/mucahitkarakus"
            target="_blank"
            className="mr-[10rem]"
          >
            GıtHub
          </a>
          <NavLink to="/" href="" className="mr-[10rem]">
            LogOut
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
