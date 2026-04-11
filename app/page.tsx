import HeroSection from "@/components/HeroSection";
import LinkSection from "@/components/LinkSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden selection:bg-blue-500/30 flex flex-col">
      <HeroSection />
      
      <div className="flex-1">
        <LinkSection />
      </div>
      
      {/* Footer */}
      <footer className="w-full py-8 mt-auto border-t border-white/5 flex justify-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} 김채윤. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
