import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden selection:bg-purple-500/30">
      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      
      {/* Footer */}
      <footer className="w-full py-10 mt-20 border-t border-white/10 flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-gray-500 flex items-center gap-2">
          © {new Date().getFullYear()} 김채윤. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
