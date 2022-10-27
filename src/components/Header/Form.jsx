import React from "react";

const Form = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <input
          className="bg-blue-400 border-none m-[20px] h-[40px] w-[200px] rounded-xl text-white outline-none placeholder-white  "
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <button className="text-white bg-blue-400 h-[40px] w-[100px] rounded-xl ">
          Search
        </button>
      </div>
      <div className="ml-5">
        <select
          name=""
          id=""
          className="w-[150px] h-[40px] text-white bg-blue-400 rounded-xl  "
        >
          <option value="">Breakfast</option>
          <option value="">Brunch</option>
          <option value="">Lunch</option>
          <option value="">Dinner</option>
          <option value="">TeaTime</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
