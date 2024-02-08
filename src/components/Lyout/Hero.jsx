import React from "react";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="lg:w-96">
        <div className="profile-img lg:w-40 lg:h-40 lg:ml-8 lg:mt-4">
          {/* background image used */}
        </div>
        <div className="lg:mt-2">
          <h1 className="text-left lg:ml-8 font-bold">Ibrar Khan</h1>
        </div>
        <div className="text-md lg:w-80 lg:ml-8 text-left font-semibold">
          <p>
            Full stack Developer | Data Analyst | JavaScript | TypeScript |
            React | Node | MongoDB | Power BI | SQL
          </p>
        </div>
        <div className="text-md font-semibold flex lg:justify-center lg:items-left lg:flex-col lg:ps-4 lg:mt-4 lg:gap-4 ">
          <div className="flex justify-left items-center">
            <img
              src="/src/assets/DiceAnalytics.png"
              alt="dice"
              className="lg:w-16"
            />
            <Link className="">Dice Analytics</Link>
          </div>
          <div className="flex justify-left items-center">
            <img src="/src/assets/UoPeople.png" alt="UOP" className="lg:w-16" />
            <Link className="lg:ml-2">University of the People</Link>
          </div>
        </div>
        <div className="m-auto flex lg:gap-8">
          <Button className={"lg:w-40 lg:h-8 rounded-lg lg:ml-6 lg:mt-4"}>
            Hire Me
          </Button>
          <div className="text-3xl flex lg:mt-4 lg:gap-4 lg:items-center">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
      {/* <div className="text-3xl w-full flex lg:gap-4 lg:items-center lg:justify-center lg:mt-5">
        <AiFillGithub />
        <AiFillLinkedin />
      </div> */}
    </>
  );
}

export default Hero;
