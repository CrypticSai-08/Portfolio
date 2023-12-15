import React from "react";

function Experience() {
  return (
    <div
      name="Experience"
      className="w-full h-screen bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300 text-white"
    >

    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-56">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300 justify-center">
            Experience
          </p>
        </div>
        <p className="text-xl ">
          <h1 className="py-2 font-semibold">F13 Technologies (AWS Cloud Intern), Apr 2023 </h1>
          <li>Worked and optimized the migration of web-based applications to AWS cloud using AWS EC2 and S3</li>
          <li>Built a Content Recommendation System (CRS) using AWS Personalize and S3</li>
          <li>Architected an AWS solution for migration of the Indian Railways System to the AWS cloud</li>
          <li>Collaborated and worked on a Windows-based EC2 Virtual Machine</li>
        </p>
        </div>
    </div>
      
    </div>
  );
}

export default Experience;
