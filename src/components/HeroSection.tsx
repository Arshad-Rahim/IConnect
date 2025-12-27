import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <section 
      className="relative py-32 overflow-hidden bg-slate-900 text-white"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Subtle parallax effect
      }}
    >
      {/* Enhanced overlay for better text readability and depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-black/40 to-slate-900/60"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjAyIi8+CjxwYXRoIGQ9Ik0wIDUwSDEwMFoiIGZpbGw9IiNBRURGRkYiIG9wYWNpdHk9IjAuMDEiLz4KPC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Refined Title with layered gradient for premium shine */}
        <div className="inline-block">
          <h1 className="text-7xl font-light tracking-tight mb-6 text-white drop-shadow-2xl relative">
            <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              {title.split(' ').map((word, idx) => (
                <span key={idx} className={idx % 2 === 0 ? 'font-medium' : ''}>
                  {word}{' '}
                </span>
              ))}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-sm -inset-1 rounded-lg opacity-75"></div>
          </h1>
        </div>
        <p className="text-xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
          {subtitle}
        </p>
        
        {/* Call-to-Action with enhanced hover and icon integration */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="group bg-amber-500/90 text-slate-900 px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-amber-400/90 transition-all duration-500 shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Begin Restoration
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
          </button>
          <Link 
            to="/services" 
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-300 underline decoration-amber-400/50"
          >
            Explore Offerings
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;