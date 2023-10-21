"use client"
import React from "react"
import Image from "next/image"
import  {Link}  from "react-scroll/modules"



export default function Hero(){
    return (
        <section id = "hero">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image src = "/headshot2.jpeg" alt = "" 
                    width={300}
                    height={300}
                    className="rounded-full grow-0 shrink-0"/>
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">Hey, I&apos;m Saidamir</h1>
                    <p className="text-lg mt-4 mb-6 md:text-lg">
                        I&apos;m a computer science student at the University of Virginia aiming to become a backend/full-stack software engineer.
                    </p>
                    <button>
                    <Link
                    to="projects"
                    className="text-white font-semibold px-6 py-3 highlight rounded shadow bg-green-800 hover:bg-green-900"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    >
                    See My Work
                    </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}