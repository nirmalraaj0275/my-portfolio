import React from "react";

const certificates = [
  {
    title: "Frontend Web Developer",
    issure: "CodeAlpha",
    Date: "July 2024",
  },
  {
    title: "MERN Stack Developer",
    issure: "NextOne Solurion",
    Date: "September 2024",
  },
];

const Certificate = () => {
  return (
    <div>
      <h2>Certificate</h2>
      <ul>
        {certificates.map((certificate, index) => (
          <li key={index}>
            <h3>{certificate.title}</h3>
            <p>
              {certificate.issure}--{certificate.Date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificate;
