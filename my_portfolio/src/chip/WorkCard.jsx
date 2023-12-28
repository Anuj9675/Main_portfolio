import React from "react";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((workData) => {
        return (
          <div
            key={workData.id}
            className="flex flex-row md:flex-col justify-center items-center gap-64 md:gap-4"
          >
            <div className=" w-[40%] md:w-full">
              <div className="relative rounded-md overflow-hidden shadow-md">
                <img src={workData.img} alt={workData.title} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="w-full md:w-[60%] max-w-[380px]">
              <div className="flex flex-col h-full">
                <div>
                  <p className="text-gray-800 text-5xl md:text-3xl font-bold mb-4">
                    {workData.title}
                  </p>
                  <p className="text-gray-900 text-lg leading-[1.6]">
                    {workData.desc}
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link
                    to={workData.link}
                    target="_blank"
                    className="rounded-md shadow-md p-2 flex gap-2 items-center justify-center font-medium text-black"
                  >
                    <RxExternalLink className="bg-white rounded-full border w-6 h-6 p-1" />
                    <p>View</p>
                  </Link>
                  <Link
                    to={workData.git}
                    target="_blank"
                    className="rounded-md shadow-md p-2 flex gap-2 items-center justify-center font-medium text-black"
                  >
                    <AiOutlineGithub className="bg-white rounded-full border w-6 h-6 p-1" />
                    <p>Code</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;
