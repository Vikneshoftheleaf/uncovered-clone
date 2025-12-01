import Marquee from "react-fast-marquee"
import Image from "next/image"
export default function Brands() {
    return (
        <>
            <section className="relative max-w-6xl mx-auto my-6 invert brightness-50 opacity-40">
               
                <Marquee autoFill loop={0} speed={10} direction="left" className="">
                    <Image className="px-4" src={'https://www.svgrepo.com/show/305632/zoom.svg'} alt="logo" height={160} width={160}></Image>
                    <Image className="px-4" src={'https://www.svgrepo.com/show/305750/asus.svg'} alt="logo" height={160} width={160}></Image>
                    <Image className="px-4" src={'https://www.svgrepo.com/show/305754/audi.svg'} alt="logo" height={160} width={160}></Image>
                    <Image className="px-4" src={'https://www.svgrepo.com/show/305861/citrix.svg'} alt="logo" height={160} width={160}></Image>

                </Marquee>

            </section>

        </>
    )
}