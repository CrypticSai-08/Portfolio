import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="mb-52">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300 justify-center">
            About
          </p>
        </div>
        <p className="text-xl ">
          Hello there! I'm C Sai Anand, a passionate final-year engineering
          graduate with a hunger for learning and a vision for a better future.
          Proficient in problem-solving and armed with a robust analytical
          background, Specialize frontend development
          across diverse technologies.
        </p>

        <br />
        <p className="text-xl">
          AWS certified cloud practitioner, I excel in creating scalable web
          applications and managing cloud solutions. With over 300
          problem-solving successes on LeetCode, my focus is on frontend
          development skills and creating innovative solutions.
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
