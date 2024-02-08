import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <section className="exp lg:mt-20" style={{ backgroundColor: "" }}>
      <div>
        <h2 className="lg:text-left lg:ps-32  lg:text-3xl font-bold ">About</h2>
      </div>
      <div className="flex lg:gap-4 lg:mt-6 lg:ml-32">
        <div className=" lg:w-20 lg:h-14">
          <NavLink className={"w-full h-full text-5xl text-black "}>
            <div className="w-full h-full bg-white  rounded-2xl lg:ps-4 lg:pt-1">
              <AiFillGithub />
            </div>
          </NavLink>
        </div>
        <div className=" lg:w-20 lg:h-14">
          <NavLink className={"w-full h-full text-5xl text-black "}>
            <div className="w-full h-full bg-white  rounded-2xl lg:ps-4 lg:pt-1">
              <AiFillLinkedin />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="about lg:w-3/4 text-left font-semibold m-auto lg:pt-8">
        <p>
        Skilled in JavaScript, TypeScript, Python, DSA, and web development with a Bachelor of Computer Science
        </p>
        <p className="mt-4">
        Feel free to connect with me regarding your new project plan,guidance and executing.
        </p>
      </div>
    </section>
  );
}

export default About;
