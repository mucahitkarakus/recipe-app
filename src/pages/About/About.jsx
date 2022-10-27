import React from "react";
import resim from "../../assets/coding.svg";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col items-center justify-center  ">
        <div>
          <img src={resim} alt="logo-about" />
        </div>
        <div className="w-[50rem] h-[20rem] mt-10  ">
          <h1>Hello My name is Teddy</h1>
          <p>
            🔭 I’m currently student at bootcamp Clarusway <br /> 🌱 I’m
            currently learning Full Stack Development <br /> ❓ I'm 25 years
            old, from Turkey. learning enthusiast. <br />
          </p>
          <div className="mt-10">
            <a className=" font-semibold text-[20px]">
              Send E-mail : Mocococo.80@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
