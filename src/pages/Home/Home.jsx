import Lyout from "../../components/Lyout/Lyout";
import Work from "../Work";
import About from "../About";
import Project from "../Project";


function Home() {
  return (
    <Lyout>
      <div className="wrapper w-full">
        <div
          style={{ height: "70vh"}}
          className="scrolling lg:w-full  overflow-y-scroll lg:mt-8 lg:rounded-xl "
        >
          <Project />
          <Work />
          <About />
          
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
