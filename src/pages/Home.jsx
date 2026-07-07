import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import AboutPreviewSection from '../components/home/AboutPreviewSection';
import ClienteleSection from '../components/home/ClienteleSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutPreviewSection />
      <ClienteleSection />
    </div>
  );
}
