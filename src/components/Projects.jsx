import React from "react";
import KumbhSathi from "../assets/KumbhSathi.png";
import Resume from "../assets/Resume.png";
import Homestay from "../assets/Homestay.png";
import {FaGithub} from "react-icons/fa";

function Projects() {
  const project = [
    {
      id: 1,
      src: KumbhSathi,
      description:
        "Embark on a sacred digital journey with Kumbh Sathi, your guide to divine wisdom and soulful connection. Explore ancient rituals, mesmerizing art, and transcendent experiences from your screen. Join a global congregation, embracing unity and spiritual harmony. Trust Kumbh Sathi for an ethereal pilgrimage 🙏🌸",
    },
    {
      id: 2,
      src: Resume,
      description: "Designed and launched a specialized Resume Maker Website tailored to the VIT Bhopal format. The platform streamlined resume creation for 500+ students, facilitating the generation of professional resumes. This initiative led to a notable 20% increase in interview callbacks, enhancing students' job application success 📝📜",
    },
    { 
      id: 3,
      src: Homestay,
      description: "Crafted an integrated travel accommodation web app for collaborative lodging experiences. Users can find host families with shared interests, while seamless Google Maps ,various services and payment gateway integrations enhance user experience and its functionality encourages to travel more and explore 📍🏠",
    },
    ];
  return (
    <div
      name="projects"
      className="w-full h-screen bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-28">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-300 justify-center">
              Projects
            </p>
          </div>

          {/* Code For making and Structure of Whole card */}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:-px-0">
            {project.map(({ id, src, description }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <p className="py-3 p-3">{description}</p>
                </div>
                <div>
                  <button className="w-1/4 py-2 px-1 m-3 duration-200 hover:scale-105">
                    <FaGithub/>
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

