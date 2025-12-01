'use client'
import { LogosCarousel, CarouselItem } from "logos-carousel-react"
export default function Brands() {
    return (
        <>
            <section className="relative max-w-6xl mx-auto my-6 invert brightness-50 opacity-40">
                <LogosCarousel className="h-[40px]">
                    <CarouselItem src="https://www.svgrepo.com/show/305632/zoom.svg" alt="Logo 4" title="Logo 4" />
                    <CarouselItem src="https://www.svgrepo.com/show/305750/asus.svg" alt="Logo 4" title="Logo 4" />
                    <CarouselItem src="https://www.svgrepo.com/show/305754/audi.svg" alt="Logo 4" title="Logo 4" />
                    <CarouselItem src="https://www.svgrepo.com/show/305861/citrix.svg" alt="Logo 4" title="Logo 4" />

                </LogosCarousel>

            </section>

        </>
    )
}