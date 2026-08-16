import React from "react";
import "../style/policy.scss";
import { Link } from "react-router";

const HelpCenter = () => {
    return (
        <div className="policy-page">
            <div className="policy-card">

                <Link to="/" className="back-btn">
                            ← Back to Home
                </Link>

                <h1 className="green-title">💬 Help Center</h1>

                <p className="subtitle">
                    Welcome to the Help Center. Here you'll find answers to common
                    questions about using the AI Interview Preparation platform.
                </p>

                <section>
                    <h2>🚀 How do I generate an interview strategy?</h2>
                    <p>
                        Upload your resume or provide a brief self-description,
                        paste the job description, and click
                        <strong> "Generate My Interview Strategy"</strong>.
                    </p>
                </section>

                <section>
                    <h2>📄 What file formats are supported?</h2>
                    <ul>
                        <li>PDF (.pdf)</li>
                        <li>Microsoft Word (.docx)</li>
                        <li>Maximum file size: 5 MB</li>
                    </ul>
                </section>

                <section>
                    <h2>🤖 How does the AI work?</h2>
                    <p>
                        The AI analyzes your resume or self-description alongside
                        the job description to create a personalized interview
                        preparation strategy, highlight important skills, and
                        suggest relevant interview topics.
                    </p>
                </section>

                <section>
                    <h2>❓ Frequently Asked Questions</h2>
                    <ul>
                        <li>Do I need a resume? <strong>No.</strong> A self-description also works.</li>
                        <li>Can I generate multiple interview plans? <strong>Yes.</strong></li>
                        <li>Is my uploaded data secure? <strong>Yes.</strong> We prioritize protecting your information.</li>
                    </ul>
                </section>

                <section>
                    <h2>📧 Need More Help?</h2>
                    <p>
                        If you have additional questions or encounter any issues,
                        please contact our support team.
                    </p>

                    <p>
                        <strong>Email:</strong> support@interviewai.com
                    </p>
                </section>

                <div className="policy-footer">
                    We're here to help you succeed in your interviews. 🚀
                </div>

            </div>
        </div>
    );
};

export default HelpCenter;