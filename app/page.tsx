import HeroSection from "@/components/sections/heroSection";
import ExploreSection from "@/components/sections/exploreSection";
import OrderSection from "@/components/sections/orderSection";
import ProductsSection from "@/components/sections/productsSection";
import AppSection from "@/components/sections/appSection";
import TestimonialSection from "@/components/sections/testimonialSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ExploreSection />
        <OrderSection />
        <ProductsSection />
        <AppSection />
        <TestimonialSection />
      </main>
    </>
  );
}
