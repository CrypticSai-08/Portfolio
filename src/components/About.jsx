import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="mb-24">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-300 justify-center">
              About
            </p>
          </div>
          <p className="text-xl ">
            Hello there! I'm <b>C Sai Anand</b>, a passionate final-year
            engineering graduate with a hunger for learning and a vision for a
            better future. Proficient in problem-solving and armed with a robust
            analytical background, Specialize frontend development across
            diverse technologies.
          </p>

          <br />
          <p className="text-xl">
            AWS certified cloud practitioner, I excel in creating scalable web
            applications and managing cloud solutions. With over 300
            problem-solving successes on LeetCode, my focus is on frontend
            development skills and creating innovative solutions.
          </p>

          <div className="mt-36">
            <div>
              <p className="text-4xl font-bold inline border-b-4 border-gray-300 justify-center">
                Education
              </p>
            </div>

            <div className="flex flex-row pt-4">
              <div className="m-2 p-3 border-spacing-2 border border-gray-500 w-1/2">
                <div>
                  <span className="text-gray-900 font-bold">
                    {" "}
                    Matriculation :-{" "}
                  </span>{" "}
                  Bethany Convent School
                </div>
                <div>
                  <span className="text-gray-900 font-bold"> Year :- </span>{" "}
                  2017{" "}
                </div>
                <div>
                  <span className="text-gray-900 font-bold"> CGPA :- </span>{" "}
                  9.4/10{" "}
                </div>
              </div>
              <div className="m-2 p-3 border-spacing-2 border border-gray-500 w-1/2">
                <div>
                  <span className="text-gray-900 font-bold">
                    {" "}
                    Intermediate :-{" "}
                  </span>{" "}
                  Bethany Convent School
                </div>
                <div>
                  <span className="text-gray-900 font-bold"> Year :- </span>{" "}
                  2019{" "}
                </div>
                <div>
                  <span className="text-gray-900 font-bold"> CGPA :- </span>{" "}
                  78.8{" "}
                </div>
              </div>
              <div className="m-2 p-3 border-spacing-2 border border-gray-500 w-1/2">
                <div>
                  <span className="text-gray-900 font-bold">
                    {" "}
                    Graduation :-{" "}
                  </span>{" "}
                  Vellore Institute of Technology,Bhopal
                </div>
                <div>
                  <span className="text-gray-900 font-bold"> Year :- </span>{" "}
                  2017{" "}
                </div>
                <div>
                  <span className="text-gray-900 font-bold"> CGPA :- </span>{" "}
                  8.01/10{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
