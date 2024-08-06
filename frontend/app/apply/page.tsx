const FormPage = () => {
  const iframeSrc = 'https://docs.google.com/forms/d/e/1FAIpQLSd49UGgVAe1m4ilEHosP3fV0rmZp6QE2XiSnOcJzL5o7_j9Wg/viewform?embedded=true';

  return (
    <div className="min-h-screen flex flex-col xl:mx-64 lg:mx-48 md:mx-32 mx-6 my-20">
      <h1 className="text-4xl font-bold my-3 text-gray-800">
        Apply
      </h1>
      <p className="mb-8 mt-2 text-gray-700 text-md">
        Apply to join Full Stack @ MIT. Applications are open any time during the school year.
        We meet on Sunday from 11AM - 12PM.
      </p>
      <iframe
        src={iframeSrc}
        width="640"
        height="1650"
        title="Google Form"
        className="mx-auto"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default FormPage;
