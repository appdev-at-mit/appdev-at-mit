import React from 'react';

const FormPage = () => {
  const iframeSrc = 'https://docs.google.com/forms/d/e/1FAIpQLSd49UGgVAe1m4ilEHosP3fV0rmZp6QE2XiSnOcJzL5o7_j9Wg/viewform?embedded=true';

  return (
    <div>
      <iframe
        src={iframeSrc}
        width="640"
        height="480"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default FormPage;
