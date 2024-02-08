import React from "react";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="lg:w-80">
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

export default Hero;
