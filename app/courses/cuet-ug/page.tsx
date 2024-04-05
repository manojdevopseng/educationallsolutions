"use client";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import courseDataForIner from "@/data/coursesDataForIner.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Url } from "url";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const CuetUg = () => {
  const featuredCourses = courseDataForIner.courses.filter(
    (course: Course) => course
  );

  return (
    <div className=" bg-gray-200 min-h-screen justify-center item-center py-12 text-black">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="ml-4">
        <h2 className=" text-3xl text-teal-600 font-semibold tracking-wide uppercase">
          cuet-ug
        </h2>
        <p className="mt-2 text-xl leading-8 font-medium tracking-tight sm:text-4xl uppercase">
          Details
        </p>
      </div>
      <div className="mt-4 ml-4 mr-4">
        <div>
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="course">
              {/* <img src={course.image} alt={course.title} /> */}
              <h2>{course.title}</h2>
              <p>
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <p>
                <strong>Price:</strong> ${course.price}
              </p>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuetUg;
