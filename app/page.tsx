import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Section 1 */}
      <section className="flex flex-wrap px-6 py-12 xl:mt-10 lg:mt-0 xl:mb-8 lg:mb-0 justify-center items-center">
        <div className="flex items-center">
          <div className="relative mt-4 lg:mr-48">
            <h1 className="text-5xl font-extrabold mb-4 leading-normal">
              Create <span className="text-dark-blue">software</span> <br />{" "}
              solutions
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              for the MIT community and beyond
            </p>
            <div className="flex space-x-4">
              <Link href="/apply">
                <button className="bg-dark-blue text-white text-xl w-36 py-2 rounded-full font-medium hover:bg-hover-blue transition-colors duration-300">
                  Join us
                </button>
              </Link>
              <Link href="/products">
                <button className="bg-white text-gray-700 text-xl border-2 border-gray-700 w-36 py-2 rounded-full font-medium hover:border-dark-blue hover:text-dark-blue transition-colors duration-300">
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
              className="drop-shadow-lg absolute top-36 -left-20"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="text-center px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Upcoming Projects</h2>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="m-4 w-full sm:w-auto max-w-xs">
            <Image
              src="/images/housing.svg"
              alt="Project 2"
              width={375}
              height={250}
              className="mb-8 drop-shadow-lg"
            />
            <h4 className="text-xl font-semibold m-2">Find summer housing</h4>
            <p className="text-base font-light">
              Are you looking for summer housing near MIT or your internship?
              This project will let you find affordable accommodations and
              connect you with other MIT students living in the same area.
            </p>
          </div>
          <div className="m-4 w-full sm:w-auto max-w-xs">
            <Image
              src="/images/queue.svg"
              alt="Project 1"
              width={375}
              height={250}
              className="mb-8 drop-shadow-lg"
            />
            <h4 className="text-xl font-semibold m-2">OH queue</h4>
            <p className="text-base font-light">
              Professors and TAs can use the OH queue website to keep track of
              students waiting in the OH. Students can see how long the queue is
              and if office hours have changed locations or been canceled.
            </p>
          </div>
          <div className="m-4 w-full sm:w-auto max-w-xs">
            <Image
              src="/images/rideshare.svg"
              alt="Project 3"
              width={375}
              height={250}
              className="mb-8 drop-shadow-lg"
            />
            <h4 className="text-xl font-semibold m-2">Carpool / Rideshare</h4>
            <p className="text-base font-light">
              Uber/Lyft to the airport is too expensive? Find other MIT students
              who are going to the same location as you and share a ride with
              them.
            </p>
          </div>
        </div>
        <Link href="/products">
          <button className="bg-white text-gray-700 text-xl border-2 border-gray-700 w-60 py-2 rounded-full font-medium hover:border-dark-blue hover:text-dark-blue transition-colors duration-300">
            See more projects
          </button>
        </Link>
      </section>

      {/* Section 3 */}
      <section className="bg-light-blue px-6 py-12 w-full">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What we do
          </h2>
          <p className="text-lg mb-8 text-center leading-relaxed">
            Interested in contributing to our upcoming projects? Have a project
            idea of your own? <br></br>
            Full Stack @ MIT is a student-run club that provides{" "}
            <span className="bg-salmon font-bold">full funding</span> to its
            members for creating <br></br>
            <span className="bg-salmon font-bold">software-based products</span>
            . Work with your friends and other club members to create software
            meant for the MIT community or a broader audience.
            <br></br> <br></br>
            Full Stack @ MIT hosts workshops for students who are new to web
            development. Anyone can join!
          </p>
        </div>
        <div className="text-center">
          <Link href="/apply">
            <button className="bg-light-blue text-gray-700 text-xl border-2 border-gray-700 w-48 py-2 rounded-full font-medium hover:border-white hover:text-white transition-colors duration-300">
              Apply here
            </button>
          </Link>
        </div>
      </section>

      {/* Section 4 */}
      <section className="px-6 py-12">
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
