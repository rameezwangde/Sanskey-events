import { motion } from 'framer-motion';
import { Crown, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import modelsData from '../data/pages/models.json';
import { getVoteCount } from '../utils/voteHandling';

const models = modelsData.models || [];

// Helper to create slug
export const generateSlug = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

export default function Voting() {
  const [voteCounts, setVoteCounts] = useState({});
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    const fetchAllVotes = async () => {
      setIsCounting(true);
      const counts = {};
      for (const model of models) {
        const slug = generateSlug(model.name);
        counts[slug] = await getVoteCount(slug);
      }
      setVoteCounts(counts);
      setIsCounting(false);
    };
    fetchAllVotes();
  }, []);

  const maxVotes = Math.max(...Object.values(voteCounts), 1);
  const sortedModels = [...models].sort((a, b) => {
    const votesA = voteCounts[generateSlug(a.name)] || 0;
    const votesB = voteCounts[generateSlug(b.name)] || 0;
    return votesB - votesA;
  });

  return (
    <div className="pt-6 pb-16 md:pt-8 md:pb-24 min-h-screen bg-[#FCFAf5] relative overflow-hidden font-sans">
      
      {/* --- UNIQUE BACKGROUND DESIGN --- */}
      {/* 1. Subtle Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* 2. Soft Gold Spotlights */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-brand-gold/15 blur-[120px] rounded-full rotate-[-45deg] pointer-events-none"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[#FFDF73]/10 blur-[100px] rounded-full rotate-[45deg] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 mb-12 text-center mt-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <img src="/south-india-queen-logo.jpeg" alt="South India Queen Logo" className="w-48 h-48 rounded-full shadow-lg mb-6 object-cover" />
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-4 tracking-wider uppercase">
            South India <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#b5952f] to-brand-gold">Queen</span> 2026
          </h1>
          <p className="text-brand-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-8 font-semibold">
            Miss Popular
          </p>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed border-t border-brand-gold/20 pt-6">
            The race for miss popular begins.
          </p>
        </motion.div>
      </div>

      {/* --- UNIQUE CONTESTANT CARDS (Arched/Regal Style) --- */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {models.map((model, idx) => {
          const slug = generateSlug(model.name);
          return (
            <motion.div 
              key={slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.15, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group relative w-full max-w-[320px] flex flex-col rounded-t-[160px] rounded-b-3xl overflow-hidden border border-brand-gold/20 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-1.5"
            >
              {/* Image Container with Arch */}
              <div className="relative w-full aspect-[4/5] rounded-t-[156px] rounded-b-2xl overflow-hidden bg-white shrink-0">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                />

                {/* Vote Count Badge (Floating top) */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-brand-gold/40 shadow-lg">
                    <span className="text-brand-gold text-base font-serif font-bold leading-none">
                      {isCounting ? '-' : (voteCounts[slug] || 0)}
                    </span>
                    <span className="text-[8px] uppercase tracking-widest text-gray-500 mt-1">Votes</span>
                  </div>
                </div>
              </div>

              {/* Content (Below Image) */}
              <div className="w-full pt-6 pb-4 px-4 flex flex-col items-center text-center flex-1">
                <h3 className="text-xl font-serif text-[#1a1a1a] mb-1 tracking-wide">{model.name}</h3>
                <p className="text-brand-gold/90 text-[9px] tracking-[0.2em] uppercase font-semibold mb-5">
                  {model.title}
                </p>
                
                <Link 
                  to={`/vote/${slug}`} 
                  className="mt-auto relative overflow-hidden w-full py-2.5 rounded-full border border-brand-gold/50 flex items-center justify-center group/btn transition-all duration-300 hover:bg-brand-gold bg-white"
                >
                  <span className="text-brand-gold group-hover/btn:text-white font-semibold text-[10px] tracking-[0.15em] uppercase z-10 transition-colors">
                    Cast Vote
                  </span>
                  <ChevronRight size={14} className="ml-2 text-brand-gold group-hover/btn:text-white z-10 transition-colors" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* --- LEADERBOARD (Premium Pedestal Style) --- */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 mt-32 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Sparkles className="text-brand-gold w-6 h-6 mb-4" />
          <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] mb-4 uppercase tracking-widest">Live Standings</h2>
          <div className="w-px h-16 bg-gradient-to-b from-brand-gold to-transparent"></div>
        </motion.div>

        <div className="bg-white rounded-[40px] shadow-xl p-6 md:p-12 border border-brand-beige relative">
          <div className="space-y-8">
            {sortedModels.map((model, idx) => {
              const slug = generateSlug(model.name);
              const votes = voteCounts[slug] || 0;
              const percentage = maxVotes === 1 && Object.values(voteCounts).every(v => v === 0) 
                ? 0 
                : votes === 0 ? 0 : Math.max((votes / maxVotes) * 100, 2);

              const isTop3 = idx < 3;
              const rankColor = idx === 0 ? 'text-brand-gold' : idx === 1 ? 'text-gray-400' : idx === 2 ? 'text-[#cd7f32]' : 'text-gray-500';
              const barGradient = idx === 0 ? 'from-brand-gold to-[#FFDF73]' : idx === 1 ? 'from-gray-300 to-gray-200' : idx === 2 ? 'from-[#cd7f32] to-[#e69f58]' : 'from-gray-300 to-gray-200';

              return (
                <div key={slug} className="relative flex flex-col md:flex-row md:items-center gap-6 group p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  {/* Rank & Image */}
                  <div className="flex items-center gap-6 md:w-1/3">
                    <div className={`w-10 text-2xl font-serif font-bold text-center ${rankColor} ${idx === 0 ? 'drop-shadow-sm' : ''}`}>
                      0{idx + 1}
                    </div>
                    <div className={`relative w-16 h-16 rounded-full p-[2px] ${isTop3 ? 'bg-gradient-to-b ' + barGradient : 'bg-gray-200'}`}>
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                        <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="font-serif text-lg tracking-wide text-[#1a1a1a]">
                      {model.name}
                    </div>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="flex-1 relative pl-16 md:pl-0">
                    <div className="h-[2px] bg-gray-200 w-full relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                        className={`absolute top-1/2 -translate-y-1/2 h-[4px] rounded-full bg-gradient-to-r ${barGradient} ${idx === 0 ? 'shadow-sm' : ''}`}
                      />
                    </div>
                  </div>
                  
                  {/* Score */}
                  <div className="pl-16 md:pl-0 md:w-28 text-left md:text-right flex items-baseline md:justify-end gap-2">
                    <span className={`text-3xl font-serif font-bold ${rankColor}`}>
                      {votes}
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Votes</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
