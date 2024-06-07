import Blog from "@/components/PageLayout/Hero/Blog";
import Brands from "@/components/PageLayout/Hero/Brands";
import Hero from "@/components/PageLayout/Hero/Hero";
import Parallax from "@/components/PageLayout/Hero/Parallax";
import Portfolio from "@/components/PageLayout/Hero/Portfolio";
import Services from "@/components/PageLayout/Hero/Services";
import gsap from "gsap";

import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

export default function Index () {

  gsap.config({
    nullTargetWarn: false,
  });
  
  return (
    <>
      <Cursor cursorSize={0} isGelly={true} />
      <main>
        <Hero />
        <Portfolio />
        <Parallax />
        <Services />
        <Brands />
        <Blog />
      </main>
    </>
  )
}