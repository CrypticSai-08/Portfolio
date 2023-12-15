import React from "react";
import Destination1 from "../assets/Destination1.png";
import KumbhSathi from "../assets/KumbhSathi.png";
import Resume from "../assets/Resume.png";
import Homestay from "../assets/Homestay.png";
import FaGithub from "react-icons/fa";

function Projects() {
  const project = [
    {
      id: 1,
      src: KumbhSathi,
    },
    {
      id: 2,
      src: Resume,
    },
    {
      id: 3,
      src: Homestay,
    },
  ];
  return (
    <div
      name="projects"
      className="w-full h-screen bg-gradient-to-b from-red-300 via-gray-200 to-gray-100 text-red-500 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-56">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-300 justify-center">
              Projects
            </p>
          </div>

          {/* Code For making and Structure of Whole card */}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:-px-0">
            {project.map(({ id, src }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <p className="py-3 p-3">
                    Embark on a sacred digital journey with Kumbh Sathi, your
                    guide to divine wisdom and soulful connection. Explore
                    ancient rituals, mesmerizing art, and transcendent
                    experiences from your screen. Join a global congregation,
                    embracing unity and spiritual harmony. Trust Kumbh Sathi for
                    an ethereal pilgrimage. 🙏🕊️🌸
                  </p>
                </div>
                <div>
                  <button className="w-1/4 py-2 px-1 m-3 duration-200 hover:scale-105">
                    Github{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
