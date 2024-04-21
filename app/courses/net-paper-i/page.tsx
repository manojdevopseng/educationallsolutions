"use client";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import courseDataForIner from "@/data/courseData/netPaperI.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Url } from "url";
import { title } from "process";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  instructor: string;
  isFeatured: boolean;
}

const NetPaperI = () => {
  const featuredCourses = courseDataForIner.courses.filter(
    (course: Course) => course
  );

  return (
    <div className=" bg-gray-200 min-h-screen justify-center item-center py-12 text-black">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="ml-4">
        <h2 className=" text-3xl text-teal-600 font-semibold tracking-wide uppercase">
          net paper-i
        </h2>
        <p className="mt-2 text-xl leading-8 font-medium tracking-tight sm:text-3xl uppercase">
          Details
        </p>
      </div>
      <div className="mt-4 ml-4 mr-4">
        <div>
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="course text-xl">
              {/* <img src={course.image} alt={course.title} /> */}
              <p className="text-2xl">
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <h2 className="text-2xl mt-4">
                <strong>Description</strong>
              </h2>
              <p className="grid grid-cols-2 text-justify">{course.description}</p>
              <h2 className="text-2xl mt-4">
                <strong>Highlights of the course</strong>
              </h2>
              <p>- Comprehensive coverage of all topics</p>
              <p>- Interactive and engaging teaching methods</p>
              <p>- Practice problems and exercises for hands-on learning</p>
              <p>- Emphasis on building strong foundation understanding</p>
              <p>- Targeted exam preparation strategies</p>
              <p>- Regular progress assessments and feedback</p>
              <p>- Periodic mock tests</p>
              <p>- Practice with previous year's papers to simulate exam conditions</p>
              <p>- Access to extensive study materials and resources</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetPaperI;
