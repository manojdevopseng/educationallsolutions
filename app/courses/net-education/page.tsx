"use client";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import courseDataForIner from "@/data/courseData/netEducation.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Url } from "url";
import { title } from "process";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  isFeatured: boolean;
}

const NetEducation = () => {
  const featuredCourses = courseDataForIner.courses.filter(
    (course: Course) => course
  );

  return (
    <div className=" bg-gray-200 min-h-screen justify-center item-center py-12 text-black">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="ml-4">
      <h2 className=" text-3xl text-center text-teal-600 font-semibold tracking-wide uppercase">
          net (education)
        </h2>
        <p className="bg-slate-300 text-center bg-opacity-20 underline rounded-md left-0 pl-0 p-4 text-xl leading-8 tracking-tight mt-10 sm:text-2xl uppercase font-bold">
          Course Details
        </p>
      </div>
      <div className="mt-4 ml-4 mr-4">
        <div>
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="course text-xl">
              {/* <img src={course.image} alt={course.title} /> */}
              <div className="text-md mt-3 flex justify-center items-center text-justify ">
                <div>
                  <div className="border-2 border-blue-400 p-3 rounded-md ">
                    <div>
                      <h2 className="text-2xl mt-8  text-center">
                        <strong>Description</strong>
                      </h2>
                      <p className="text-center mt-4 text-2xl">{course.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-md mt-3 flex justify-center items-center text-justify ">
                <div>
                  <div className=" border-2 border-blue-400 rounded-md p-5">
                    <div>
                      <h2 className="text-2xl mt-8  text-center">
                        <strong>Highlights of the Course</strong>
                      </h2>
                      <p className="mt-4">- Comprehensive coverage of all topics</p>
                      <p className="mt-1">- Interactive and engaging teaching methods</p>
                      <p className="mt-1">- Practice problems and exercises for hands-on learning</p>
                      <p className="mt-1">- Emphasis on building strong foundation understanding</p>
                      <p className="mt-1">- Targeted exam preparation strategies</p>
                      <p className="mt-1">- Regular progress assessments and feedback</p>
                      <p className="mt-1">- Periodic mock tests</p>
                      <p className="mt-1">- Practice with previous year's papers to simulate exam conditions</p>
                      <p className="mt-1">- Access to extensive study materials and resources</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetEducation;
