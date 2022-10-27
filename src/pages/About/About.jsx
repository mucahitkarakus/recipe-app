import Navbar from "../../components/Navbar/Navbar";
const About = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <div className="flex justify-center flex-col items-center mt-[5rem]">
          <img
            src="https://camo.githubusercontent.com/07e0b24d090820dcb96f901613ac5e7f6daab72303306a0751b6b2f271f2c7c2/68747470733a2f2f7468756d62732e6766796361742e636f6d2f4578656d706c6172794661697246656c696e652d6d61782d316d622e676966"
            alt=""
            width="350px"
          />
          <div className="text-center w-[25rem] ">
            <p className="mt-10">
              I'm Mücahit, a full-time Full-Stack Developer 👨‍💻
            </p>
            <p className="text-2xl mt-5 font-semibold  ">
              🔭 I’m currently student at bootcamp Clarusway
            </p>

            <p className="text-xl mt-5 leading-8">
              🌱 I’m currently learning Full Stack Development
            </p>
            <p>❓ I'm 25 years old, from Turkey. learning enthusiast.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
