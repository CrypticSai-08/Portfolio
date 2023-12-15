import React from "react";
import cloud from "../assets/cloud.png";
import bug from "../assets/bug.png";

function Experience() {
  const exp = [
    {
      id: 1,
      src: cloud,
      title: "AWS CLoud Practioner",
    },
    {
      id: 2,
      src: bug,
      title: "Android Bugging",
    },
  ];
  return (
    <div
      name="Experience"
      className="w-full h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-24">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-300 justify-center">
              Experience & Certifications
            </p>
          </div>
          <div>
            <p className="text-xl ">
              <h1 className="py-2 font-semibold">
                F13 Technologies (AWS Cloud Intern), Apr 2023{" "}
              </h1>
              <li>
                Worked and optimized the migration of web-based applications to
                AWS cloud using AWS EC2 and S3
              </li>
              <li>
                Built a Content Recommendation System (CRS) using AWS
                Personalize and S3
              </li>
              <li>
                Architected an AWS solution for migration of the Indian Railways
                System to the AWS cloud
              </li>
              <li>
                Collaborated and worked on a Windows-based EC2 Virtual Machine
              </li>
            </p>
          </div>

          {/* <div className="rounded-1xl w-1/3 ml-34 " style={{display:"flex", justifyContent:"center"}} >
          <div >
              <img src={cloud} alt="" />
          </div>
          <div >
              <img src={bug} alt="" />
          </div>
        </div> */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 ml-44 py-6 text-center sm:-px-0">
            {exp.map(({ id, src, title }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg `}
              >
                <img
                  src={src}
                  alt=""
                  className="mx-auto w-20"
                  style={{ width: "400px" }}
                />
                <p className="mt-1 ">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
