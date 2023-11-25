import React from "react";
import WorkCard from "../../chip/WorkCard";

const Work = () => {
  return (
    <div id="works" className="container m-auto mt-16 border">
      <div className="mb-5">
        <h3 className="text-5xl font-black text-gray-400 sm:text-2xl">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div className="left flex-1 w-full mb-24">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are some of my works.
        </p>
      </div>
      <div className="card-wrapper w-fit sm:w-full">
        <div className="card-box grid gap-48 md:gap-4 w-full">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
