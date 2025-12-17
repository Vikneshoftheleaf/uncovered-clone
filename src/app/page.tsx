import NavBar from "@/components/navBar"
import HeroBanner from "@/components/heroBanner"
import Brands from "@/components/brands"
import Features from "@/components/features"
import CtaAnimation from "@/components/ctaAnimation"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import FAQ from "@/components/faq"
import Hero from "@/components/HeroBanner2"
import FeaturesList from "@/components/FeaturesList"
import PricingTable from "@/components/pricing2"
import FAQs from "@/components/faq2"
export default function HomePage() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Brands/>
    <FeaturesList/>
    <Features/>
    <PricingTable/>
    <FAQs/>
    <CTA/>
    <Footer/>
    </>
  )

}

