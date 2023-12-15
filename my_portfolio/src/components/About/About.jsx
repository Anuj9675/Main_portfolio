import React from "react";

const About = () => {
    return (
    <div id="about">
      <div className=" container m-auto  mt-16">
        
        <div  className="relative mb-5">
          <h3 className=" text-5xl font-black text-gray-400 sm:text-2xl">
            About
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
            
              className=" text-gray-700 font-medium w-[100%]"
            >
              Myself.
            </p>
            
              </div>
            </div>
          </div>
          <div className="container m-12">
            <p className="text-lg">
            I am a web developer with a Bachelor's degree in Computer Science. Despite the skills I've acquired so far, I'm looking forward to learning more and improving them. I dive into coding adventures daily. Seeking to transform ideas into impactful online realities, I'm dedicated to mastering the craft. Let's collaborate and bring visions to life in the digital realm!
            </p>
          </div>
        </div>
    );
};


export default About;