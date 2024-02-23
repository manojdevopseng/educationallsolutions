import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";

export default function Home() {
  return (
    <main className="bg-white/[0.96] antialiased bg-grid-black/[0.02] items-center justify-center">
      <Hero />
      <FeaturedCourses />
    </main>
  )
}