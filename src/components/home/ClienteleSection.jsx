import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const clients = [
  "Tydal", "Van Heusen", "Somany", "Mahindra", "Samsung", 
  "Rotary Club", "Lions Club", "Koramangala", "Hero Honda", "Havells"
];

export default function ClienteleSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  return (
    <section className="pt-36 pb-20 bg-white border-t border-brand-beige overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
        <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2">
          Trusted By
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-brand-black">Our Premium Clientele</h2>
      </div>

      <div className="relative max-w-full mx-auto" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 px-4">
              <div className="bg-brand-ivory border border-brand-beige rounded-xl p-8 flex items-center justify-center h-24 hover:border-brand-bronze/50 transition-colors group grayscale hover:grayscale-0">
                <span className="font-serif text-xl text-brand-black/60 group-hover:text-brand-bronze transition-colors font-bold tracking-wide">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
