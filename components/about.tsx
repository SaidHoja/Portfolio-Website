import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "C/C++" },
  { skill: "Docker" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

export default function About() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-40">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 flex-col">
            <h1 className="text-2xl font-bold mb-6 text-center">Get to know me!</h1>
            <p>&emsp;Hello, my name is Saidamir, and I am an inspiring software engineer based in the Washington D.C. area. I am currently looking for an internship position anywhere in the United States for any time of the year. </p>
            <p>&emsp;Outside of school and work I like to play and drink tea. Add me on <a href = "https://www.chess.com/members/saidhoja" className = "font-bold">chess.com</a> if you would like to play sometime! </p>
            <br></br>
            <div className = "flex justify-center">
            <button className = " font-semibold px-6 py-3 highlight rounded shadow bg-green-700 hover:bg-green-900">
              <a href = "/Umarkhodjaev, Saidamir Resume.pdf" download>Resume</a>
            </button>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 text-center">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-green-700 px-4 py-2 mr-2 mt-2 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
