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
              src='https://cdn.discordapp.com/attachments/853242550243557408/1142878629441835158/Portfolio.jpg'
              
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
