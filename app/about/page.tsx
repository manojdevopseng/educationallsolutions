import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function About() {
  return (
    <div className="py-12 text-black">
      <Spotlight className="top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="p-4 z-10 w-auto h-auto text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-400">
          About Us
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-black max-w-lg mx-auto">
          Education All Solutions is an online platform that helps you to find
          the right courses for your needs.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
