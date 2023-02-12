import React from "react";
import aboutus from "../assets/aboutus.jpg";


function about() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${aboutus.src})`,
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mb-[2rem]"
      >
        <div className="h-screen w-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
          <p className="text-white md:text-[3rem] text-[2rem] font-extrabold">
            About Company
          </p>
        </div>
      </div>
     
    </div>
  );
}

export default about;
