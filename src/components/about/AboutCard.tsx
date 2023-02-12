import React from "react";
import styles from "./About.module.css";
import mission1 from "../assets/mission1.jpg";
import { FaRandom, FaSlideshare } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import visionImg from "../assets/visionImg.jpg";
import valueImg from "../assets/valueImg.jpg";

function AboutCard() {
  return (
    <div>
      <div className="flex justify-around items-center flex-wrap mb-[2rem]">
        <div className={styles.flipcard}>
          <div className={styles.flipcardinner}>
            <div
              className={styles.flipcardfront}
              style={{
                backgroundImage: `url(${mission1.src})`,
                width: "100%",
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "30px",
              }}
            >
              <div className="h-[300px] w-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center rounded-[30px]">
                <div className="flex flex-col items-center justify-center">
                  <FaRandom className="h-[50px] w-[50px] text-white mb-[30px]" />
                  <p className="text-white text-[25px] font-extrabold">
                    OUR MISSION
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.flipcardback}>
              <p>
                Our mission is to empower individuals and organizations to
                leverage the power of technology to achieve their goals and make
                a positive impact on the world. As a software development agency
                and a coding school, we strive to provide high-quality custom
                software solutions and exceptional educational opportunities
                that meet the evolving needs of our clients and students.
              </p>
            </div>
          </div>
        </div>

        {/* our Vision */}
        <div className={styles.flipcard}>
          <div className={styles.flipcardinner}>
            <div
              className={styles.flipcardfront}
              style={{
                backgroundImage: `url(${visionImg.src})`,
                width: "100%",
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "30px",
              }}
            >
              <div className="h-[300px] w-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center rounded-[30px]">
                <div className="flex flex-col items-center justify-center">
                  <MdVisibility className="h-[50px] w-[50px] text-white mb-[30px]" />
                  <p className="text-white text-[25px] font-extrabold">
                    OUR VISION
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.flipcardback}>
              <p>
                We envision a future where businesses and individuals have
                access to the technology and skills they need to succeed. We aim
                to empower our clients with innovative software solutions that
                drive their success, while providing students with the skills
                necessary to excel in the tech industry.
              </p>
            </div>
          </div>
        </div>
        {/* end of our vision */}

        {/* our values */}
        <div className={styles.flipcard}>
          <div className={styles.flipcardinner}>
            <div
              className={styles.flipcardfront}
              style={{
                backgroundImage: `url(${valueImg.src})`,
                width: "100%",
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "30px",
              }}
            >
              <div className="h-[300px] w-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center rounded-[30px]">
                <div className="flex flex-col items-center justify-center">
                  <FaSlideshare className="h-[50px] w-[50px] text-white mb-[30px]" />
                  <p className="text-white text-[25px] font-extrabold">
                    OUR VALUES
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.flipcardback}>
              <p>
                Delivering software that serves a meaningful purpose and meets
                the unique needs of our clients. Whether it's developing a
                solution to improve the lives of end-users, solving a complex
                business problem, or creating a new revenue stream, we are
                dedicated to delivering software that has a positive impact on
                our clients and the world around it.
              </p>
            </div>
          </div>
        </div>
        {/* end of third card */}
      </div>
    </div>
  );
}

export default AboutCard;
