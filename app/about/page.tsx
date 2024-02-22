import { Spotlight } from '@/components/ui/Spotlight';
import Link from 'next/link';
import { Button } from '@/components/ui/moving-border';
import React from 'react'

function About() {
  return (
    <div className="text-left ml-20 h-auto md:h-[15rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="mt-32 p-4 relative z-10 w-full" >
        <h1
          className="md:mt-0 text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-400"
        >About Us</h1>
        <p
          className="mt-4 font-normal text-base md:text-lg text-black  mx-auto"
        >Education All Solutions is an online platform that helps you to find the right courses for your needs.</p>
        {/* <div className="mt-4">
                <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore Courses
                    </Button>
                </Link>
            </div> */}
      </div>
    </div>
  )
}

export default About;