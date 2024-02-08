// import { useState } from "react";
// import Button from "../components/Button";
// import { AiFillGithub } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";
// import { Link } from "react-router-dom";
import About2 from "./About2";
import Project2 from "./Project2";
import Work2 from './Work2'
import Lyout from "../../components/Lyout/Lyout";

// import GradientShadow from "../components/GradientShadow";

function Home() {
  return (
    <Lyout>
      <div className="wrapper w-full h-full ">
        <div style={{height:'80vh'}} className="scrolling lg:w-full  overflow-y-scroll lg:mt-8 lg:rounded-xl">
        <Work2 />
          <About2 />
          
          <Project2 />
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
