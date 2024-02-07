import { useState } from "react";
import Button from "../components/Button";
import About from "../pages/About";

import Work from "../pages/Work";
import Project from "../pages/Project";

function Home() {
    return (
        <>
            <div className="wrapper">
                <Hero />
                <About />
                <Work />
                <Project />
            </div>
        </>
    );
}

//Hero section
function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="hero lg:text-center">
                <div className="banner lg:h-32 w-full"></div>
                <div className="profile-img lg:w-40 lg:h-40 m-auto absolute lg:top-20 left-0 right-0 ">
                    {/* we are using background image here */}
                </div>
                <div className="profile-heading lg:mt-32 text-3xl">Ibrar Khan</div>
                <div className="profile-heading lg:w-80 m-auto">
                    Software Engineer | Data Analyst | JavaScript | TypeScript | MongoDb |
                    Express | React | Node | System Design
                </div>
                <div className="edu-com flex lg:justify-around items-center lg:ps-32 lg:pe-32">
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
                        "talks-btn bg-blue-500 text-white text-sm lg:ps-2 lg:pe-2 lg:text-center rounded-xl absolute  lg:mt-4 lg:left-60 lg:ml-24 "
                    }
                    mouseMove={() => setIsOpen(true)}
                    mouseOut={() => setIsOpen(false)}
                >
                    Talks about
                </Button>
                <Button
                    width="100"
                    className={
                        "talks-btn bg-blue-500 text-white text-sm lg:ps-2 lg:pe-2 lg:text-center rounded-xl absolute  lg:mt-4 lg:right-60 lg:mr-24 "
                    }
                >
                    Open to Work
                </Button>

                <TalksAbout isOpen={isOpen} />
            </section>
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
