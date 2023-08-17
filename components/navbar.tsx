"use client";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "../styles/globals.css";
import React, { useState } from "react";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "hero",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full mx-auto px-4shadow fixed top-0 z-50 dark:bg-neutral-900 dark:border-b dark:border-stone-900 ">
      <div className="justify-center md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className="md:hidden">
              <button onClick= {() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}  >
          <div className=" items-center justify-center md:flex space-y-8 md:space-x-6 md:space-y-0 text-xl md:h-[70px] h-auto pb-8 md:pb-0">
            {NAV_ITEMS.map((item, idx) => {
              return <Link 
              key={idx}
              to={item.page}
              className={
                "block lg:inline-block text-neutral-900  hover:text-neutral-100 dark:text-neutral-500 hover:scale-110"
              }
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(!navbar)
              }
              
              ><button>{item.label}</button>
              </Link>;
            })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
