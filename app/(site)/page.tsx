import { AmenitiesSection } from "@/components/home/AmenitiesSection";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroSection } from "@/components/home/HeroSection";
import { MasterplanSection } from "@/components/home/MasterplanSection";
import { NewsSection } from "@/components/home/NewsSection";
import { PropertyCategories } from "@/components/home/PropertyCategories";
import { StatsSection } from "@/components/home/StatsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { buildHomeSchema } from "@/lib/schema";

export default function Home() {
  const schema = buildHomeSchema();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <PropertyCategories />
      <MasterplanSection />
      <AmenitiesSection />
      <WhyChooseUs />
      <Testimonials />
      <NewsSection />
      <ConsultationCTA />
    </main>
  );
}
