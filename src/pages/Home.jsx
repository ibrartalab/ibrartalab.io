import { useState } from "react";
import Button from "../components/Button";
import About from "../pages/About";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="wrapper">
        <section className="hero lg:text-center">
          <div className="banner lg:h-32 lg:w-full bg-sky-300 lg:flex justify-center  items-center">
            <div className="text-center lg:w-60 m-auto text-white mb-16 select-none">
              <span className="text-lg">Ibrar Khan</span>
              <p className="text-sm">Full Stack Dveloper | Data Analyst</p>
            </div>
          </div>
          <div className="profile-img lg:w-40 lg:h-40 m-auto absolute lg:top-20 left-0 right-0 ">
            {/* we are using background image here */}
          </div>
          <div className="profile-heading lg:mt-32 text-3xl">Ibrar Khan</div>
          <div className="profile-heading lg:w-80 m-auto">
            Software Engineer | Data Analyst | JavaScript | TypeScript | MongoDb
            | Express | React | Node | System Design
          </div>
          <div className="edu-com flex lg:justify-evenly items-center">
            <div className="lg:w-40 lg:h-20 m-auto flex justify-center items-center border-b-2 border-slate-300 ">
              <img
                src="/src/assets/DiceAnalytics.png"
                alt="company"
                className="lg:w-14 lg:h-14"
              />
              <span>Dice Analytics</span>
            </div>
            <div className="lg:w-60 lg:h-20 m-auto flex justify-center items-center border-b-2 border-slate-300">
              <img
                src="/src/assets/UoPeople.png"
                alt="University"
                className="lg:w-14 lg:h-14"
              />
              <span>University of the People</span>
            </div>
          </div>
          <Button
            width="100"
            className={
              "talks-btn bg-blue-500 text-white text-sm lg:ps-2 lg:pe-2 lg:text-center rounded-xl absolute lg:top-32 lg:mt-4 lg:left-4 "
            }
            mouseMove={() => setIsOpen(true)}
            mouseOut={() => setIsOpen(false)}
          >
            Talks about
          </Button>
          <Button
            width="100"
            className={
              "talks-btn bg-blue-500 text-white text-sm lg:ps-2 lg:pe-2 lg:text-center rounded-xl absolute lg:top-32 lg:mt-4 lg:right-4 "
            }
          >
            Open to Work
          </Button>

          <TalksAbout isOpen={isOpen} />
        </section>
        <About />
        <Experience />
      </div>
    </>
  );
}

function Experience() {
  return (
    <div className="exp-wrapper text-center lg:mt-8">
      <div>
        <h3 className="text-2xl">Experience</h3>
      </div>
      <div className="lg:w-max lg:h-20 m-auto flex justify-center items-center ">
        <img
          src="/src/assets/DiceAnalytics.png"
          alt="company"
          className="lg:w-14 lg:h-14"
        />
        <span>
          Dice Analytics <span className="text-sm">(1 year 4 months)</span>
        </span>
      </div>
      <CircleIcon />
      <ExperienceList />
    </div>
  );
}

function ExperienceList() {
  return (
    <>
      <div className="exp-list lg:w-max lg:h-max border-l-2 border-black m-auto lg:ps-4">
        <div>Frontend</div>
        <p>full time</p>
        <p></p>
      </div>
    </>
  );
}

function CircleIcon() {
  return <div className=" round-circle w-3 h-3 rounded-full bg-black"></div>;
}

function TalksAbout({ isOpen }) {
  return (
    <div
      style={
        isOpen
          ? { display: "block", fontSize: "10px" }
          : { display: "none", fontSize: "10px" }
      }
      className="proile-other-content lg:w-60 lg:h-14 rounded-lg lg:ps-2 lg:pt-2 lg:m-auto text-left absolute lg:top-16 lg:left-4  bg-cyan-100"
    >
      Talks about #webdesign, #webdeveloper, #webdevelopement,
      #fullstackdevelopment, and #fullstackwebdeveloper
    </div>
  );
}

export default Home;
