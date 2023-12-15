import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import aws from "../assets/aws.svg";
import nodejs from "../assets/nodejs.svg";
import tailwind from "../assets/tailwind.svg";
import canva from "../assets/canva.svg";
import c from "../assets/c.svg";

function Skills() {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: nodejs,
      title: "NODE",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-black",
    },
    {
      id: 7,
      src: aws,
      title: "AWS",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: canva,
      title: "CANVA",
      style: "shadow-green-200",
    },
    {
      id: 9,
      src: c,
      title: "C++",
      style: "shadow-blue-100",
    },
  ];
  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-600 to-gray-700 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-12">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-400 justify-center ">
              Skills
            </p>
            <p className="text-xl py-6">Technologies I worked</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {tech.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="mx-auto w-20" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
