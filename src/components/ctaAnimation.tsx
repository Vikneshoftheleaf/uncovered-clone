import Marquee from "react-fast-marquee";
import Image from "next/image";
export default function CtaAnimation() {

    return (
        <>
            <section className="mt-12 max-w-6xl mx-auto flex flex-col items-center gap-4">
                <h4 className="py-2 px-4 border text-xs border-gray-400 rounded-full flex items-center gap-2"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-haze2" viewBox="0 0 16 16">
                    <path d="M8.5 3a4 4 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3M0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
                </svg></span>Multi-Channel</h4>
                <h1 className="text-4xl text-center font-bold">Multi-Channel: <br />Tens of thousand qualified data sources</h1>
                <h2 className="text-md text-center text-slate-400 font-semibold">Your Competitive Intelligence Platform</h2>
            </section>

            <section className="relative overflow-hidden max-w-3xl mx-auto mt-4 flex flex-col gap-6 p-4">
                <Marquee autoFill loop={0} direction="left" >
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20 hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/512317/github-142.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>

                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/511303/airbnb-179.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>

                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/306311/ktm.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/535544/octagon.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/494312/linkedin-rounded.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                </Marquee>

                <Marquee autoFill loop={0} direction="right" >
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20 hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/512317/github-142.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20 border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/494337/behance.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/494336/apple.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>

                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/494312/linkedin-rounded.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/494362/amazon.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/305874/cnn.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                </Marquee>

                <Marquee autoFill loop={0} direction="left" >
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20 hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/512317/github-142.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>

                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/511303/airbnb-179.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/306263/jeep.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/494312/linkedin-rounded.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/535544/octagon.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                    <div className="mx-8 p-4 rounded-2xl border border-gray-500">
                        <div className="p-4 border bg-gray-600/20  hover:bg-purple-500/50 transition-all duration-20 ease-in-out border-gray-500 rounded-2xl">
                            <Image className="invert opacity-80" src={'https://www.svgrepo.com/show/306216/ibm.svg'} alt="logo" height={60} width={60}></Image>
                        </div>
                    </div>
                </Marquee>
                <div className="z-20 pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-gray-500 to-transparent"></div>

                <div className="z-20 pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-500 to-transparent"></div>

            </section>

        </>
    )
}