import React from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
//   const links = [
//     {
//       id: 1,
//       child: (
//         <>
//           Linkdin <FaLinkedin size={30} />
//         </>
//       ),
//       href: "https://www.linkedin.com/in/saianand08/",
//       style: "rounded-tr-md",
//     },
//     {
//       id: 2,
//       child: (
//         <>
//           Github <FaGithub size={30} />
//         </>
//       ),
//       href: "https://github.com/CrypticSai-08",
//     },
//     {
//       id: 3,
//       child: (
//         <>
//           Mail <HiOutlineMail size={30} />
//         </>
//       ),
//       href: "mailto:hellosaianand@gmail.com",
//     },
//     {
//       id: 4,
//       child: (
//         <>
//           Leetcode <FaCode size={30} />
//         </>
//       ),
//       href: "https://leetcode.com/CrypticSai/",
//       style: "rounded-br-md",
//     },
//   ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-tr-md" }>
            <a
              href="https://www.linkedin.com/in/saianand08/ " target="_blank"
              className="flex justify-between items-center w-full text-white "
            >
                Linkdin<FaLinkedin size={30}/>
            </a>
          </li>

          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300"}>
            <a
              href="https://github.com/CrypticSai-08" target="_blank"
              className="flex justify-between items-center w-full text-white "
            >
                Github<FaGithub size={30}/>
            </a>
          </li>

          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300"}>
            <a
              href="https://leetcode.com/CrypticSai/" target="_blank"
              className="flex justify-between items-center w-full text-white "
            >
                Leetcode<FaCode size={30}/>
            </a>
          </li>

          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-br-md"}>
            <a
              href="mailto:hellosaianand@gmail.com" target="_blank"
              className="flex justify-between items-center w-full text-white "
            >
                Mail<HiOutlineMail size={30}/>
            </a>
          </li>

      </ul>
    </div>
  );
};

export default SocialLinks;
