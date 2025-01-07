import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick, className }) => (
  <button 
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity ${className}`}
    aria-label={`Scroll ${direction}`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6" />
    ) : (
      <ChevronRight className="w-6 h-6" />
    )}
  </button>
);

interface TrackCardProps {
  track: Track;
}

const TrackCard: React.FC<TrackCardProps> = ({ track }) => (
  <div className="flex-shrink-0 w-56 group/card">
    <div className="relative">
      <div className="w-56 h-56 bg-zinc-800 rounded-md overflow-hidden group-hover/card:bg-zinc-700 transition-colors duration-200">
        <img 
          src={track.image} 
          alt={track.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200" />
        <button 
          className="absolute right-4 bottom-4 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-200"
          aria-label={`Play ${track.title}`}
        >
          <Play className="w-8 h-8 fill-black" />
        </button>
      </div>
    </div>
    <div className="mt-4 px-2">
      <h3 className="font-semibold text-base truncate">{track.title}</h3>
      <p className="text-sm text-gray-400 mt-2 line-clamp-2">{track.description}</p>
    </div>
  </div>
);

const SpotifyHomepage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);

  const tracks: Track[] = [
    { id: 1, title: 'Daily Mix 1', image: '/api/placeholder/224/224', description: 'Based on your recent listening' },
    { id: 2, title: 'Discover Weekly', image: '/api/placeholder/224/224', description: 'Your weekly mixtape' },
    { id: 3, title: 'Release Radar', image: '/api/placeholder/224/224', description: 'New releases from artists you follow' },
    { id: 4, title: 'Daily Mix 2', image: '/api/placeholder/224/224', description: 'More of what you like' },
    { id: 5, title: 'On Repeat', image: '/api/placeholder/224/224', description: 'Songs you cant get enough of' },
    { id: 6, title: 'Time Capsule', image: '/api/placeholder/224/224', description: 'Your throwback favorites' },
    { id: 7, title: 'Daily Mix 3', image: '/api/placeholder/224/224', description: 'Made for you' },
    { id: 8, title: 'Blend', image: '/api/placeholder/224/224', description: 'A mix for you and friends' },
  ];

  const scroll = (direction: 'left' | 'right'): void => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = container.clientWidth * 0.8;
    const newScrollPosition = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  const handleScroll = (): void => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(container.scrollLeft < (container.scrollWidth - container.clientWidth - 10));
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="max-w-[1500px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Made For You</h1>
        
        <div className="relative group">
          {showLeftArrow && (
            <ScrollButton 
              direction="left" 
              onClick={() => scroll('left')} 
              className="left-0" 
            />
          )}
          
          {showRightArrow && (
            <ScrollButton 
              direction="right" 
              onClick={() => scroll('right')} 
              className="right-0" 
            />
          )}
          
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyHomepage;