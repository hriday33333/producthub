"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 3–5 business days depending on your location.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 7-day refund policy if the product is unused and in original condition.",
  },
  {
    question: "Is cash on delivery available?",
    answer: "Yes, COD is available for most locations.",
  },
  {
    question: "How do I track my order?",
    answer:
      "After purchase, you'll receive a tracking link via email or SMS.",
  },
  {
    question: "Are the products authentic?",
    answer:
      "We guarantee 100% authentic & high-quality products.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we offer 24/7 customer support through email and chat.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer  shadow-sm"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>

              <span className="text-2xl transition-transform duration-300">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
