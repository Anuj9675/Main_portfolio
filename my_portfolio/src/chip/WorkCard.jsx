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
            className="flex md:flex-col flex-row gap-72 md:gap-6 justify-evenly"
          >
            <div className="flex-1 max-w-[380px]">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-gray-800 text-5xl md:text-3xl font-medium mb-4">
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
                    className="rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium text-black"
                  >
                    <RxExternalLink className="bg-white rounded-full border w-[35px] h-[35px] p-2" />
                    <p>View</p>
                  </Link>
                  <Link
                    to={workData.git}
                    target="_blank"
                    className="rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium text-black"
                  >
                    <AiOutlineGithub className="bg-white rounded-full border w-[35px] h-[35px] p-2" />
                    <p>Code</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[40%]">
              <div className="relative rounded-md overflow-hidden shadow-md">
                <img src={workData.img} alt={workData.title} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;