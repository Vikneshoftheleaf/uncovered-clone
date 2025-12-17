export default function FAQ() {
    return (
        <>

            <section className="mt-12 max-w-6xl mx-auto grid lg:grid-cols-6 grid-cols-1 p-6">
                <div className="col-span-2 space-y-4">
                    <h4 className="py-2 px-4 border text-xs border-purple-500/20 rounded-full inline-flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question" viewBox="0 0 16 16">
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                    </svg>FAQs</h4>
                    <h1 className="text-4xl text-left font-bold">Questions? <br /> We've got answers.</h1>
                    <h2 className="text-md text-left text-slate-400 font-semibold">Find no-fluff answers here. If we've missed something, drop us an email or message.</h2>
                    <button className="py-2 px-4 border border-purple-500/20 rounded-full inline-flex items-center gap-1">Contact Us <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg></button>

                </div>
                <div className="col-span-4 lg:mt-0 mt-4 text-sm text-left">
                    <div id="accordion-card" data-accordion="collapse">
                        <h2 id="accordion-card-heading-1">
                            <button type="button" className="border-purple-500/20 rounded-2xl flex items-center justify-between w-full p-4 font-medium rtl:text-right text-body shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-card-body-1" aria-expanded="true" aria-controls="accordion-card-body-1">
                                <span className="text-left">How does the fractional Competitive Intelligence teammate work?</span>
                                <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" /></svg>
                            </button>
                        </h2>
                        <div id="accordion-card-body-1" className="hidden border rounded-2xl border-purple-500/20 mt-1 shadow-xs" aria-labelledby="accordion-card-heading-1">
                            <div className="p-4 md:p-5">
                                <p className="mb-2 text-body">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                <p className="text-body">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-fg-brand hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                        <h2 id="accordion-card-heading-2" className="mt-4">
                            <button type="button" className="border-purple-500/20 rounded-2xl flex items-center justify-between w-full p-4 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 " data-accordion-target="#accordion-card-body-2" aria-expanded="false" aria-controls="accordion-card-body-2">
                                <span className="text-left">Do you have an affiliate program?</span>
                                <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" /></svg>
                            </button>
                        </h2>
                        <div id="accordion-card-body-2" className="hidden border rounded-2xl border-purple-500/20 mt-1 shadow-xs" aria-labelledby="accordion-card-heading-2">
                            <div className="p-4 md:p-5">
                                <p className="mb-2 text-body">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                <p className="text-body">Check out the <a href="https://flowbite.com/figma/" className="text-fg-brand hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                            </div>
                        </div>
                        <h2 id="accordion-card-heading-3" className="mt-4">
                            <button type="button" className="border-purple-500/20 rounded-2xl flex items-center justify-between w-full p-4 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-card-body-3" aria-expanded="false" aria-controls="accordion-card-body-3">
                                <span className="text-left">What are the payment terms of the subscriptions?</span>
                                <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" /></svg>
                            </button>
                        </h2>
                        <div id="accordion-card-body-3" className="hidden  border rounded-2xl border-purple-500/20 mt-1 shadow-xs" aria-labelledby="accordion-card-heading-3">
                            <div className="p-4 md:p-5">
                                <p className="mb-2 text-body">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                <p className="mb-2 text-body">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                <p className="mb-2 text-body">Learn more about these technologies:</p>
                                <ul className="ps-5 text-body list-disc">
                                    <li><a href="https://flowbite.com/pro/" className="text-fg-brand hover:underline">Flowbite Pro</a></li>
                                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-fg-brand hover:underline">Tailwind UI</a></li>
                                </ul>
                            </div>
                        </div>
                        <h2 id="accordion-card-heading-4" className="mt-4">
                            <button type="button" className="border-purple-500/20 rounded-2xl flex items-center justify-between w-full p-4 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-card-body-4" aria-expanded="false" aria-controls="accordion-card-body-4">
                                <span className="text-left">Do you offer a free trial?</span>
                                <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" /></svg>
                            </button>
                        </h2>
                        <div id="accordion-card-body-4" className="hidden border rounded-2xl border-purple-500/20 mt-1 shadow-xs" aria-labelledby="accordion-card-heading-4">
                            <div className="p-4 md:p-5">
                                <p className="mb-2 text-body">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                <p className="mb-2 text-body">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                <p className="mb-2 text-body">Learn more about these technologies:</p>
                                <ul className="ps-5 text-body list-disc">
                                    <li><a href="https://flowbite.com/pro/" className="text-fg-brand hover:underline">Flowbite Pro</a></li>
                                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-fg-brand hover:underline">Tailwind UI</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}