import { motion } from 'framer-motion';
import { ArrowRight, Vote } from 'lucide-react';
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
    <div className="pt-12 pb-16 md:pt-20 md:pb-20 min-h-screen bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center md:mb-16">
        <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
          Cast Your Vote
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-black mb-6">Vote For Your Favorite</h1>
        <p className="text-gray-600 max-w-2xl mx-auto font-sans">
          Support your favorite model by voting. Click on a model to view their voting page and register your vote.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {models.map((model, idx) => {
          const slug = generateSlug(model.name);
          return (
            <motion.div 
              key={slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl shadow-brand-black/5 aspect-[3/4]"
            >
              <div className="absolute top-4 right-4 z-10 transition-opacity duration-300">
                <div className="inline-flex items-center px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                  <Vote size={14} className="text-brand-gold mr-1.5" />
                  <span className="font-sans font-medium text-xs text-white">
                    {isCounting ? '...' : (voteCounts[slug] || 0)} Votes
                  </span>
                </div>
              </div>
              <img src={model.image} alt={model.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-serif sm:text-2xl text-white mb-1">{model.name}</h3>
                <p className="text-brand-gold font-sans text-sm tracking-wider uppercase mb-4">{model.title}</p>
                <Link to={`/vote/${slug}`} className="inline-flex items-center text-brand-gold hover:text-white text-sm font-medium transition-colors">
                  Vote for {model.name.split(' ')[0]} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Live Leaderboard Section */}
      <div className="container mx-auto px-4 md:px-8 mt-24 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
            Live Standings
          </p>
          <h2 className="text-3xl font-serif text-brand-black">Current Leaderboard</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-brand-beige">
          <div className="space-y-6">
            {sortedModels.map((model, idx) => {
              const slug = generateSlug(model.name);
              const votes = voteCounts[slug] || 0;
              // If there are literally 0 total votes across the board, default to 0% width, otherwise calculate relative to top spot.
              // We set a minimum 2% width if they have > 0 votes so it's a visible sliver.
              const percentage = maxVotes === 1 && Object.values(voteCounts).every(v => v === 0) 
                ? 0 
                : votes === 0 ? 0 : Math.max((votes / maxVotes) * 100, 2);

              return (
                <div key={slug} className="flex flex-col sm:flex-row sm:items-center gap-4 group">
                  <div className="flex items-center gap-4 sm:w-1/3 md:w-1/4">
                    <div className="w-8 font-serif text-xl text-gray-400 font-bold text-center">
                      #{idx + 1}
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-brand-beige shadow-sm">
                      <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="font-sans font-medium text-brand-black truncate">
                      {model.name}
                    </div>
                  </div>
                  
                  <div className="flex-1 relative">
                    <div className="h-5 bg-gray-100 rounded-full overflow-hidden w-full relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                        className={`absolute top-0 left-0 h-full rounded-full transition-colors ${
                          idx === 0 && votes > 0 ? 'bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                          : idx === 1 && votes > 0 ? 'bg-gray-400' 
                          : idx === 2 && votes > 0 ? 'bg-brand-bronze' 
                          : 'bg-brand-black'
                        }`}
                      />
                    </div>
                  </div>
                  
                  <div className="sm:w-20 text-right font-sans font-bold text-brand-black flex items-center justify-end">
                    {votes} <span className="text-xs font-normal text-gray-500 ml-1">Votes</span>
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
