"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, MutableRefObject } from "react";

// Custom hook for scroll animations
const useScrollAnimation = (): [MutableRefObject<HTMLElement | null>, boolean] => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
};

export default function Home() {
  const [section1Ref, section1Visible] = useScrollAnimation();
  const [section2Ref, section2Visible] = useScrollAnimation();
  const [section3Ref, section3Visible] = useScrollAnimation();
  const [sponsorsRef, sponsorsVisible] = useScrollAnimation();
  const [section4Ref, section4Visible] = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Section 1 */}
      <section
        ref={section1Ref}
        className={`flex flex-wrap px-6 py-12 xl:mt-10 lg:mt-0 xl:mb-8 lg:mb-0 justify-center items-center opacity-0 transition-opacity duration-1000 ${
          section1Visible ? "animate-fadeIn" : ""
        }`}
      >
        <div className="flex items-center">
          <div className="relative mt-4 lg:mr-48">
            <h1 className="text-5xl font-extrabold mb-4 leading-normal">
              Gain <span className="text-dark-blue">hands-on</span> <br />{" "}
              software experience
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Join a community of passionate developers
            </p>
            <div className={section1Visible ? "animate-scaleIn" : ""}>
              <Link href="/apply">
                <button className="bg-dark-blue text-white text-xl w-36 py-2 mr-4 rounded-full font-medium hover:bg-hover-blue transition-colors duration-300 animate-bounce">
                  Join us
                </button>
              </Link>
              <Link href="/products">
                <button className="bg-white text-gray-700 text-xl border-2 border-gray-700 w-36 py-2 rounded-full font-medium hover:border-dark-blue hover:text-dark-blue transition-colors duration-300 animate-bounce">
                  Products
                </button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="/images/site.svg"
              alt="site.svg"
              width={540}
              height={360}
              className="drop-shadow-lg"
            />
            <Image
              src="/images/code.svg"
              alt="code.svg"
              width={375}
              height={250}
              className={`drop-shadow-lg absolute top-36 -left-20 ${
                section1Visible ? "animate-float" : ""
              }`}
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        className={`text-center px-6 py-12 opacity-0 transition-opacity duration-1000 ${
          section2Visible ? "animate-fadeIn" : ""
        }`}
      >
        <h2 className="text-3xl font-bold mb-6">Upcoming Projects</h2>
        <div className="flex flex-wrap justify-center mb-8">
          <div className={`m-4 ${section2Visible ? "animate-fadeIn" : ""}`}>
            <Image
              src="/images/housing.svg"
              alt="Project 2"
              width={375}
              height={250}
              className="mb-8 drop-shadow-lg"
            />
            <h4 className="text-xl font-semibold m-2">Find summer housing</h4>
            <p className="text-base font-light w-96">
              Are you looking for summer housing near MIT or your internship?
              This project will let you find affordable accommodations and
              connect you with other MIT students living in the same area.
            </p>
          </div>
          <div className={`m-4 ${section2Visible ? "animate-fadeIn delay-200" : ""}`}>
            <Image
              src="/images/queue.svg"
              alt="Project 1"
              width={375}
              height={250}
              className="mb-8 drop-shadow-lg"
            />
            <h4 className="text-xl font-semibold m-2">OH queue</h4>
            <p className="text-base font-light w-96">
              Professors and TAs can use the OH queue website to keep track of
              students waiting in the OH. Students can see how long the queue is
              and if office hours have changed locations or been canceled.
            </p>
          </div>
          <div className={`m-4 ${section2Visible ? "animate-fadeIn delay-400" : ""}`}>
            <Image
              src="/images/rideshare.svg"
              alt="Project 3"
              width={375}
              height={250}
              className="mb-8 drop-shadow-lg"
            />
            <h4 className="text-xl font-semibold m-2">Carpool / Rideshare</h4>
            <p className="text-base font-light w-96">
              Uber/Lyft to the airport is too expensive? Find other MIT students
              who are going to the same location as you and share a ride with
              them.
            </p>
          </div>
        </div>
        <Link href="/products">
          <button className="bg-white text-gray-700 text-xl border-2 border-gray-700 w-60 py-2 rounded-full font-medium hover:border-dark-blue hover:text-dark-blue transition-colors duration-300 animate-pulse">
            See more projects
          </button>
        </Link>
      </section>

      {/* Section 3 */}
      <section
        ref={section3Ref}
        className={`bg-light-blue px-6 py-12 opacity-0 transition-opacity duration-1000 ${
          section3Visible ? "animate-slideUp" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-6 text-center">What we do</h2>
          <p className="text-lg mb-8 text-center leading-relaxed">
            Our mission is to foster a community of full stack developers,
            provide members with opportunities to cultivate their skills through
            impactful hands-on projects, and promote full stack development in
            the greater Cambridge community.
          </p>
        </div>
        <div className="text-center">
          <Link href="/apply">
            <button
              className={`bg-light-blue text-gray-700 text-xl border-2 border-gray-700 w-48 py-2 rounded-full font-medium hover:border-white hover:text-white transition-colors duration-300 ${
                section3Visible ? "animate-scaleIn" : ""
              }`}
            >
              Apply here
            </button>
          </Link>
        </div>
      </section>

      {/* Sponsors Section */}
      <section
        ref={sponsorsRef}
        className={`px-4 py-8 md:px-6 md:py-12 opacity-0 transition-opacity duration-1000 ${
          sponsorsVisible ? "animate-fadeUp" : ""
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">
          Our Sponsors
        </h2>
        <div className="flex flex-wrap justify-center items-center mt-6 md:mt-14 space-x-8 md:space-x-12">
          <div
            className={`w-44 md:w-72 ${sponsorsVisible ? "fade-up-animation" : ""}`}
          >
            <Link href="https://www.convex.dev/" target="_blank">
              <Image
                src="/images/convex-logo.svg"
                alt="Convex Logo"
                width={350}
                height={200}
                className="mx-auto"
              />
            </Link>
          </div>
          <div
            className={`w-36 md:w-56 ${sponsorsVisible ? "fade-up-animation delay-200" : ""}`}
          >
            <Link href="https://www.warp.dev/" target="_blank">
              <Image
                src="/images/warp-logo.png"
                alt="Warp Logo"
                width={230}
                height={200}
                className="mx-auto"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section
        ref={section4Ref}
        className={`px-6 pt-6 pb-12 opacity-0 transition-opacity duration-1000 ${
          section4Visible ? "animate-slideUp" : ""
        }`}
      >
        <div className="text-center">
          <p className="text-lg mb-8">
            Like what we do? Full Stack @ MIT needs your support to provide full
            funding for student projects.
          </p>
          <Link href="/support">
            <button className="bg-white text-gray-700 text-xl border-2 border-gray-700 w-48 py-2 rounded-full font-medium hover:border-dark-blue hover:text-dark-blue transition-colors duration-300 animate-pulse">
              Sponsor us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
