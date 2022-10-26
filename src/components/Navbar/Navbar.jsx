import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-blue-300">
      <div className="flex justify-between items-center  ">
        <div className="m-5 font-semibold text-[20px]">
          <a href="">Recipe</a>
        </div>
        <div className="font-semibold text-[20px]">
          <Link to clLinkssName="mr-[10rem]">
            About
          </Link>
          <a href="https://github.com/mucahitkarakus" className="mr-[10rem]">
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
