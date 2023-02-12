import React from "react";
import Image from "next/image";
import Launching from "../assets/Launching-cuate.png";
import { GrFormCheckmark } from "react-icons/gr";

function WhoAreWe() {
  return (
    <div className="flex justify-center items-center flex-wrap mt-[2rem] md:mb-[4rem] mb-[6rem]">
      <div className="md:w-1/2 w-full md:h-[600px] h-screen py-5">
        <div className=" w-full ml-[10px] mt-[5px]  px-10  ">
          <p className="text-PRIMARY font-extrabold mt-[2rem] mb-[2rem] ">
            ABOUT OUR COMPANY
          </p>
          <p className="text-[1.5rem] font-extrabold mb-[2rem] ">
            Who We Are ?
          </p>
          <p className="leading-10 mb-5 text-[1.2rem] ">
            We are a software development agency and a school of programming,
            committed to providing businesses and individuals with the
            technology and skills they need to succeed. Our team of expert
            developers delivers custom software solutions that help businesses
            succeed, and our coding school gives students the skills they need
            to do well in the tech industry.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <Image src={Launching} style={{ height: "600px", width: "100%" }} />
      </div>
    </div>
  );
}

export default WhoAreWe;
