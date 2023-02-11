import React from "react";
import Image from "next/image";
import whyus from "../assets/whyus.jpg";
import { GrFormCheckmark } from "react-icons/gr";

function whyUs() {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="md:w-1/2 w-full">
        <Image src={whyus} style={{ height: "600px", width: "100%" }} />
      </div>
      <div className="md:w-1/2 w-full bg-Navy md:h-[600px] h-screen py-5">
        <div className=" w-full ml-[10px] mt-[5px] text-white px-10">
          <p className="text-PRIMARY">OUR BENEFITS</p>
          <h1 className="font-bold text-[2rem]">Why Clever Developers ?</h1>
          <p className="leading-10 mb-5">
            We are a software development agency and a school of programming,
            committed to providing businesses and individuals with the
            technology and skills they need to succeed.
          </p>
          <div className="flex mb-5">
            <span>
              <GrFormCheckmark className="h-[30px] w-[30px] rounded-full bg-white mr-10 items-center hover:bg-PRIMARY active:bg-PRIMARY hover:text-white" />
            </span>
            <span>High solution for gazu garagara. Bulaba blu bab bab</span>
          </div>
          <div className="flex mb-5">
            <span>
              <GrFormCheckmark className="h-[30px] w-[30px] rounded-full bg-white mr-10 items-center hover:bg-PRIMARY active:bg-PRIMARY" />
            </span>
            <span>High solution for gazu garagara. Bulaba blu bab bab</span>
          </div>
          <div className="flex mb-5">
            <span>
              <GrFormCheckmark className="h-[30px] w-[30px] rounded-full bg-white mr-10 items-center hover:bg-PRIMARY active:bg-PRIMARY" />
            </span>
            <span>High solution for gazu garagara. Bulaba blu bab bab</span>
          </div>
          <div className="flex mb-5">
            <span>
              <GrFormCheckmark className="h-[30px] w-[30px] rounded-full bg-white mr-10 items-center hover:bg-PRIMARY active:bg-PRIMARY" />
            </span>
            <span>High solution for gazu garagara. Bulaba blu bab bab</span>
          </div>
          <div className="flex mb-5">
            <span>
              <GrFormCheckmark className="h-[30px] w-[30px] rounded-full bg-white mr-10 items-center hover:bg-PRIMARY active:bg-PRIMARY" />
            </span>
            <span>High solution for gazu garagara. Bulaba blu bab bab</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default whyUs;
