import { useState } from "react";
import Button from "../components/Button";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import About from "./About";
import Project from "./Project";
import Work from './Work'
// import About from "../pages/About";

// import Work from "../pages/Work";
// import Project from "../pages/Project";
// import GradientShadow from "../components/GradientShadow";

function Home() {
  return (
    <>
      <div className="wrapper w-full h-full flex">
        <div style={{ height: "100vh" }} className="left lg:w-80  bg-slate-500">
          <Hero />
        </div>
        <div style={{ height: "100vh" }} className="right lg:w-full lg:h-full">
          <div className="flex">
            <div className="page-btn lg:w-20 lg:h-8 lg:mt-6 lg:ml-6 lg:p-1 rounded-md">
              <Link>Home</Link>
            </div>
            <div className="page-btn lg:w-20 lg:h-8 lg:mt-6 lg:ml-6 lg:p-1 rounded-md ">
              <Link>About</Link>
            </div>
            <div className="page-btn lg:w-20 lg:h-8 lg:mt-6 lg:ml-6 lg:p-1 rounded-md ">
              <Link>Project</Link>
            </div>
          </div>
          <div>
            <About/>
            <Work/>
            <Project/>
          </div>
        </div>
      </div>
    </>
  );
}

//Hero section
function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div className="profile-img lg:w-32 lg:h-32 m-auto lg:mt-4">
          {/* background image used */}
        </div>
        <div className="lg:mt-2">
          <h1 className="text-center text-2xl">Ibrar Khan</h1>
        </div>
        <div className="text-sm text-center">
          <p>
            Full stack Developer | Data Analyst | JavaScript | TypeScript |
            React | Node | MongoDB | Power BI | SQL
          </p>
        </div>
        <div className="text-sm flex lg:justify-center lg:items-center lg:flex-col lg:ps-4 lg:mt-4 lg:gap-4 ">
          <div className="">
            <img
              src="/src/assets/DiceAnalytics.png"
              alt="dice"
              className="lg:w-16 m-auto"
            />
            <Link className="">Dice Analytics</Link>
          </div>
          <div className="">
            <img
              src="/src/assets/UoPeople.png"
              alt="UOP"
              className="lg:w-16 m-auto"
            />
            <Link className="lg:ml-2">University of the People</Link>
          </div>
        </div>
        <div>
          <Button
            width="150px"
            className={"bg-orange-400 rounded-lg lg:ml-14 lg:mt-8"}
          >
            Hire Me
          </Button>
        </div>
      </div>
      <div className="text-3xl w-full flex lg:gap-4 lg:items-center lg:justify-center lg:mt-12">
        <AiFillGithub />
        <AiFillLinkedin />
      </div>
    </>
  );
}

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
