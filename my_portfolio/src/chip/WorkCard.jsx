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
            className="flex gap-24 items-center flex-col md:flex-row"
            style={{
              flexDirection: 'row-reverse', // Reverses order for mobile view
              '@media (max-width: 768px)': {
                flexDirection: 'column', // Switches to column layout on smaller screens
              },
            }}
          >
            <div className="w-full md:w-[50%] flex justify-center">
              <div className="relative rounded-md overflow-hidden shadow-md">
                <img src={item.img} alt={item.title} />
              </div>
            </div>

            <div className="w-full md:w-[50%] flex justify-center">
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
