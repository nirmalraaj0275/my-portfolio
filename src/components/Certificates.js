import React from "react";

const certificates = [
  {
    title: "Basic Coding In Python",
    issuer: "PrepInsta",
    date: "February 2024",
    certifi: "--->",
  },
  {
    title: "Frontend Web Developer",
    issuer: "CodeAlpha",
    date: "July 2024",
    certifi: "--->",
  },
  {
    title: "MERN Stack Developer",
    issuer: "PrepInsta",
    date: "April 2024",
    certifi: "--->",
  },
];

const Certificate = () => {
  return (
    <div id="certificates">
      <h2>Certificates</h2>

      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <h3>{certificate.title}</h3>
            <p>
              {certificate.issuer} - {certificate.date}
            </p>
            {/* Add links if available, or any other details */}
            <p>VEIW{certificate.certifi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
