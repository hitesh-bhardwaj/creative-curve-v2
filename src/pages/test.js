import React, { Suspense, useRef, useState } from "react";
import { GlobalCanvas, SmoothScrollbar, UseCanvas } from "@14islands/r3f-scroll-rig";
import { Environment, Loader } from "@react-three/drei";
import { BodyCopy, Headline, Subtitle } from "@/components/webgl/Text";
import { Image } from "@/components/webgl/Image";
import WebGLImage from "@/components/NewWebGL/WebGLImage";
import ImageNew from "@/components/NewWebGL/ImageNew";

export default function App() {

  const el = useRef(null);
  const img = useRef(null);

  return (
      <article>
        <header className="container">
          <div className="headerLayout">
            <h2>
              <Headline wobble>
                RESPONSIVE WEBGL
              </Headline>
            </h2>
            <BodyCopy as="p" className="subline">
              Progressively enhance your React website with WebGL using
              r3f-scroll-rig, React Three Fiber and Three.js
            </BodyCopy>
          </div>
        </header>
        <section className="container">
          <ImageNew className="ImageLandscape" src="/background.jpg"/>
          <Image
            src="/background.jpg"
            className="ImageLandscape"
          />
        </section>
        <section className="container">
          <h3>
            <Subtitle>We use CSS to create a responsive layout.</Subtitle>
            <em>
              <Subtitle>
                A Canvas on top tracks DOM elements and enhance them with WebGL.
              </Subtitle>
            </em>
          </h3>
          <p>
            <BodyCopy>
              Try turning off WebGL using the button in the sticky header.
              You’ll notice smooth scrolling is disabled, and all scroll-bound
              WebGL effects disappears.
            </BodyCopy>
          </p>
        </section>
        <section className="ParallaxContainer">
          <Image
            src="/background.jpg"
            className="aspect-9_13"
            parallaxSpeed={1.08}
          />
          <Image
            src="/background.jpg"
            className="aspect-16_11"
            parallaxSpeed={0.92}
          />
        </section>
        <section className="container">
          <h4>
            <BodyCopy>
              Thanks to Threejs we can also render 3D geometry or models. The
              following image is replaced by a box. Try scrolling hard to make
              it wiggle.
            </BodyCopy>
          </h4>
        </section>
        <section className="container">
          <h3>
            <Subtitle>Most websites use a mix of WebGL and HTML.</Subtitle>
            <em>
              <Subtitle>
                However, the Lens refraction requires all images and text to be
                WebGL.
              </Subtitle>
            </em>
          </h3>
          <p>
            <a href="https://github.com/14islands/r3f-scroll-rig">
              <BodyCopy>
                You can find the r3f-scroll-rig library on Github. Please use
                WebGL responsibly™.
              </BodyCopy>
            </a>
          </p>
        </section>
      </article>
  );
}
