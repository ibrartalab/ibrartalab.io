import React from "react";
import { IoDiamondSharp } from "react-icons/io5";

function Work2() {
  return (
    <>
      <div className="text-center mt-20">
        <h3 className="text-2xl mt-10">Experience</h3>
      </div>
      <div className="flex justify-evenly">
        <Experience
          imgName={"DiceAnalytics"}
          companyName={"Dice Analytics"}
          time={"(1 year 4 months)"}
        >
          <CircleIcon />
          <ExperienceList
            title={"Frontend Developer"}
            duration={"Full-time"}
            location={"Islamabad,Pakistan"}
            skills={"Html, CSS, Js"}
          />
          <CircleIcon />
          <ExperienceList
            title={"Business Intelligence Developer"}
            duration={"Full-time"}
            location={"Islamabad,Pakistan"}
            skills={"Html, CSS, Js"}
          />
          <CircleIcon />
          <ExperienceList
            title={"Business Intelligence Developer"}
            duration={"Internship"}
            location={"Islamabad,Pakistan"}
            skills={"Html, CSS, Js"}
            className={"border-none"}
          />
        </Experience>

        <div className="flex lg:flex-col">
          <Experience
            imgName={"tata"}
            companyName={"Tata Group"}
            time={"(1 month)"}
          >
            <ExperienceList
              title={"Data Analyst"}
              duration={"Internship"}
              skills={"Microsoft Power BI and Microsoft Excel"}
              className={"border-none lg:ps-7 lg:mt-4"}
              nestedClass={""}
            />
          </Experience>
          <Experience imgName={"pwc"} companyName={"PwC"} time={"(1 month)"}>
            <ExperienceList
              title={"BI Analyst"}
              duration={"Internship"}
              skills={"Microsoft Power BI and Microsoft Excel"}
              className={"border-none lg:ps-7 lg:mt-4"}
              nestedClass={""}
            />
          </Experience>
        </div>
      </div>
    </>
  );
}

//Experice for Each company
function Experience({ imgName, companyName, time, children }) {
  return (
    <div className="exp-wrapper text-center lg:mt-8">
      <div className="lg:w-max lg:h-20 m-auto flex justify-center items-center ">
        <img
          src={`/src/assets/${imgName}.png`}
          alt="company"
          className="lg:w-14 lg:h-14"
        />
        <span>
          {companyName} <span className="text-sm">{time}</span>
        </span>
      </div>
      {children}
    </div>
  );
}

// List of Roles for each company
function ExperienceList({
  title,
  duration,
  location,
  skills,
  className,
  nestedClass,
}) {
  return (
    <>
      <div
        className={`lg:w-44 border-l-2 border-neutral-900 lg:h-40 lg:m-auto relative ${className}`}
      >
        <div className="exp-list lg:w-max lg:h-40  m-auto lg:ps-4 absolute lg:-top-7 ">
          <div className={`text-md font-bold text-start ${nestedClass}`}>
            {title}
          </div>
          <p className="text-left text-sm">{duration}</p>
          <p className="text-left text-sm">{location}</p>
          <p className="text-center flex justify-normal items-center gap-2 text-sm">
            <IoDiamondSharp className="lg:mt-4 text-slate-800" />
            <div className="lg:mt-4">{skills}</div>
          </p>
        </div>
      </div>
    </>
  );
}

//Circle icon from career break
function CircleIcon() {
  return (
    <div className=" round-circle w-3 h-3 rounded-full bg-black lg:ml-l lg:mb-2 lg:mt-2 "></div>
  );
}

export default Work2;
