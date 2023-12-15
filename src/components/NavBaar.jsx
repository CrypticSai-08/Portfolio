import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll/modules";

const NavBaar = () => {
  const [Nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      links: "home",
    },

    {
      id: 2,
      links: "about",
    },

    {
      id: 3,
      links: "Experience",
    },

    {
      id: 3,
      links: "projects",
    },

    {
      id: 4,
      links: "Skills",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed px-4 ">
      <div>
        <h1 className="text-4xl font-signature ml-2">Sai Anand</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, links }) => (
          <li
            key={id}
            className="px-5 cursor-pointer capitalize font-semibold text-gray-400 hover:scale-105 duration-200"
          >
            <Link to={links} smooth duration={500}>
              {links}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!Nav)}
        className="cursor-pointer px-4 z-10 text-gray-400 md:hidden"
      >
        {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {Nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-white text-gray-700 text-5xl">
          {links.map(({ id, links }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-5xl"
            >
              <Link
                onClick={() => setNav(!Nav)}
                to={links}
                smooth
                duration={500}
              >
                {links}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBaar;
