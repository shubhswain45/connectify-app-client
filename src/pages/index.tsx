import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PlaylistCard {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

// Mock data
const makeForYouItems: PlaylistCard[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Daily Mix ${i + 1}`,
  description: 'Custom playlist for you'
}));

const recentlyPlayedItems: PlaylistCard[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Album Title ${i + 1}`,
  description: 'Artist Name'
}));

const topMixesItems: PlaylistCard[] = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  title: `Mix ${i + 1}`,
  description: 'Based on your listening'
}));

const HomePage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);

  const checkScroll = (): void => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();
      return () => scrollContainer.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right'): void => {
    if (scrollContainerRef.current) {
      const scrollAmount = 800;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Scroll arrow button component
  const ScrollArrowButton: React.FC<{
    direction: 'left' | 'right';
    onClick: () => void;
  }> = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition-all"
      style={{ [direction]: 0 }}
      aria-label={`Scroll ${direction}`}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6 text-white" />
      ) : (
        <ChevronRight className="w-6 h-6 text-white" />
      )}
    </button>
  );

  // Card component
  const Card: React.FC<PlaylistCard> = ({ title, description }) => (
    <div className="bg-gray-800/40 hover:bg-gray-800/60 transition-all p-4 rounded-lg cursor-pointer group">
      <div className="aspect-square bg-gray-700 mb-4 rounded-md relative overflow-hidden">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 right-2 z-10">
          <div className="bg-green-500 rounded-full p-3 shadow-lg">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <h3 className="text-white font-semibold text-base mb-1 truncate">{title}</h3>
      <p className="text-sm text-gray-400 truncate">{description}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Recently Played Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Good afternoon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-800/50 hover:bg-gray-800 transition-colors group flex items-center gap-4 rounded-md overflow-hidden cursor-pointer"
            >
              <div className="w-24 h-24 bg-gray-700 flex-shrink-0" />
              <span className="font-semibold text-white">Playlist {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Made For You Section with Horizontal Scroll */}
      <section className="pt-8 relative">
        <h2 className="text-2xl font-bold text-white mb-4">Made for you</h2>
        <div className="relative group">
          {showLeftArrow && (
            <ScrollArrowButton direction="left" onClick={() => scroll('left')} />
          )}
          
          {showRightArrow && (
            <ScrollArrowButton direction="right" onClick={() => scroll('right')} />
          )}

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 no-scrollbar pb-2"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {makeForYouItems.map((item) => (
              <div key={item.id} className="flex-none w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px]">
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Played */}
      <section className="pt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Recently played</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {recentlyPlayedItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Your Top Mixes */}
      <section className="pt-8 pb-24">
        <h2 className="text-2xl font-bold text-white mb-4">Your top mixes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {topMixesItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Add global styles for hiding scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HomePage;