// const FormPage = () => {
//   const applicationFormSrc =
//     "https://docs.google.com/forms/d/e/1FAIpQLSd49UGgVAe1m4ilEHosP3fV0rmZp6QE2XiSnOcJzL5o7_j9Wg/viewform?embedded=true";
//   const interestFormLink = "https://forms.gle/Vs27M3RcpyhY5DCk7";
//   const sipbLink = "https://sipb.mit.edu/";

//   return (
//     <div className="min-h-screen flex flex-col xl:mx-48 lg:mx-24 md:mx-14 mx-6 xl:my-20 my-10">
//       <h1 className="text-4xl font-bold my-3 text-gray-800 text-center">
//         Apply to Full Stack @ MIT
//       </h1>
//       <p className="text-md text-center my-5 text-gray-700 xl:mx-32 lg:mx-48 md:mx-32 mx-6">
//         We welcome all skill levels! Applications are open until{" "}
//         <span className="font-semibold">
//           Wednesday, September 18 at 11:59 PM
//         </span>
//         .
//       </p>

//       <div className="bg-gray-100 p-6 rounded-md shadow-md my-5 mx-auto w-full lg:w-2/3">
//         <h2 className="text-lg font-semibold text-center text-gray-800 mb-3">
//           Want to learn more before applying?
//         </h2>
//         <p className="text-center text-gray-700 mb-5">
//           Attend our info session:
//         </p>
//         <ul className="list-decimal list-inside text-gray-700 mt-4 mx-5">
//           {/* <li className="my-3">
//             <span className="font-semibold">
//               <a href={sipbLink} className="text-blue-600 underline">
//                 MIT SIPB Interest Meeting
//               </a>
//             </span>
//             <br />
//             Monday, September 9, at 7:30 PM
//             <br />
//             <span className="italic">Location: W20-557 (5th floor, Stud)</span>
//             <br />
//             <p className="text-sm text-gray-500 mt-2">
//               * Though this is for general SIPB, we will talk a bit about Full
//               Stack too.
//             </p>
//           </li> */}
//           <li className="my-3">
//             <span className="font-semibold">
//               Full Stack @ MIT Official Interest Meeting
//             </span>
//             <br />
//             Friday 5:30-6 PM in 1-135
//             <br />
//             <span className="italic">
//               Fill out our{" "}
//               <a href={interestFormLink} className="text-blue-600 underline">
//                 interest form
//               </a>{" "}
//               to get on our mailing list.
//             </span>
//             <br />
//             <p className="text-sm text-gray-500 mt-2">
//               * Look forward to pizza and boba!
//             </p>
//           </li>
//         </ul>
//       </div>

//       <iframe
//         src={applicationFormSrc}
//         width="100%"
//         height="1650"
//         className="md:w-[640px] mx-auto mt-10"
//         title="Application Form"
//       >
//         Loading…
//       </iframe>
//     </div>
//   );
// };

// export default FormPage;

const FormPage = () => {
  const sipbLink = "https://sipb.mit.edu/";
  const interestFormLink = "https://forms.gle/Vs27M3RcpyhY5DCk7";

  return (
    <div className="min-h-screen flex flex-col xl:mx-48 lg:mx-24 md:mx-14 mx-6 xl:my-20 my-10">
      <h1 className="text-4xl font-bold my-3 text-gray-800 text-center">
        Full Stack @ MIT Applications
      </h1>
      <div className="text-center my-5 text-gray-700 xl:mx-32 lg:mx-48 md:mx-32 mx-6">
        <p className="text-lg mb-4">
          Applications for Fall 2024 are now closed.
        </p>
        <p className="text-md">
          We will be recruiting again in the{" "}
          <span className="font-semibold">Spring 2025</span> semester. Check back then!
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-md shadow-md my-5 mx-auto w-full lg:w-2/3">
        <h2 className="text-lg font-semibold text-center text-gray-800 mb-3">
          Interested in joining next semester?
        </h2>
        <p className="text-center text-gray-700 mb-5">
          Fill out our{" "}
          <a href={interestFormLink} className="text-blue-600 hover:text-blue-800 underline">
            interest form
          </a>{" "}
          to get notified when applications open again.
        </p>
        <div className="text-center text-gray-700 mt-4">
          <p className="italic">
            We welcome students of all skill levels and backgrounds!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormPage;