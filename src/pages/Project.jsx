import React from "react";
import { GoCodeSquare } from "react-icons/go";
import { AiOutlineCode } from "react-icons/ai";

function Project() {
  return (
    <>
      <div className="project-wrapper w-full h-80">
        <div className="text-center text-2xl lg:mt-8">
          <h2>Projects</h2>
        </div>
        <div className="flex justify-evenly  items-center lg:ps-32 lg:pe-20 lg:mt-12">
          <ProjectContainer
            icon={<GoCodeSquare />}
            title={"Front-End Development"}
            count={"10 Projects"}
          />
          <ProjectContainer
            icon={<AiOutlineCode />}
            title={"Back-End Development"}
            count={"10 Projects"}
          />
        </div>
      </div>
    </>
  );
}

function ProjectContainer({ icon, title, count }) {
  return (
    <div
      className="w-80 h-40 shadow-xl  m-auto rounded-xl p-6"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <div className="icon text-3xl">{icon}</div>
      <div className="title text-xl lg:mt-6">{title}</div>
      <div className="count text-sm lg:mt-4">{count}</div>
    </div>
  );
}

export default Project;
