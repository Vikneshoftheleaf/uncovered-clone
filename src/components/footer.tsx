import Link from "next/link"
import Image from "next/image"
import Logo from "@/assets/Logo"
export default function Footer() {
    function HoverTop({ children }: any) {
        return (
            <div className="overflow-hidden h-[30px]">
                <div className="hover:-translate-y-11 transition-all ease-in-out duration-500 flex flex-col gap-4">
                    <div>{children}</div>
                    <div>{children}</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex max-w-5xl mx-auto items-center gap-4 mt-8">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-purple-400/20"></div>
                <div className="p-1 bg-slate-50 rounded-full">
                    <Image className="" src={'https://www.svgrepo.com/show/532293/star-alt-4.svg'} alt="star" height={24} width={24}></Image>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-purple-400/20"></div>
            </div>

            <footer className="max-w-8xl mx-auto">
                <div className=" px-6 py-6 lg:py-8">

                    <div className="flex justify-center">

                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-6 grid-cols-1 ">

                            <div className="mb-6 md:mb-0">
                                <Logo/>
                                <p className="text-gray-400 text-sm tracking-wide lg:w-[500px] w-full mt-4">Uncovered automates Competitive Intelligence for B2B SaaS marketing, product, and sales teams. Monitor your competitors pricing, positioning, feature changes, A/B tests, and more. </p>
                                <p className="my-8 text-gray-400 text-sm">Made in Europe 🇪🇺</p>

                                <div className="h-[24px] overflow-hidden">
                                    <div className="hover:-translate-y-11 transition ease-in-out duration-500 space-y-4">
                                        <Link href={'/'} className=" font-semibold lg:flex hidden items-center gap-1">Get Started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                        </svg></Link>

                                        <Link href={'/'} className="font-semibold lg:flex hidden items-center gap-1">Get Started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                        </svg></Link>

                                    </div>

                                </div>
                            </div>

                            <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-6 lg:gap-22 lg:mt-0 -mt-12">
                                <div>
                                    <h2 className="mb-4 text-sm font-semibold text-heading text-gray-400">Platfrom</h2>
                                    <ul className="text-sm font-medium space-y-2">
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">Product</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">Win-Loss and Churn</a>
                                        </li>
                                        <li>
                                            <a href="https://flowbite.com/" className="hover:underline">Blog</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="mb-4 text-sm font-semibold text-heading text-gray-400">Company</h2>
                                    <ul className="text-sm font-medium space-y-2">
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">About Us</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">Careers</a>
                                        </li>
                                        <li>
                                            <a href="https://flowbite.com/" className="hover:underline">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">Terms of Service</a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="mb-4 text-sm font-semibold text-heading text-gray-400">Offices</h2>
                                    <div className="grid lg:grid-cols-1 gap-4 grid-cols-2 text-sm tracking-wide">
                                        <div>
                                            <h4>Vilnius</h4>
                                            <p className="text-gray-400">Gynėjų g. 4-333,</p>
                                            <p className="text-gray-400">LT-01109, Lithuania</p>
                                        </div>
                                        <div className="mt-2">
                                            <h4>Vienna</h4>
                                            <p className="text-gray-400">1020, Vienna</p>
                                            <p className="text-gray-400">Austria</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-12 lg:px-24 py-2 flex lg:justify-between items-center lg:flex-row justify-center flex-col">

                        <span className="text-sm text-body sm:text-center text-gray-400">Uncovered Intelligence UAB. All rights reserved. © 2025</span>

                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-body hover:text-heading text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}