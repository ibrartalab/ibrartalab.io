import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavButtons() {


  return (
    <>
      <div className="flex lg:mt-12 lg:gap-6 lg:ml-10">
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "white" : "gray",
              backgroundColor: isActive ? "red" : "",
              border: isActive ? "" : "1px solid gray",
            };
          }}
          className="my-link lg:w-20 lg:h-12 text-center lg:p-3 rounded-lg font-semibold"
        >
          All
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "white" : "gray",
              backgroundColor: isActive ? "red" : "",
              border: isActive ? "" : "1px solid gray",
            };
          }}
          className="my-link lg:w-22 lg:h-12 text-center lg:p-3 rounded-lg font-semibold"
        >
          Backend
        </NavLink>
        <NavLink
          to={"/frontend"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "white" : "gray",
              backgroundColor: isActive ? "red" : "",
              border: isActive ? "" : "1px solid gray",
            };
          }}
          className="my-link lg:w-32 lg:h-12 text-center lg:p-3 rounded-lg font-semibold"
        >
          Frontend
        </NavLink>
      </div>
    </>
  );
}

export default NavButtons;
