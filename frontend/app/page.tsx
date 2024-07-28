import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="text-center px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-black">
          Full Stack @ MIT
        </h1>
        <p className="text-lg mb-8 text-gray-600">
          We’re a student-run project team at MIT that builds
          products to improve the lives of our community.
        </p>
      </div>
    </div>
  );
}
