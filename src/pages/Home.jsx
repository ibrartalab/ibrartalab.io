import { useState } from "react";
import Button from "../components/Button";

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
        <section className="exp lg:mt-20 border-t-2">
          <div className="about lg:w-3/4 text-center m-auto lg:pt-8">
            <h2 className="lg:text-center lg:text-3xl">About</h2>
            <p>
              I am a dedicated individual with a strong passion for technology
              who has embarked on a career in the IT field to pursue my lifelong
              dreams. My journey has been incredibly exciting and fulfilling,
              especially considering my non-tech background. It is my unwavering
              interest in this field that has motivated me to take this path. I
              am currently pursuing a Bachelor's degree in Computer Science at
              the University of The People, which has been a significant step in
              my educational and professional journey. I am thrilled with the
              opportunities this field offers, as it promises a secure and
              prosperous future. In my current role, I work as a Data Analyst,
              and I have also honed my skills as a proficient Full Stack
              Developer, specializing in the MERN tech stack. I am excited about
              the path ahead and look forward to connecting with like-minded
              professionals in the LinkedIn community. Thank you for being a
              part of my journey.
            </p>
            <div className="top-skills">
                
            </div>
          </div>
        </section>
      </div>
    </>
  );
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
