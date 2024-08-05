const FormPage = () => {
  const iframeSrc = 'https://docs.google.com/forms/d/e/1FAIpQLSd49UGgVAe1m4ilEHosP3fV0rmZp6QE2XiSnOcJzL5o7_j9Wg/viewform?embedded=true';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6 mt-8 text-black">
        Apply
      </h1>
      <p className="text-center mb-8 mt-2 text-black">
        Apply to join Full Stack @ MIT. Applications are open any time during the school year.
        We meet on Sunday from 11AM - 12PM.
      </p>
      <iframe
        src={iframeSrc}
        width="640"
        height="1350"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default FormPage;
