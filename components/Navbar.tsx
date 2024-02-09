/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
// Assuming that there's a suitable alternative for the following import
// import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: 'Courses',
    link: '/courses',
    children: [
      {
        label: 'CUET (UG)',
        link: '/courses/cuet-ug',
      },
      {
        label: 'MATHEMATICS (XI-XII)',
        link: '/courses/mathematics-xi-xii',
      },
      {
        label: 'NDA (MATHS)',
        link: '/courses/nda-maths',
      },
      {
        label: 'NET-Paper-I',
        link: '/courses/net-paper-i',
      },
      {
        label: 'NET (EDUCATION)',
        link: '/courses/net-education',
      },
    ],
  },
  {
    label: 'Ph.D Guidance',
    link: '/phd-guidance',
    children: [
      {
        label: 'Complete Thesis Guidance',
        link: '/phd-guidance/complete-thesis-guidance',
      },
      {
        label: 'Research Paper Guidance',
        link: '/phd-guidance/research-paper-guidance',
      },
      {
        label: 'Research Paper Publish Guidance',
        link: '/phd-guidance/research-paper-publish-guidance',
      },
    ],
  },
  {
    label: 'Guidance & Counseling',
    link: '/guidance-and-counseling',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];

export default function Navbar() {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  // Replace with an appropriate alternative for useAutoAnimate
  // const [animationParent] = useAutoAnimate();

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <div className="sticky top-0 z-50 firefox:bg-opacity-90 mx-auto backdrop-filter backdrop-blur-lg bg-opacity-30 border-b flex  w-full max-w-8xl justify-between px-4 py-5 text-lg">
      {/* left side  */}
      <section className="flex items-center gap-10">
        {/* logo */}
        {/* <Image src={logo} alt=" logo" /> */}
        <a href="/" className="flex cursor-pointer items-center gap-2 font-bold text-3xl text-neutral-900">Edu.AllSolutions</a>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-600 group-hover:text-black ">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute  backdrop-filter backdrop-blur-lg bg-opacity-0 border-b border-gray-200 top-25 left-5 hidden w-auto  flex-col gap-1 rounded-xl bg-white py-2 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center py-1 pl-6 pr-8  text-neutral-600 hover:text-black  "
                    >
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
      {/* <section className=" hidden md:flex   items-center gap-8 ">
        <a href="/login" ><button className="h-fit rounded-xl border-2 border-neutral-400 px-5 py-2 text-neutral-600 transition-all hover:border-black hover:text-black/90">
          Login
        </button></a>

        <a href="/register" ><button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-600 transition-all hover:border-black hover:text-black/90">
          Register
        </button></a>
      </section> */}

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white rounded-lg transition-opacity px-4 py-4 ">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        {/* <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-600 transition-all hover:border-black hover:text-black/90">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-600 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section> */}
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      // Replace with an appropriate alternative for useAutoAnimate
      // ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-600 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen ? " rotate-180" : ""
              }`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-600 hover:text-black  "
            >
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
