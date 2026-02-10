import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Hero } from "@/components/sections/Hero";
import { IntroStats } from "@/components/sections/IntroStats";
import { HorizontalScroll } from "@/components/sections/HorizontalScroll";
import { FooterGrid } from "@/components/sections/FooterGrid";

export default function Home() {
  return (
    <div className="force-dark relative min-h-screen bg-background">
      <AnimatedBackground />
      <Hero />
      <IntroStats />
      <HorizontalScroll />
      <FooterGrid />
    </div>
  );
}
