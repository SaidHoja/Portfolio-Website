"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import {BsGithub,BsArrowUpRightSquare} from "react-icons/bs"
const projects = [
    {
      name: "Transfer Guide",
      description:
        "Transfer Guide web application built with Django and Bootstrap. Designed to allow student users to request transfer credit for UVA courses and admin users to handle requests.",
      technologies:
        "Django, Python, PyTest, HTML, CSS, Bootstrap, Git, GitHub Actions",
      image: "/TransferGuideLogo.png",
      github: "https://github.com/saidhoja/transfer-guide",
      link: "https://transfer-guide-uva-project-4999cb69ba91.herokuapp.com/",
    },
  ]


export default function Projects(){
    return (
        <section id="projects">
            <div>
                <h1 className = "text-center font-bold text-4xl">Projects</h1>
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </div>
            <div>
            <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-md leading-7 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
            </div>
            </div>
        </section>
    )
}