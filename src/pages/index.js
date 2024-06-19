import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Blog from "@/components/PageLayout/Hero/Blog";
import Brands from "@/components/PageLayout/Hero/Brands";
import Hero from "@/components/PageLayout/Hero/Hero";
import Parallax from "@/components/PageLayout/Hero/Parallax";
import Portfolio from "@/components/PageLayout/Hero/Portfolio";
import Services from "@/components/PageLayout/Hero/Services";
import Transition from "@/components/Transition";
import gsap from "gsap";

// import { Cursor } from 'react-creative-cursor';
import { ReactCursor } from "@/components/ReactCursor";
import 'react-creative-cursor/dist/styles.css';

export default function Index () {

  gsap.config({
    nullTargetWarn: false,
  });
  
  return (
    <>
      <ReactCursor cursorSize={10} animationDuration={0.5}/>
      <main>
        <Header />
        <Hero />
        <Portfolio />
        <Parallax />
        <Services />
        <Brands />
        <Blog />
        <Footer />
      </main>
      <Transition />
    </>
  )
}