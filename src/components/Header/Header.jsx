import React from "react";
import Form from "./Form";
import RecipeCard from "../../pages/Home/RecipeCard";

const Header = () => {
  return (
    <div className="">
      <h1 className="text-center font-semibold text-[50px] mt-5  ">Food App</h1>
      <Form />
      <RecipeCard />
    </div>
  );
};

export default Header;
