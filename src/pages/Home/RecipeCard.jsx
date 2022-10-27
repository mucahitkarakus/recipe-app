import React from "react";

const RecipeCard = () => {
  return (
    <div className="">
      <div className="bg-blue-400 w-[250px] h-[350px] rounded-xl flex flex-col items-center justify-center ">
        <img
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
          alt=""
          className="w-[150px] rounded-xl "
        />
        <button className="mt-10 bg-white w-[10rem] h-[2rem] rounded-[20px] text-blue-400 ">
          Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
