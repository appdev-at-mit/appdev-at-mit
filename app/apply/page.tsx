const FormPage = () => {
  const iframeSrc =
    "https://docs.google.com/forms/d/e/1FAIpQLSeZSK9ovH-HltWUm9fGfMIqyT8AhrCo9S_Tc7Bu-n_oTTU1dg/viewform?embedded=true";

  return (
    <div className="min-h-screen flex flex-col xl:mx-48 lg:mx-24 md:mx-14 mx-6 xl:my-20 my-10">
      <h1 className="text-4xl font-bold my-3 text-gray-800 text-center">Apply</h1>
      <p className="text-md text-center my-5 text-gray-700 xl:mx-32 lg:mx-48 md:mx-32 mx-6 ">
        Apply to join Full Stack @ MIT. Applications will open at the start of
        the fall 2024 semester. For now, fill out our interest form to be
        notified of updates on our upcoming interest meeting!
        {/* We meet on Sunday from 11AM - 12PM. */}
      </p>
      <iframe
        src={iframeSrc}
        width="100%"
        height="1650"
        className="md:w-[640px] mx-auto"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default FormPage;
