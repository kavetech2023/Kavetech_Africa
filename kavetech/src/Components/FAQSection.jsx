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
      question: "How can your software solutions benefit my business?",
      answer: "Our custom software solutions can revolutionize your business by streamlining processes, enhancing user experiences, and providing valuable insights. We build apps and websites tailored to your specific needs, leading to increased efficiency, reduced costs, and new revenue opportunities across various departments and industries."
    },
    {
      question: "Is custom software development expensive?",
      answer: "Not with us. At Kavetech, we offer scalable software solutions to fit various budgets without compromising on quality. Our team works closely with you to identify cost-effective implementations that provide the highest ROI for your specific business needs."
    },
    {
      question: "How does Kavetech ensure high-quality software solutions at competitive prices?",
      answer: "We leverage our extensive expertise, efficient processes, and cutting-edge technologies to deliver premium software solutions cost-effectively. Our team's deep knowledge allows us to work smartly, reducing development time without sacrificing quality. We also use cloud technologies and open-source tools strategically to keep costs down while maintaining high standards."
    },
    {
      question: "What makes Kavetech different from other software development companies?",
      answer: "Kavetech stands out with our combination of technical expertise, industry experience, and commitment to affordability. We offer tailored solutions that precisely fit your needs, ensuring you don't pay for unnecessary features. Our team has a proven track record of delivering innovative, high-impact solutions across various sectors."
    },
    {
      question: "How long does it take to develop a custom app or website?",
      answer: "The timeline varies depending on the complexity of the project. Simple implementations can be completed in a few weeks, while more complex projects might take several months. We work efficiently to deliver results as quickly as possible without compromising on quality, and we always keep you informed about the progress and timeline."
    },
    {
      question: "Do I need technical expertise to work with Kavetech?",
      answer: "Not at all. We specialize in translating your business needs into technical solutions. Our team will guide you through the entire process, explaining technical concepts in plain language and ensuring that the final product aligns perfectly with your vision and requirements."
    },
    {
      question: "How do you ensure the security and privacy of our data in the software you develop?",
      answer: "Data security and privacy are our top priorities. We employ industry-standard encryption, secure cloud storage, and strict access controls in all our software solutions. Our development processes comply with GDPR, CCPA, and other relevant regulations. We're transparent about our data handling practices and can sign NDAs for added protection."
    },
    {
      question: "What kind of support do you offer after the software is developed and implemented?",
      answer: "We provide comprehensive post-implementation support, including system monitoring, regular maintenance, updates, and technical support. We also offer training for your team and ongoing consultations to ensure you're getting the most value from your software investment. Our support packages are designed to be both effective and affordable."
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