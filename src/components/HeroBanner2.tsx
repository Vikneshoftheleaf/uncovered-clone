"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

    if (!gmailRegex.test(email)) {
      alert("Please enter a valid @gmail.com email address")
      return
    }

    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 4000)
  }

  /* Scroll motion */
  const { scrollYProgress } = useScroll()
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [20, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [40, 0])

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-36 text-center [perspective:2000px]">

      {/* ================= ROTATING RINGS (FIXED CENTER) ================= */}
      <div
        className="-mt-64 pointer-events-none absolute inset-0 z-0
  flex items-center justify-center
  [mask-image:radial-gradient(circle,black_40%,transparent_70%)]
  [-webkit-mask-image:radial-gradient(circle,black_40%,transparent_70%)]"
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: 400 + i * 20,
              height: 400 + i * 20,
            }}
          >
            {/* ROTATING PART ONLY */}
            <div
              className="h-full w-full rounded-full
        border border-transparent
        border-t border-t-[rgba(226,232,255,0.13)]
        border-l border-l-[rgba(226,232,255,0.15)]
        mix-blend-screen
        animate-spin-slow"
              style={{
                animationDuration: `${7 + i * 0.06}s`,
              }}
            />
          </div>
        ))}
      </div>


      {/* ================= GRID + VIGNETTE ================= */}
      <div className="pointer-events-none absolute inset-0 z-[1]
        bg-[linear-gradient(90deg,transparent,rgba(99,102,241,0.03),transparent),
            repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(255,255,255,0.02)_3px,rgba(255,255,255,0.02)_6px)]
        opacity-30" />

      <div className="pointer-events-none absolute inset-0 z-[1]
        bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.15),transparent_60%)]
        opacity-50" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6">

        {submitted && (
          <div className="rounded-lg bg-emerald-900 px-4 py-1 text-xs font-semibold text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.4)]">
            Email Submitted
          </div>
        )}

        {/* Badge */}
        <div className="flex items-center gap-3 rounded-full border border-purple-500/30 bg-white/5 px-2 py-1 backdrop-blur">
          <span className="rounded-full bg-gradient-to-b from-indigo-600 to-purple-400 px-3 py-1 text-[10px] font-semibold tracking-wide text-white">
            Feature highlight
          </span>
          <a href="#features" className="flex items-center gap-1 text-xs font-medium text-purple-200">
            Competitor monitoring →
          </a>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-semibold leading-tight tracking-tight
          bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Monitor your competitors,<br />win more deals.
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-slate-400">
          Automated Competitive and Market Intelligence<br />
          for B2B SaaS Marketing & Sales
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative w-full max-w-sm">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500 px-5 text-sm text-white">
            Get Started Free →
          </button>
        </form>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>No risk 14-day trial</span>
          <span className="text-purple-500">✦</span>
          <span>No onboarding fees</span>
        </div>
      </div>

      {/* ================= TILTED IMAGE ================= */}
      <motion.div
        style={{ rotateX, scale, opacity, y, transformStyle: "preserve-3d" }}
        className="relative z-10 mx-auto mt-16 max-w-6xl px-6"
      >
        <div className="absolute left-1/2 top-1/4 -z-10 h-[60%] w-[80%]
          -translate-x-1/2 bg-gradient-to-b from-purple-600/40 to-transparent
          blur-[80px]" />

        <img
          src="https://framerusercontent.com/images/1aTT9zmu9BO3MlacM0Vqso2HtE.png"
          alt="Dashboard"
          className="rounded-xl border border-white/10 shadow-2xl"
        />
      </motion.div>
    </section>
  )
}
