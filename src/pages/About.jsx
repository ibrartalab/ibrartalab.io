import React from 'react'
import { IoDiamondSharp } from "react-icons/io5";

function About() {
    return (
        <section className="exp lg:mt-20 ">
            <div className="about lg:w-3/4 text-center m-auto lg:pt-8">
                <h2 className="lg:text-center lg:text-3xl ">About</h2>
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
                <div className="top-skills  lg:w-max lg:h-max m-auto lg:mt-4 rounded-lg p-2">
                    <div className="flex lg:gap-3 lg:justify-start lg:items-center">
                        <IoDiamondSharp className="text-lg" />
                        <div>Top skills</div>
                    </div>
                    <div className="top-skills-list">
                        <ul className="flex lg:justify-center lg:items-center lg:gap-6 lg:text-sm lg:ml-8">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Microsoft Power BI</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
