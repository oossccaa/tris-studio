import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import WorkGrid from "@/components/WorkGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
