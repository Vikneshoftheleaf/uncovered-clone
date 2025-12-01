import Image from "next/image"
import Link from "next/link"
export default function HeroBanner() {
    return (
        <>
            <section className="relative flex py-10 gap-6 flex-col text-sm justify-center items-center">
                <div className="flex items-center gap-2 border border-gray-800 rounded-full p-1">
                    <Link href={'/'} className="py-1.5 px-3 bg-purple-500 rounded-full">Feature highlight</Link>
                    <Link href={'/'} className="px-4 flex items-center gap-1">Competitor monitoring
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                            </svg>
                        </span>
                    </Link>
                </div>
                <h1 className="text-6xl text-center font-bold">Monitor your competitors,<br />win more deals.</h1>
                <h2 className="text-lg text-center text-slate-400 font-bold">Automated Competitive and Market Intelligence <br /> for B2B SaaS Marketing & Sales</h2>
                <div className="flex items-center gap-2 border border-gray-800 rounded-full p-1 text-normal font-semibold">
                    <input type="text" placeholder="Enter your email" className="px-4 bg-slate-900 focus:outline-none" />
                    <button className="py-2 px-4 bg-purple-500 rounded-full">Get Started Free</button>
                </div>
                <div className="flex items-center gap-2 text-slate-500 ">
                    <p>No risk 14-day trial period</p>
                    <Image className="invert opacity-40" src={'https://www.svgrepo.com/show/532293/star-alt-4.svg'} alt="star" height={12} width={12}></Image>
                    <p>No onboarding fees</p>
                </div>
            </section>

            <section className="relative flex justify-center items-center mt-4">
                <Image className="rounded-2xl  border-gray-800 ring-8 ring-slate-600/20" src={'https://framerusercontent.com/images/1aTT9zmu9BO3MlacM0Vqso2HtE.png'} height={1080} width={1080} alt="analytics-png"></Image>
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-100"></div>
            </section>


        </>
    )
}