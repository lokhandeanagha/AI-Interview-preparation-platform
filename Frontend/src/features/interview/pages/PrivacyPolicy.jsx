import React from "react";
import "../style/policy.scss";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-card">
         <Link to="/" className="back-btn">
            ← Back to Home
        </Link>
        <h1>🔒 Privacy Policy</h1>
        <p className="subtitle">
          Your privacy is important to us. This policy explains how your
          information is collected, used, and protected while using our
          AI Interview Preparation platform.
        </p>

        <section>
          <h2>📄 Information We Collect</h2>
          <ul>
            <li>Resume files (PDF/DOCX) you upload.</li>
            <li>Job descriptions you provide.</li>
            <li>Your self-description and profile details.</li>
          </ul>
        </section>

        <section>
          <h2>🤖 How We Use Your Data</h2>
          <ul>
            <li>Generate personalized interview strategies.</li>
            <li>Analyze resume and job description compatibility.</li>
            <li>Provide AI-powered interview preparation.</li>
            <li>Improve the overall user experience.</li>
          </ul>
        </section>

        <section>
          <h2>🛡️ Data Security</h2>
          <p>
            We take appropriate security measures to protect your uploaded
            documents and personal information. Your data is never sold or
            shared with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2>✅ Your Rights</h2>
          <ul>
            <li>You control the information you upload.</li>
            <li>You may request deletion of your uploaded data.</li>
            <li>Your information is used only to provide interview services.</li>
          </ul>
        </section>

        <div className="policy-footer">
          Last Updated: July 2026
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;