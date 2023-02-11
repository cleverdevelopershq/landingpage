import React from "react";
import Image from "next/image";
import Launching from "../assets/Launching-cuate.png";
import { GrFormCheckmark } from "react-icons/gr";

function WhyChooseUs() {
  return (
    <div className="flex justify-center items-center flex-wrap md:mb-[3rem] mb-[3rem]">
      <div className="md:w-1/2 w-full">
        <Image src={Launching} style={{ height: "600px", width: "100%" }} />
      </div>
      <div className="md:w-1/2 w-full md:h-[600px] h-screen py-5">
        <div className=" w-full ml-[10px] mt-[5px]  px-10">
          <p className="text-PRIMARY font-extrabold">WHY CHOOSE US</p>
          <p className="leading-10 mb-5 font-bold text-[1.5rem]">
            We are a software development agency and a school of programming,
            committed to providing businesses and individuals with the
            technology and skills they need to succeed.
          </p>
          <div className="flex mb-5 ">
            <span>
              <GrFormCheckmark className="h-[30px] w-[30px] mr-10 " />
            </span>
            <span>Availability of professional staffs</span>
          </div>
          <div className="flex mb-5 ">
            <span>
              <GrFormCheckmark className="h-[30px] w-[30px] mr-10 " />
            </span>
            <span>24/7 support during and after projects</span>
          </div>
          <div className="flex mb-5 ">
            <span>
              <GrFormCheckmark className="h-[30px] w-[30px] mr-10 " />
            </span>
            <span>Cost within your budget</span>
          </div>
          <div className="flex mb-5 ">
            <span>
              <GrFormCheckmark className="h-[30px] w-[30px] mr-10 " />
            </span>
            <span>Availability of IT resources</span>
          </div>
          <div
            className="md:h-[4rem] h-1/2 text-[1rem] font-bold bg-PRIMARY flex justify-center items-center p-[10px] md:mb-[5rem] mb-[2rem]"
            style={{
              borderLeftColor: "black",
              borderLeftStyle: "solid",
              borderLeftWidth: "5px",
            }}
          >
            Best IT supporting and Solution provider all over the World, when it
            comes to innovation just think of Clever Developers
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
