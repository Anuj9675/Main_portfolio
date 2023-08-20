import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";


const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-sky-400 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Anuj Upadhyay
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Front-End Developer",
                2000,
                "React Developer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-400 text-4xl font-bold sm:text-3xl"
            />
            <p
              className=" text-[1.1rem] font-large w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              I'm a Web Developer. I specialize in Frontend Developing and am looking forward to learning Fullsatck Development soon.
              I'm passonate about creating visually appealing and functional websites.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href=""
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/Anuj9675">
                  
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anuj-upadhyay-a973b0238/">
                  
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/anuj.upadhyay_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                  
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />
                </a>
              </li>
              <li>
                <a href=" mailto: anujupadhyay6265@gmail.com">
                  
                  <SiGmail className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />
                </a>
              </li>  
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[90%] w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src='data:image/jpeg;base64,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'
              
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
