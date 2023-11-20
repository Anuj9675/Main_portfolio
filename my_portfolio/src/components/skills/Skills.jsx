import React from "react";
import SkillBox from "../../chip/SkillBox";
import {
  SiHtml5, SiReact, SiTailwindcss, SiJavascript, SiCss3, SiGithub, SiPostman, 
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        
        <div  className="relative mb-5">
          <h3 className=" text-5xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p

              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            
              </div>
            </div>
          </div>

          <div className="flex justify-center md:flex-row md:flex-wrap p-5 gap-4">
    <div className="flex flex-col gap-4">
      <SkillBox
        logo={<SiHtml5/>}
        black={"white"}
        white={"black"}
        skill={"HTML"}
      />
      <SkillBox
        logo={<SiCss3 />}
        black={"white"}
        white={"black"}
        skill={"CSS"}
      />
    </div>
    <div className="flex flex-col gap-4">
      <SkillBox
        logo={<SiReact />}
        black={"black"}
        white={"white"}
        skill={"REACT"}
      />
      <SkillBox
        logo={<SiJavascript/>}
        black={"black"}
        white={"white"}
        skill={"JAVA SCRIPT"}
      />
    </div>
    <div className="flex flex-col gap-4">
      <SkillBox
        logo={<SiGithub/>}
        black={"white"}
        white={"black"}
        skill={"GitHub"}
      />
      <SkillBox
        logo={<SiTailwindcss />}
        black={"white"}
        white={"black"}
        skill={"Tailwindcss"}
      />
    </div>
    <div className="flex flex-col gap-4">
      <SkillBox
        logo={<TbBrandNextjs />}
        black={"black"}
        white={"white"}
        skill={"NextJS"}
      />
      <SkillBox
        logo={<SiPostman />}
        black={"black"}
        white={"white"}
        skill={"Postman"}
      />
    </div>
  </div>

        </div>

  );
};

export default Skills;