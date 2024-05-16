// import React from 'react'
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function Hero() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-400">
          Welcome to Education All Solutions
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-black max-w-lg mx-auto">
          Education All Solutions is an online platform that helps you to find
          the right courses for your needs.
        </p>
        <div className="mt-4 flex flex-row items-center space-x-4  transition duration-200 ease-in-out justify-center">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white hover:bg-black hover:text-white text-black transition duration-200 ease-in-out dark:bg-black  hover:font-semibold dark:text-white  border-blue-400 dark:hover:bg-white dark:hover:text-black dark:border-slate-800 dark:hover:font-semibold"
            >
              Explore Courses
            </Button>
          </Link>
          <Link href={"/phd-guidance"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white hover:bg-black hover:text-white text-black transition duration-200 ease-in-out dark:bg-black  hover:font-semibold dark:text-white  border-blue-400 dark:hover:bg-white dark:hover:text-black dark:border-slate-800 dark:hover:font-semibold"
            >
              Explore Guidance
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
