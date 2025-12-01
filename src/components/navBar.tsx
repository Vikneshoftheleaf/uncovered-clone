import Link from "next/link"
export default function NavBar(){
    return(
        <>
        <nav className="z-10 sticky top-0 left-0 backdrop-blur-md ">
                <div className="max-w-5xl m-auto flex justify-between items-center  py-8 text-md font-semibold">
                  <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-7 me-3" alt="FlowBite Logo" />
                    <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">Uncovered</span>
                  </a>
                  <div className="border border-gray-800 rounded-full px-4 py-2 flex gap-4 items-center bg-black/20">
                    <Link href={'/'}>Product</Link>
                    <Link href={'/'}>About Us</Link>
                    <Link href={'/'}>Carrers</Link>
                    <Link href={'/'}>Blog</Link>
                    <Link href={'/'}>Pricing</Link>
                    <Link href={'/'}>Contact Us</Link>
                  </div>
                  <div className="flex gap-4 items-center">
                    <button>Login</button>
                    <button className="border border-gray-800 rounded-full px-6 py-2 bg-purple-500 flex items-center gap-1">Get Uncovered <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg></span></button>
                  </div>
                </div>
              </nav>
        </>
    )
}