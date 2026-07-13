import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import WhyMe from "@/components/WhyMe";
import Teaching from "@/components/Teaching";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkGrid />
        <WhyMe />
        <Teaching />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
