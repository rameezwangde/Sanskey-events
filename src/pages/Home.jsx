import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ClienteleSection from '../components/home/ClienteleSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ClienteleSection />
    </div>
  );
}
