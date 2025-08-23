import Hero from "@/Component/Hero";
import About from "@/Component/About";
import Stats from "@/Component/Stats";
import CTA from "@/Component/CTA";
import Blog from "@/Component/Blog";
import Map from "@/Component/Map";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <CTA />
      <Blog />
      <Map />
    </>
  );
}