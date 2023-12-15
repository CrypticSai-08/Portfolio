import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import aws from "../assets/aws.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import canva from "../assets/canva.png";

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
      src: js,
      title: "JS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-white-500",
    },
    {
      id: 5,
      src: node,
      title: "NODE",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-blue-500",
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
      style: "shadow-violet-500",
    },
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
  ];
  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-600 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mb-56">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-300 justify-center ">
              Skills
            </p>
          </div>
          <div>
            <p className="text-xl py-6">Technologies I worked</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {
              (tech.map = ({ id, src, title, style }) => (
                <div key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg $(style)`}>
                  <img src={src} alt="" className="mx-auto w-20" />
                  <p className="mt-4">{title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
