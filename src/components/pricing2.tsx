"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PricingTable() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
    const router = useRouter();

    const plans = [
        {
            id: 1,
            name: "Blitz-scale Barry",
            target: "For scale-ups",
            price: { monthly: "€360", annually: "€299" },
            savings: "save up to €96k annually on a Competitive Intel department",
            buttonText: "Get 14-Day Free Trial",
            isPopular: false,
            features: [
                { name: "Monitor your competitors", included: true },
                { name: "Dedicated teammate", included: false },
                { name: "Win-loss and churn interviews", included: false },
            ]
        },
        {
            id: 2,
            name: "Vanguard Vivan",
            target: "For scale-ups and SMEs",
            price: { monthly: "€600", annually: "€499" },
            savings: "save up to €228k annually on a Competitive Intel department",
            buttonText: "Get 14-Day Free Trial",
            isPopular: true,
            features: [
                { name: "Monitor your competitors", included: true },
                { name: "Dedicated teammate", included: true },
                { name: "Win-loss and churn interviews", included: false },
            ]
        },
        {
            id: 3,
            name: "Enterprise Eva",
            target: "For SMEs, starting at",
            price: { monthly: "€2,550", annually: "€2,000" },
            savings: "save up to €336k annually on a Competitive Intel department",
            buttonText: "Contact Sales",
            isPopular: false,
            features: [
                { name: "Monitor your competitors", included: true },
                { name: "Dedicated teammate", included: true },
                { name: "Win-loss and churn interviews", included: true },
            ]
        }
    ];

    return (
        <div className="bg-[#030014] text-white py-16 px-6 flex flex-col items-center font-sans">

            {/* Header */}
             <section className="mt-12 max-w-6xl mx-auto flex flex-col items-center gap-4 p-6">
                <h4 className="py-2 px-4 border text-xs  border-purple-500/20 rounded-full flex place-items-center gap-1"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                </svg></span>Pricing</h4>
                <h1 className="lg:text-4xl text-3xl text-center font-bold">We value transparent pricing too</h1>
                <h2 className="text-md text-center text-slate-400 font-semibold">Simple Pricing for Your Convenience</h2>
            </section>


            {/* Billing Toggle */}
            <div className="flex items-center bg-[#0a0a1f] border border-[#1f1f3a] rounded-full p-1 mb-16 relative">
                <button
                    className={`px-6 py-2 rounded-full transition-colors font-medium ${billingCycle === "monthly" ? "bg-[#1f1f3a] text-white" : "text-gray-400"}`}
                    onClick={() => setBillingCycle("monthly")}
                >
                    Monthly
                </button>
                <button
                    className={`px-6 py-2 rounded-full transition-colors font-medium ${billingCycle === "annually" ? "bg-[#1f1f3a] text-white" : "text-gray-400"}`}
                    onClick={() => setBillingCycle("annually")}
                >
                    Annually <span className="text-xs font-bold  bg-purple-500 px-2 py-1 rounded-full text-white">-2 months</span>

                </button>
            </div>

            {/* Pricing Cards */}
            <div className="grid gap-8 w-full max-w-[1200px] grid-cols-1 lg:grid-cols-3">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`flex flex-col p-8 rounded-3xl border transition-colors ${plan.isPopular ? "bg-[#0d0d25] border-[#2d2d55]" : "bg-[#0a0a1f] border-[#1f1f3a]"} hover:border-gray-600`}
                    >
                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                {plan.isPopular && <span className="text-xs border px-3 py-1 rounded-full border-gray-400 text-gray-300">Most Popular</span>}
                            </div>
                            <p className="text-gray-400 text-sm">{plan.target}</p>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-3xl font-bold">{billingCycle === "annually" ? plan.price.annually : plan.price.monthly}</span>
                            <span className="text-gray-400 text-sm">
                                /mo <br />
                                {billingCycle === "annually" ? "billed annually" : "billed monthly"}
                            </span>
                        </div>

                        {/* Savings */}
                        <p className="text-white text-sm mb-6">{plan.savings}</p>

                        {/* Button */}
                        <button
                            className={`w-full py-4 rounded-full font-semibold mb-8 flex justify-center items-center gap-2 transition-all
              ${plan.isPopular ? "bg-gradient-to-b from-indigo-600 to-purple-400 text-white" : "border border-[#2a2a4a] text-white hover:bg-white/5"}`}
                        >
                            {plan.buttonText} <span>→</span>
                        </button>

                        {/* Features */}
                        <div className="border-t border-[#1f1f3a] pt-6">
                            <p className="text-gray-400 text-sm mb-3">What’s included:</p>
                            <ul className="flex flex-col gap-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={`flex items-center gap-3 text-sm ${feature.included ? "text-white" : "text-gray-500"}`}>
                                        {feature.included ? (
                                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#555577" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M5 12H19" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                        {feature.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="text-center mt-12">
                <p className="text-gray-400 mb-3">More details and all features</p>
                <button
                    onClick={() => router.push("/pricing")}
                    className="inline-flex items-center gap-2 border border-[#2a2a4a] px-6 py-3 rounded-full text-white transition-colors hover:bg-[#0a0a1f]"
                >
                    View Pricing Page <span>→</span>
                </button>
            </div>
        </div>
    );
}
