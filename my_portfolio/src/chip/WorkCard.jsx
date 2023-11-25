import React from "react";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-row md:flex-col items-center gap-24 md:gap-8"
          >
            <div className="w-full flex justify-center gap-24 md:gap-8">
              <div className="relative rounded-md overflow-hidden shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto md:max-w-full"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="flex-1">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="text-gray-800 text-5xl md:text-3xl font-medium mb-4">
                      {item.title}
                    </p>
                    <p className="text-gray-900 text-lg leading-[1.6] mb-5">
                      {item.desc}
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div className="flex gap-4">
                        <Link
                          to={item.link}
                          target="_blank"
                          className="rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium text-black"
                        >
                          <RxExternalLink className="bg-white rounded-full border w-[35px] h-[35px] p-2" />
                          <p>View</p>
                        </Link>
                        <Link
                          to={item.git}
                          target="_blank"
                          className="rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium text-black"
                        >
                          <AiOutlineGithub className="bg-white rounded-full border w-[35px] h-[35px] p-2" />
                          <p>Code</p>
                        </Link>
                      </div>
                    </div>
                  </div>
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
