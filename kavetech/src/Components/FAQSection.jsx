import React, { useState } from "react";
import TagLine from "./TagLine";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-500 transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What services does Kavetech offer?",
      answer: "Kavetech specializes in providing cutting-edge AI and machine learning solutions for businesses. Our services include custom AI model development, data analysis and visualization, AI-powered automation, and AI integration consulting. We offer tailored solutions to fit various budgets and business sizes."
    },
    {
      question: "How can AI benefit my business without breaking the bank?",
      answer: "AI can provide significant ROI by improving operational efficiency, enhancing decision-making processes, and automating repetitive tasks. We offer scalable solutions and flexible pricing models to ensure you get the most value for your investment. Our team will work with you to identify the most cost-effective AI solutions that align with your business goals and budget."
    },
    {
      question: "What makes Kavetech's team qualified to handle my AI needs?",
      answer: "Our team consists of highly qualified professionals with advanced degrees in AI, machine learning, and data science from top institutions. We have a combined experience of over 50 years in the field and have successfully implemented AI solutions across various industries. Our experts have published research in leading AI journals and have worked with Fortune 500 companies."
    },
    {
      question: "Can you provide examples of successful AI implementations by Kavetech?",
      answer: "Absolutely! We've helped a mid-sized e-commerce company increase their sales by 30% through an AI-powered recommendation system, reduced operational costs by 25% for a manufacturing firm using predictive maintenance AI, and improved customer satisfaction by 40% for a telecom provider with our AI chatbot solution. We're happy to provide more detailed case studies upon request."
    },
    {
      question: "How does Kavetech ensure the quality of its AI solutions?",
      answer: "Quality is at the core of everything we do. We follow industry best practices and rigorous testing protocols. Our solutions go through multiple rounds of validation and optimization before deployment. We also provide ongoing monitoring and maintenance to ensure continued performance. Our commitment to quality doesn't mean high costs - we believe in delivering premium solutions at competitive prices."
    },
    {
      question: "Is Kavetech a well-established company?",
      answer: "Yes, Kavetech has been in business for over a decade. We're a financially stable company with a strong track record of successful projects and satisfied clients. We've been recognized in industry publications and have won several awards for our innovative AI solutions. Our long-standing partnerships with tech giants and our growing client base across various sectors speak to our reliability and expertise."
    },
    {
      question: "How does Kavetech handle data security and privacy?",
      answer: "We take data security and privacy extremely seriously. All client data is handled with utmost care, using industry-standard encryption and security protocols. We are compliant with GDPR, CCPA, and other relevant data protection regulations. Our team includes certified information security professionals who ensure that all our processes and systems adhere to the highest security standards."
    },
    {
      question: "What kind of support does Kavetech offer after implementation?",
      answer: "We offer comprehensive post-implementation support to ensure the continued success of your AI solution. This includes regular maintenance, performance monitoring, updates, and technical support. We also provide training for your team and ongoing consultations to help you maximize the benefits of your AI investment. Our support packages are designed to be cost-effective while providing the assistance you need."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-3 rounded-2xl shadow-xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;