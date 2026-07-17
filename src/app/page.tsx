import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhatWeStore from "@/components/WhatWeStore";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import EnquiryForm from "@/components/EnquiryForm";
import LocationBlock from "@/components/LocationBlock";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Intro />
        <WhatWeStore />
        <WhyChooseUs />
        <Gallery />
        <Pricing />
        <EnquiryForm />
        <LocationBlock />
      </main>
      <SiteFooter />
    </>
  );
}
