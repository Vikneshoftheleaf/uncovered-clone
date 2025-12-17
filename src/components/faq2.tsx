"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const faqData = [
  {
    id: 1,
    question: "How does the fractional Competitive Intelligence teammate work?",
    answer: "Uncovered becomes part of your team. Delegate research and analysis on competitors or market. We proactively seek out intel on your behalf, and catch any gaps in your Competitive Intelligence program."
  },
  {
    id: 2,
    question: "Do you have an affiliate program?",
    answer: "Yes, we do have an affiliate program! We offer competitive rewards because we value our long-term partners. For details about our program, check out our Affiliate page in the footer."
  },
  {
    id: 3,
    question: "What are the payment terms of the subscriptions?",
    answer: "Uncovered offers monthly and annual subscription contracts. Monthly contracts are billed on a monthly basis, and annual contracts are billed annually."
  },
  {
    id: 4,
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial. Our trial is to make sure we are mutually a good fit. You are welcome to cancel during the trial period."
  }
];

export default function FAQs() {
  const [openId, setOpenId] = useState<number | null>(null);
  const router = useRouter();

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#030014] text-white py-24 px-6 flex justify-center font-sans">
      <div className="grid gap-16 w-full max-w-6xl grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-[20%] items-center gap-2 px-4 py-1 border border-[#2a2a4a] rounded-full bg-white/5 text-sm">
            <span className="text-lg">?</span> FAQs
          </div>

          <h2 className="text-4xl font-bold leading-tight">
            Questions?<br />
            We've got answers.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Find no-fluff answers here. If we've missed something, drop us an email or message.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="inline-flex w-[38%] items-center gap-2 px-6 py-3 border border-[#2a2a4a] rounded-full text-white text-base font-medium transition-colors hover:bg-[#0a0a1f] hover:border-gray-600"
          >
            Contact Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border border-[#1f1f3a] transition-colors ${isOpen ? "border-purple-600" : "hover:border-gray-600"} bg-[#05051e]`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex justify-between items-center px-6 py-6 text-left gap-4 cursor-pointer"
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full border border-[#2a2a4a] transition-all ${isOpen ? "bg-purple-600 border-purple-600 text-white rotate-180" : "text-gray-400"}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19V5M5 12l7-7 7 7"/>
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="px-6 pb-6 text-gray-400 text-base leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
