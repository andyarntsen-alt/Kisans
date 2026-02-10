import dynamic from "next/dynamic";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Hero } from "@/components/sections/Hero";

const IntroStats = dynamic(() => import("@/components/sections/IntroStats").then(m => m.IntroStats));
const HorizontalScroll = dynamic(() => import("@/components/sections/HorizontalScroll").then(m => m.HorizontalScroll));
const FooterGrid = dynamic(() => import("@/components/sections/FooterGrid").then(m => m.FooterGrid));

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
