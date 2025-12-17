"use client";
import { useState } from "react";
import LogosMarquee from "./LogoMarquee";

const scanItems = [
  "Scan Competitor News", "Scan Competitor Social Channels", "Scan Competitor Pricing",
  "Scan Competitor Features", "Scan Competitor Messaging", "Scan Competitor Hiring",
  "Scan Competitor A/B Tests", "Scan Competitor Website Performance", "Scan for New Competitors",
  "Scan for Partnerships", "Scan for Interviews", "Analyse Competitor Content Strategy",
  "Analyse Competitor Customer Reviews", "Analyse Competitor SEO Strategies",
  "Analyse Competitor Paid Advertising", "Analyse Competitor Blog Posts",
  "Monitor Competitor Patents", "Monitor Competitor Web Traffic",
  "Monitor Mobile App Performance", "Monitor Web App Performance",
  "Track Competitor Market Share", "Track Competitor Industry Awards"
];

const battleContent = {
  weaknesses: {
    title: "Competitor Weaknesses",
    headerIconColor: "#8b5cf6",
    descTitle: "Why we win:",
    desc: "We ensure same-day turnaround with our streamlined sales process and offer a 'try before you buy' demo. Unlike competitors with lengthy sales cycles, we prioritize efficiency, real-time analytics, and client satisfaction.",
    items: ["Product", "Pricing and Packaging", "Product Features", "Go to Market", "HR and Talent Insights", "Social Reach"]
  },
  strengths: {
    title: "Competitor Strengths",
    headerIconColor: "#ef4444",
    descTitle: "Objection Handling:",
    desc: "Competitor A has a strong legacy presence. Counter this by highlighting their slow deployment times and hidden support fees compared to our transparent pricing model.",
    items: ["Brand Recognition", "Enterprise Integrations", "Legacy Database", "Global Support", "Custom API", "On-premise Options"]
  }
};

export default function FeaturesList() {
  const [scanState, setScanState] = useState<"idle" | "scanning" | "complete">("idle");
  const [battleTab, setBattleTab] = useState<"strengths" | "weaknesses">("strengths");

  const handleScan = () => {
    setScanState("scanning");
    setTimeout(() => setScanState("complete"), 2500);
  };
  const handleReset = () => setScanState("idle");

  return (
    <section className="relative py-12 overflow-hidden bg-[#060016] text-white font-sans">
      {/* Background glows */}
      <div className="absolute w-[640px] h-[640px] rounded-full blur-[140px] opacity-10 -top-56 -left-44 bg-purple-600"></div>
      <div className="absolute w-[640px] h-[640px] rounded-full blur-[140px] opacity-10 -bottom-64 -right-44 bg-blue-600"></div>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <section className="tracking-wide p-6 mb-6">
          <h1 className="lg:text-4xl text-3xl text-center font-bold">Made specifically <br />for B2B SaaS teams.</h1>
          <h2 className="lg:text-md text-sm text-center text-slate-400 font-semibold">Avoid one-size-fits-all solutions. <br />We are your tailored B2B SaaS framework for analyzing competition.</h2>
        </section>


        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1: Multi-Channel */}
          <div className="relative bg-[#0b0c15] border border-white/10 rounded-lg p-4 flex flex-col justify-between hover:border-white/20 hover:-translate-y-1 transition-all">
            <LogosMarquee />
            <div className="mt-4">
              <h3 className="text-white text-lg font-medium mb-2">Multi-Channel</h3>
              <p className="text-gray-400 text-sm">Data is sourced from quality data sources, ensuring accurate insights.</p>
            </div>
          </div>

          {/* Card 2: Fractional Teammate */}
          <div className="relative bg-[#0b0c15] border border-white/10 rounded-lg flex flex-col hover:border-white/20 hover:-translate-y-1 transition-all">
            <div className="relative h-60 flex items-center justify-center px-4">
              {/* Radar Rings */}
              <div className="absolute w-24 h-24 rounded-full border border-white/20 animate-pulse"></div>
              <div className="absolute w-36 h-36 rounded-full border border-white/20 animate-pulse delay-150"></div>
              <div className="absolute w-44 h-44 rounded-full border border-white/20 animate-pulse delay-300"></div>
              {/* Center Logo */}
              <div className="relative z-10 w-16 h-16 rounded-lg bg-white flex items-center justify-center shadow-lg hover:bg-gradient-to-tr hover:from-purple-300 hover:to-purple-600 transition-all">
                <svg className="w-10 h-10 text-black hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
              {/* Tags */}
              <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-orange-600 text-white rounded-full px-3 py-1 text-xs">Your team</div>
              <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-full px-3 py-1 text-xs">Uncovered</div>
            </div>
            <div className="p-4">
              <h3 className="text-white text-lg font-medium mb-2">Fractional Teammate</h3>
              <p className="text-gray-400 text-sm">We support your team with ad-hoc and in-depth competitor research and analysis.</p>
            </div>
          </div>

          {/* Card 3: Automated Monitoring */}
          <div className="relative bg-[#0b0c15] border border-white/10 rounded-lg flex flex-col hover:border-white/20 hover:-translate-y-1 transition-all">
            <div className="relative h-60 flex items-center justify-center bg-[#020013] rounded-lg border border-[#1b1b43] overflow-hidden">
              {scanState === "idle" && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-radial from-[#020013]/40 to-transparent">
                  <button onClick={handleScan} className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                    Run Scan <span className="text-lg opacity-80">((•))</span>
                  </button>
                </div>
              )}
              {scanState === "scanning" && (
                <div className="absolute inset-0 flex flex-col gap-2 overflow-hidden p-4 animate-[scrollUp_2s_linear_infinite]">
                  {scanItems.concat(scanItems).map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs font-mono">
                      <span className="text-gray-500 w-5">{(i + 1).toString().padStart(2, '0')}</span>
                      <span className="text-gray-400 truncate">{item}</span>
                    </div>
                  ))}
                </div>
              )}
              {scanState === "complete" && (
                <div onClick={handleReset} className="flex flex-col items-center gap-3 cursor-pointer animate-popIn">
                  <div className="w-20 h-20 rounded-full border-2 border-purple-600 bg-purple-600/10 flex items-center justify-center shadow-md">
                    <span className="text-white text-2xl font-bold">27</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white text-sm font-semibold">Notifications Found</h4>
                    <p className="text-gray-300 text-xs">Click to view updates</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-white text-lg font-medium mb-2">Automated Competitor Monitoring</h3>
              <p className="text-gray-400 text-sm">Insights go stale very quickly. That's why Uncovered automates it for you.</p>
            </div>
          </div>

          {/* Card 4: Competitive Landscape */}
          <div className="relative bg-[#0b0c15] border border-white/10 rounded-lg hover:border-white/20 transition-all">
            <div className="relative h-56 overflow-visible">
              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
                <div className="bg-white/5 border border-white/10 rounded-full px-2 py-1 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span> Competitor A
                </div>
                <div className="bg-white/5 border border-white/10 rounded-full px-2 py-1 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-500"></span> Competitor B
                </div>
              </div>
              <div className="absolute inset-0 overflow-hidden flex items-end">
                <div className="flex w-[200%] animate-scrollGraph">
                  <img src="https://framerusercontent.com/images/sX5G8LVLYiwXoHrQsx3khNCfRFA.svg" className="w-full h-full object-fill flex-shrink-0" alt="Graph" />
                  <img src="https://framerusercontent.com/images/sX5G8LVLYiwXoHrQsx3khNCfRFA.svg" className="w-full h-full object-fill flex-shrink-0" alt="Graph" />
                </div>
              </div>
              {/* Popups */}
              <div className="absolute bottom-1/2 left-4 bg-[#15151e]/70 backdrop-blur-md border border-purple-600/30 rounded-md p-2 flex items-center gap-3 opacity-0 hover:opacity-100 transition-all">
                <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center border border-green-400">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">184%</span>
                  <span className="text-gray-400 text-xs">Revenue</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#15151e]/70 backdrop-blur-md border border-purple-600/30 rounded-md p-2 flex items-center gap-3 opacity-0 hover:opacity-100 transition-all">
                <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center border border-green-400">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">147%</span>
                  <span className="text-gray-400 text-xs">Growth</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white text-lg font-medium mb-2">Your Competitive Landscape</h3>
              <p className="text-gray-400 text-sm">Track your competitor's performance. Identify areas to improve, and monitor progress.</p>
            </div>
          </div>

          {/* Card 5: Battle Card */}
          <div className="relative bg-[#0b0c15] border border-white/10 rounded-lg hover:border-white/20 transition-all col-span-1 md:col-span-2">
            <div className="flex gap-4 p-4">
              {/* Left */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="text-gray-400 text-xs font-medium">Battle Cards</div>
                <div className="flex bg-[#18181b] border border-white/10 rounded-md p-1">
                  {["strengths", "weaknesses"].map((tab) => (
                    <button
                      key={tab}
                      className={`flex-1 text-xs font-semibold py-1 rounded-md ${battleTab === tab ? "bg-[#27272a] text-white shadow" : "text-gray-400"}`}
                      onClick={() => setBattleTab(tab as "strengths" | "weaknesses")}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="text-gray-400 text-sm">
                  <strong className="block text-gray-300">{battleContent[battleTab].descTitle}</strong>
                  <p>{battleContent[battleTab].desc}</p>
                </div>
              </div>
              {/* Right */}
              <div className="flex-1.3 relative">
                <div className={`rounded-lg overflow-hidden ${battleTab === "weaknesses" ? "bg-white text-gray-800" : "bg-[#020013] text-gray-300"} flex flex-col`}>
                  <div className="flex items-center gap-2 p-4 border-b border-white/10">
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center ${battleTab === "weaknesses" ? "bg-purple-600 text-white" : "bg-red-500 text-white"}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                      </svg>
                    </div>
                    <span>{battleContent[battleTab].title}</span>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    {battleContent[battleTab].items.map((item, i) => (
                      <div key={i} className="flex gap-2 items-center text-xs font-mono border-b border-gray-200/10 pb-1">
                        <svg width="8" height="8" viewBox="0 0 9 13" fill="currentColor"><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm4-8h2v2H5V1zm0 4h2v2H5V5zm0 4h2v2H5V9z" /></svg>
                        <span>{(i + 1).toString().padStart(2, '0')}</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white text-lg font-medium mb-2">Highlight how you win to your customers</h3>
              <p className="text-gray-400 text-sm">Empower Sales and Marketing teams to win more deals with proven strategies.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
