"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, RefObject } from "react";

// Custom hook for scroll animations with proper typing
const useScrollAnimation = (): [RefObject<HTMLElement>, boolean] => {
  const ref = useRef<HTMLElement>(null);
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
        className={`flex flex-wrap px-6 py-12 xl:mt-10 lg:mt-0 xl:mb-8 lg:mb-0 justify-center items-center 
          }`}
      >
        <div className="flex items-center">
          <div className={`relative mt-4 lg:mr-48 `}>
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
              src="/images/fullclub2.JPG"
              alt="Club Photo"
              width={500}
              height={300}
              className={`drop-shadow-lg rounded-md ${
                section1Visible ? "animate-float" : ""
              } shadow-[0px_0px_15px_2px_rgba(100,201,205,0.7)]`}
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        className="text-center px-6 py-12"
      >
        <h2 className="text-3xl font-bold mb-6">Current Projects</h2>
        <div className="flex flex-wrap justify-between mb-6 md:flex-row">
          <div className="w-full md:w-1/3 p-6">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/fullhouse.png"
                alt="Project 1"
                width={375}
                height={250}
                className="drop-shadow-lg"
              />
            </div>
            <h4 className="text-xl font-semibold m-2">Find summer housing</h4>
            <p className="text-base font-light">
              Are you looking for summer housing near MIT or your internship? This project will let you find affordable accommodations and connect you with other MIT students living in the same area.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-6">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/marketplace.png"
                alt="Project 2"
                width={375}
                height={250}
                className="drop-shadow-lg"
              />
            </div>
            <h4 className="text-xl font-semibold m-2">College Marketplace</h4>
            <p className="text-base font-light">
              College Marketplace is an online platform designed for students to buy, sell, and showcase products and services. Search for on-campus deals with ease!
            </p>
          </div>
          <div className="w-full md:w-1/3 p-6">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/clubs1.jpeg"
                alt="Project 3"
                width={375}
                height={250}
                className="drop-shadow-lg"
              />
            </div>
            <h4 className="text-xl font-semibold m-2">MIT Clubs</h4>
            <p className="text-base font-light">
              There are too many clubs and organizations to keep track of. Browse MIT's full list of clubs, and filter by club size, focus, and recruiting status to find your fit.
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
        className={`bg-light-blue px-6 py-12 transition-opacity duration-1000 
          `}
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
        <div className="flex justify-center mb-8">
          <Image
            src="/images/presenter6.JPG"
            alt="What we do"
            width={450}
            height={300}
            className="drop-shadow-lg rounded-md"
          />
        </div>
        <div className="text-center">
          <Link href="/apply">
            <button
              className={`bg-light-blue text-gray-700 text-xl border-2 border-gray-700 w-48 py-2 rounded-full font-medium hover:border-white hover:text-white transition-colors duration-300 animate-pulse ${
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
        className={`px-4 py-8 md:px-6 md:py-12 transition-opacity duration-1000 
         `}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">
          Our Sponsors
        </h2>
        <div className="flex flex-wrap justify-center items-center mt-6 md:mt-14 space-x-8 md:space-x-12">
          <div
            className={`w-44 md:w-72 ${
              sponsorsVisible ? "fade-up-animation" : ""
            }`}
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
            className={`w-36 md:w-56 ${
              sponsorsVisible ? "fade-up-animation delay-200" : ""
            }`}
          >
            <Link href="https://www.warp.dev/?utm_source=mit_fullstack&utm_medium=newsletter&utm_campaign=fullstack_20241107" target="_blank">
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
        className={`px-6 pt-6 pb-12 transition-opacity duration-1000 
          `}
      >
        <div className="text-center">
          <p className="text-lg mb-8">
            Like what we do? Full Stack @ MIT needs your support to provide full
            funding for student projects.
          </p>
          <Link href="/support">
            <button className="bg-white text-gray-700 text-xl border-2 border-gray-700 w-48 py-2 rounded-full font-medium hover:border-dark-blue hover:text-dark-blue transition-colors duration-300">
              Sponsor us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
