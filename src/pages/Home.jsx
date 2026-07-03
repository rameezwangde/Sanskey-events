import HeroSection from '../components/home/HeroSection';
import ClienteleSection from '../components/home/ClienteleSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ClienteleSection />
    </div>
  );
}
