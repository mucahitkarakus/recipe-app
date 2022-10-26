import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="container justify-between">
        <div>
          <h1 className="text-red-600 font-semibold ">Delicious</h1>
        </div>
        <div>
          <a href="#" className="hover:text-red-600">
            Home
          </a>
          <a href="#" className="hover:text-red-600">
            About
          </a>
          <a href="#" className="hover:text-red-600">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
