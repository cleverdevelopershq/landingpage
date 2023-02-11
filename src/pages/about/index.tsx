import React from "react";
import About from "../../components/about/About";
import AboutCard from "@/components/about/AboutCard";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import WhoAreWe from "@/components/about/WhoAreWe";
import WhatWeDo from "@/components/home/WhatWeDo";
import Footer from "@/components/footer/Footer";

function about() {
  return (
    <div>
      <About />
      <WhyChooseUs />
      <AboutCard />
      <WhatWeDo />
      <WhoAreWe />
      <Footer />
    </div>
  );
}

export default about;
