// components/LogosMarquee.tsx
import Image from "next/image";

const facebook = 'https://www.svgrepo.com/show/512120/facebook-176.svg'
const github = 'https://www.svgrepo.com/show/512317/github-142.svg'
const instagram = 'https://www.svgrepo.com/show/521711/instagram.svg'
const linkedin = 'https://www.svgrepo.com/show/494312/linkedin-rounded.svg'
const spotify = 'https://www.svgrepo.com/show/512899/spotify-162.svg'

const logos = [facebook, github, instagram, linkedin, spotify];

export default function LogosMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-4 mt-2">
      {/* Row 1 -> left to right */}
      <div
        className="flex gap-5 items-center w-max animate-slide-right hover:animation-pause"
        style={{ animationDuration: "20s" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`r1-${i}`}
            className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-lg flex items-center justify-center p-2 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-purple-600 transition-colors"
          >
            <Image
              src={logo}
              alt="logos"
              className="invert w-full h-full object-contain filter brightness-100 saturate-0 contrast-[1.05] opacity-95"
              width={100} height={100}
            />
          </div>
        ))}
      </div>

      {/* Row 2 -> right to left */}
      <div
        className="flex gap-5 items-center w-max animate-slide-left hover:animation-pause mt-3"
        style={{ animationDuration: "18s" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`r2-${i}`}
            className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-lg flex items-center justify-center p-2 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-purple-600 transition-colors"
          >
            <Image
              src={logo}
              alt=""
              className="invert w-full h-full object-contain filter brightness-100 saturate-0 contrast-[1.05] opacity-95"
              width={100} height={100}

            />
          </div>
        ))}
      </div>

      {/* Row 3 -> left to right */}
      <div
        className="flex gap-5 items-center w-max animate-slide-right hover:animation-pause mt-3"
        style={{ animationDuration: "22s" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`r3-${i}`}
            className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-lg flex items-center justify-center p-2 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-purple-600 transition-colors"
          >
            <Image
              src={logo}
              alt=""
              className="invert w-full h-full object-contain filter brightness-100 saturate-0 contrast-[1.05] opacity-95"
              width={100} height={100}

            />
          </div>
        ))}
      </div>

      {/* Fade overlays */}
      <div className="absolute top-0 bottom-0 left-0 w-16 pointer-events-none z-20 bg-gradient-to-r from-[#06060b] to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-16 pointer-events-none z-20 bg-gradient-to-l from-[#06060b] to-transparent" />

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slide-left {
          animation: slide-left linear infinite;
        }
        .animate-slide-right {
          animation: slide-right linear infinite;
        }
        .hover\\:animation-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
