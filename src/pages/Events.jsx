import ServicesSection from '../components/home/ServicesSection';

export default function Events() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      <div className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2">
            Our Expertise
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">Events By Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            We provide a comprehensive suite of services and top-notch integrated solutions for corporate, entertainment, and educational events.
          </p>
        </div>
      </div>
      {/* Reusing the ServicesSection from Home but removing the top padding since we have header text above */}
      <div className="-mt-16">
        <ServicesSection />
      </div>
    </div>
  );
}
