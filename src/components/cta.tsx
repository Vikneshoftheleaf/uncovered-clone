import { Globe } from "@/components/ui/globe"

export default function CTA() {
    return (
        <>
            <div className="fade-mask-vertical max-w-6xl mx-auto relative flex size-full items-center justify-center overflow-hidden rounded-lg px-40 pt-8 pb-40 md:pb-60">
                <Globe className="top-0" />
            </div>
            <section className="flex flex-col items-center justify-center gap-4 my-12">
                <h1 className="text-4xl text-center font-bold">14-day trial • No onboarding fees</h1>
                <h2 className="text-md text-center text-slate-400 font-semibold">Your Competitive Intelligence Platform for B2B SaaS</h2>
                <button className="py-1.5 px-4 text-sm font-semibold bg-gradient-to-b border-purple-400 from-indigo-500 via-indigo-500 to-purple-500 rounded-full flex items-center gap-1">Get Uncovered  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg></button>
            </section>

        </>
    )
}