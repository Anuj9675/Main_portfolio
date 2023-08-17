import React from "react";
import SkillBox from "../../chip/SkillBox";




import {
  SiHtml5, SiReact, SiTailwindcss, SiJavascript
} from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            
            
              </div>
            </div>
          </div>
          
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<SiHtml5/>}
                black={"white"}
                white={"black"}
                skill={"HTML"}
              />
              <SkillBox
                logo={<SiTailwindcss />}
                black={"white"}
                white={"black"}
                skill={"TAILWINDCSS"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiReact />}
                black={"black"}
                white={"white"}
                skill={"REACT"}
              />
              <SkillBox
                className=""
                logo={
                  <SiJavascript/>
                }
                black={"black"}
                white={"white"}
                skill={"JAVA SCRIPT"}
              />
              
            </div>
          </div>
        </div>

  );
};

export default Skills;