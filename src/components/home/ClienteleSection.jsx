import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import havellsLogo from '../../../havells.png';
import heroHondaLogo from '../../../hero.png';
import lionsLogo from '../../../Lions Clubs International.png';
import mahindraLogo from '../../../mahindra.png';
import rotaryLogo from '../../../rotary.png';
import samsungLogo from '../../../samsung.png';
import somanyLogo from '../../../somany.png';
import tydalLogo from '../../../tydal.png';
import vanHeusenLogo from '../../../Van Heusen.png';

const clients = [
  { name: 'Hero Honda', logo: heroHondaLogo },
  { name: 'Havells', logo: havellsLogo },
  { name: 'Tydal', logo: tydalLogo },
  { name: 'Van Heusen', logo: vanHeusenLogo },
  { name: 'Somany', logo: somanyLogo },
  { name: 'Mahindra', logo: mahindraLogo },
  { name: 'Samsung', logo: samsungLogo },
  { name: 'Rotary Club', logo: rotaryLogo },
  { name: 'Lions Club', logo: lionsLogo },
];

export default function ClienteleSection() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 2200, stopOnInteraction: false })],
  );

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
            <div key={`${client.name}-${index}`} className="flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 px-4">
              <div className="bg-white border border-brand-beige rounded-xl px-8 py-6 flex items-center justify-center h-28 shadow-[0_14px_35px_rgba(184,134,72,0.08)] hover:border-brand-bronze/50 transition-colors">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 max-w-[82%] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
