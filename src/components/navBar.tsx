'use client'

import Link from "next/link"
import { useState } from "react"
import Logo from "@/assets/Logo"
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  function HoverTop({ children }: any) {
    return (
      <div className="overflow-hidden h-[24px]">
        <div className="hover:-translate-y-11 transition-all ease-in-out duration-500 flex flex-col gap-6">
          <Link href="/">{children}</Link>
          <Link href="/">{children}</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="z-50 sticky top-0 backdrop-blur-md text-sm bg-black/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-8 px-2">

          {/* LOGO */}
          <div className="flex items-center gap-2">

            <Logo />

          </div>

          {/* DESKTOP MENU */}
          <div className="font-semibold hidden md:flex border border-gray-800 rounded-full px-4 py-2 gap-4 items-center h-[40px] overflow-hidden bg-black/20">
            <HoverTop>Product</HoverTop>
            <HoverTop>About Us</HoverTop>
            <HoverTop>Career</HoverTop>
            <HoverTop>Blog</HoverTop>
            <HoverTop>Pricing</HoverTop>
            <HoverTop>Contact</HoverTop>
          </div>

          {/* DESKTOP CTA */}
          <div className=" gap-4 flex items-center">
            <button className="hidden md:flex font-semibold">Login</button>
            <button className="hidden md:flex  items-center relative px-4 py-1.5 border-1 border-purple-300 rounded-full font-semibold text-white bg-gradient-to-b from-indigo-500 to-purple-500">
              Get Uncovered
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
              </svg>
            </button>
            <div className="pr-4">
              {
                (!isOpen) ?
                  <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-2xl transition ease-in-out"
                  >
                    ☰
                  </button>

                  :
                  <button
                    onClick={() => setIsOpen(false)}
                    className="self-end text-2xl transition ease-in-out"
                  >
                    ✕
                  </button>
              }
            </div>
          </div>



        </div>

      </nav>

      {/* MOBILE OFFCANVAS */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black z-60 transform transition-transform duration-700 ease-in-out
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="z-80 p-6 flex flex-col gap-4 text-4xl text-purple-500 font-semibold mt-24">



          {/* LINKS */}
          <Link href="/" onClick={() => setIsOpen(false)}>Product</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Career</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Contact</Link>


        </div>
      </div>
    </>
  )
}
