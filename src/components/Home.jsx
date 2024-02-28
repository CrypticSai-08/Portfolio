import React from "react";
import Hero from "../assets/Hero.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-7xl font-bold text-white ml-20 mr-40">
            Hey Everyone{" "}
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white ml-20 ">
            I'm Sai Anand
          </h2>
          <p className="text-gray-500 py-4 max-w-mid font-semibold ml-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter">
            {" "}
            Final Year Under grad student
          </p>
          <div>
            <button className="text-white w-fix px-7 py-3 flex items-center rounded-md ml-20 bg-gradient-to-r from-gray-800 to-gray-200 cursor-pointer hover:scale-105 duration-200">
              <a
                href="https://drive.google.com/file/d/1Fsu1kFQ_C3kjra1sI54ivlwup0fmiEX1/view?usp=sharing"
                target="_blank" rel="noreferrer"
              >Resume
              </a>
              <span className="px-3">
                <FaArrowRightFromBracket />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={Hero}
            alt="my profile"
            className="rounded-2xl w-2/4 ml-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
