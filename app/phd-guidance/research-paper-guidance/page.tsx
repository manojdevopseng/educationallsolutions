"use client";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import courseDataForIner from "@/data/phdGuidance/rpGuidance.json";
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

const ResearchPaperGuidance = () => {
  const featuredCourses = courseDataForIner.courses.filter(
    (course: Course) => course
  );

  return (
    <div className=" bg-gray-200 min-h-screen justify-center item-center py-12 text-black">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="ml-4">
        <h2 className=" text-3xl text-center text-teal-600 font-semibold tracking-wide uppercase">
          Research Paper Guidance
        </h2>
        <p className="bg-slate-300 text-center bg-opacity-20 underline rounded-md left-0 pl-0 p-4 text-xl leading-8 tracking-tight mt-10 sm:text-2xl uppercase font-bold">
          Guidance Details
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
                      <section className="mt-4">
                        <ul className="list-disc pl-4">
                          <li className="ml-4">Learn about different Research Paper Formats.</li>
                          <li className="mt-3 ml-4">Explore effective methods for conducting literature reviews, <br /> gathering data, and selecting appropriate research methodologies.</li>
                          <li className="mt-3 ml-4">Develop the ability to critically analyze research findings, <br /> identify gaps in existing literature, and formulate research questions <br /> that contribute meaningfully to your field.</li>
                          <li className="mt-3 ml-4">Master the art of clear and concise academic writing, including <br />proper citation practices and adherence to style guidelines.</li>
                          <li className="mt-3 ml-4">Learn effective strategies for creating engaging presentations of your <br />research.</li>
                        </ul>
                      </section>
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

export default ResearchPaperGuidance;
