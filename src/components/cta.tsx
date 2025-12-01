import { Globe } from "@/components/ui/globe"

export default function CTA() {
    return (
        <>
            <div className="max-w-6xl mx-auto relative flex size-full items-center justify-center overflow-hidden rounded-lg px-40 pt-8 pb-40 md:pb-60">
                <Globe className="top-0" />
            </div>
            <section className="flex flex-col items-center justify-center gap-4 my-12">
                <h1 className="text-4xl text-center font-bold">14-day trial • No onboarding fees</h1>
                <h2 className="text-md text-center text-slate-400 font-semibold">Your Competitive Intelligence Platform for B2B SaaS</h2>
                <button className="py-2 px-4 bg-purple-500 rounded-full">Get Uncovered</button>
            </section>

        </>
    )
}