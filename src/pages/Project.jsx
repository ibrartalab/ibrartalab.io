import React from "react";
import { GoCodeSquare } from "react-icons/go";
import { AiOutlineCode } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";

function Project() {
    return (
        <>
            <div className="project-wrapper w-full h-80">
                {/* <div className="text-center text-2xl lg:mt-8">
                    <h2>Projects</h2>
                </div> */}
                <div className="flex justify-evenly  items-center lg:ps-20 lg:pe-20 lg:mt-12">
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
            className="w-80 h-48 shadow-xl  m-auto rounded-3xl p-6 bg-white text-black"
        >
            <div className="icon text-4xl">{icon}</div>
            <div className="title text-3xl font-bold lg:mt-3">{title}</div>
            <div style={{backgroundColor:'red',color:'white'}} className="count  lg:h-12 lg:ps-4 lg:pe-4 text-md font-semibold lg:mt-4 rounded-3xl">
                <NavLink className="w-full h-full">
                    <div className="w-full h-full flex justify-between items-center">
                    {count}
            <GrLinkNext className="text-xl"/>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Project;
