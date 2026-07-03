import havellsLogo from '../../../havells.png';
import lionsLogo from '../../../Lions Clubs International.png';
import mahindraLogo from '../../../mahindra.png';
import rotaryLogo from '../../../rotary.png';
import samsungLogo from '../../../samsung.png';
import somanyLogo from '../../../somany.png';
import tydalLogo from '../../../tydal.png';
import vanHeusenLogo from '../../../Van Heusen.png';

const clients = [
  { name: 'Havells', logo: havellsLogo },
  { name: 'Tydal', logo: tydalLogo },
  { name: 'Van Heusen', logo: vanHeusenLogo },
  { name: 'Somany', logo: somanyLogo },
  { name: 'Mahindra', logo: mahindraLogo },
  { name: 'Samsung', logo: samsungLogo },
  { name: 'Rotary Club', logo: rotaryLogo },
  { name: 'Lions Club', logo: lionsLogo },
];

const scrollingClients = [...clients, ...clients];

export default function ClienteleSection() {
  return (
    <section className="pt-20 pb-20 bg-white border-t border-brand-beige overflow-hidden">
      <style>
        {`
          @keyframes clientele-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
        <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2">
          Trusted By
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-brand-black">Our Premium Clientele</h2>
      </div>

      <div className="relative max-w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex w-max gap-8 px-4"
          style={{ animation: 'clientele-scroll 28s linear infinite' }}
        >
          {scrollingClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="w-[250px] shrink-0 rounded-xl border border-brand-beige bg-white px-8 py-6 shadow-[0_14px_35px_rgba(184,134,72,0.08)]"
              aria-hidden={index >= clients.length}
            >
              <div className="flex h-24 items-center justify-center">
                <img
                  src={client.logo}
                  alt={index < clients.length ? client.name : ''}
                  className="max-h-16 max-w-[86%] object-contain"
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



