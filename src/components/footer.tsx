import Link from "next/link"
import Image from "next/image"
export default function Footer() {
    return (
        <>
            <div className="flex max-w-5xl mx-auto items-center gap-4 mt-8">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-400 to-neutral-400"></div>
                <Image className="invert" src={'https://www.svgrepo.com/show/532293/star-alt-4.svg'} alt="star" height={12} width={12}></Image>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-400 to-neutral-400"></div>
            </div>

            <footer>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">


                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-6">

                            <div className="col-span-3 mb-6 md:mb-0">
                                <a href="https://flowbite.com/" className="flex items-center">
                                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-7 me-3" alt="FlowBite Logo" />
                                    <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">Uncovered</span>
                                </a>
                                <p className="text-gray-400">Uncovered automates Competitive Intelligence for B2B SaaS marketing, product, and sales teams. Monitor your competitors pricing, positioning, feature changes, A/B tests, and more. </p>
                                <p className="my-8 text-gray-400">Made in Europe 🇪🇺</p>
                                <Link href={'/'} className="mt-6 font-semibold flex items-center gap-1">Get Started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                </svg></Link>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-heading text-gray-400">Platfrom</h2>
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
                                <h2 className="mb-6 text-sm font-semibold text-heading text-gray-400">Company</h2>
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
                                <h2 className="mb-6 text-sm font-semibold text-heading text-gray-400">Offices</h2>
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


                    <div className="mt-12 sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-body sm:text-center text-gray-500">Uncovered Intelligence UAB. All rights reserved. © 2025</span>
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