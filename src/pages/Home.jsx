import { useState } from "react";
import Button from "../components/Button";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import About from "./About";
import Project from "./Project";
import Work from './Work'
import Lyout from "../components/Lyout/Lyout";
// import About from "../pages/About";

// import Work from "../pages/Work";
// import Project from "../pages/Project";
// import GradientShadow from "../components/GradientShadow";

function Home() {
  return (
    <Lyout>
      <div className="wrapper w-full h-full flex">
        {/* <div style={{ height: "100vh" }} className="left lg:w-80  bg-slate-500">
          <Hero />
        </div> */}
        <div style={{ height: "100vh" }} className="right lg:w-full lg:h-full">
          <div className="flex">
            <div className="page-btn lg:w-20 lg:h-8 lg:mt-6 lg:ml-6 lg:p-1 rounded-md">
              <Link to={'/'}>Home</Link>
            </div>
            <div className="page-btn lg:w-20 lg:h-8 lg:mt-6 lg:ml-6 lg:p-1 rounded-md ">
              <Link to={'/about'}>About</Link>
            </div>
            <div className="page-btn lg:w-20 lg:h-8 lg:mt-6 lg:ml-6 lg:p-1 rounded-md ">
              <Link>Project</Link>
            </div>
          </div>
          <div>
            {/* <About/>
            <Work/>
            <Project/> */}
          </div>
        </div>
      </div>
    </Lyout>
  );
}

//Hero section


//Talks about
function TalksAbout({ isOpen }) {
  return (
    <div
      style={
        isOpen
          ? { display: "block", fontSize: "10px" }
          : { display: "none", fontSize: "10px" }
      }
      className="proile-other-content lg:w-48 lg:h-max rounded-lg lg:ps-2 lg:pt-2 lg:m-auto text-left absolute lg:top-60 lg:mt-14 lg:left-60"
    >
      Talks about #webdesign, #webdeveloper, #webdevelopement,
      #fullstackdevelopment, and #fullstackwebdeveloper
    </div>
  );
}

export default Home;
