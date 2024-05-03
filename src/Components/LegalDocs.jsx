import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          HallTicket <span className="legal-siteSign">Generator</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        EasyTicketGen is a user-friendly online platform designed to simplify the process of creating customized hall tickets for various events such as exams, conferences, seminars, workshops, and more. With a wide range of templates and customization options, users can effortlessly generate professional-looking hall tickets tailored to their specific requirements.        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal and study information. We
          ensure secure data handling, and you can trust that your information
          is treated with the utmost confidentiality.This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
We use your data to provide and improve the Service.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using HallTicket Generator, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with admin, Controllers,
          and the responsibilities of both parties. It's essential to understand
          these terms to ensure a smooth experience for all users.
        </p>

        <p className="legal-title">Request Info</p>
        <p className="legal-description">
        Our hall ticket generator app website streamlines the process of gathering event information and customizing hall tickets. Users can easily register and create accounts, providing basic details such as name and email address. With intuitive interfaces, users input essential event details like event name, date, time, and venue, ensuring accurate ticket generation. The app offers a plethora of customization options, allowing users to choose from various templates, add logos or images, and personalize colors and fonts to match their branding or event theme. Before finalizing, users can preview their customized hall tickets to ensure accuracy. Once satisfied, they can download their hall tickets in a printable PDF format, ready for distribution. For users requiring premium features, secure payment options are available. Prior to proceeding, users are prompted to agree to the app's terms of service and privacy policy. Additionally, our website offers robust support channels, ensuring users can reach out for assistance if needed. With our comprehensive approach, users can effortlessly create professional-looking hall tickets tailored to their specific event needs.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          Overall, our hall ticket generator app simplifies the process of creating customized hall tickets for events, offering users a user-friendly interface and a range of customization options to meet their specific needs.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2023-2024 HallTicket Generator. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
