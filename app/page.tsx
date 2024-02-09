import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Image from "next/image";
import bg from "../public/assets/bg.png"

export default function Home() {
  return (
    <div
      className=" bg-gray-100 flex flex-col items-center justify-center">
      <Image
        priority
        fill
        quality={100}
        className=" pointer-events-none select-none"
        src={bg}
        alt="education all solutions"
        style={{ objectFit: 'cover', objectPosition: '75%' }}
      />
      <Hero />
      {/* <div className=" relative container flex flex-wrap items-center justify-end mx-auto mt-16 md:px-12 md:flex-row">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
            A small business is only as good as its tools.
          </h1>
          <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
            We're different. Growlight is the only sass business platform that lets you run your business on one platform.
          </p>
          <div className="flex justify-center mt-14 lg:justify-start">
            <a href="/courses"><button type='button' className='text-white bg-indigo-600 font-medium rounded-lg px-5 py-4 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out'>View Courses</button></a>
            <a href="/batch" ><button type='button' className='ml-4 text-gray-900 bg-gray-200 font-medium rounded-lg px-5 py-4 text-center hover:bg-gray-300 hover:drop-shadow-md transition duration-300 ease-in-out'>Select Batch</button></a>
          </div>
        </div>
      </div> */}
    </div>
  )
}