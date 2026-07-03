import HeroSection from '../components/home/HeroSection';
import AboutPreviewSection from '../components/home/AboutPreviewSection';
import ClienteleSection from '../components/home/ClienteleSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPreviewSection />
      <ClienteleSection />
    </div>
  );
}
