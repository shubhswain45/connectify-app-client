import { ChevronLeft, ChevronRight, Clock, Play } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

// PlaylistCard Interface
interface PlaylistCard {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    tracks?: number;
    duration?: string;
}

// SectionGrid Props
interface SectionGridProps {
    title: string;
}

const SectionGrid: React.FC<SectionGridProps> = ({ title }) => {
    const playlistScrollRef = useRef<HTMLDivElement | null>(null);
    const [showPlaylistLeftArrow, setShowPlaylistLeftArrow] = useState(false);
    const [showPlaylistRightArrow, setShowPlaylistRightArrow] = useState(true);

    // Check scroll position for playlists
    const checkPlaylistScrollButtons = () => {
        const container = playlistScrollRef.current;
        if (container) {
            setShowPlaylistLeftArrow(container.scrollLeft > 0);
            setShowPlaylistRightArrow(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 10
            );
        }
    };

    useEffect(() => {
        checkPlaylistScrollButtons();
        const handleResize = () => checkPlaylistScrollButtons();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement | null>) => {
        const container = ref?.current;
        if (container) {
            const scrollAmount = window.innerWidth < 640 ? 150 : 300;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const playlists: PlaylistCard[] = [
        { id: 1, title: "Chill Vibes", description: "Perfect playlist for relaxation and unwinding", tracks: 45, duration: "2hr 55min", imageUrl: "/api/placeholder/300/300" },
        { id: 2, title: "Workout Beats", description: "High-energy tracks to fuel your workout", tracks: 32, duration: "2hr 15min", imageUrl: "/api/placeholder/300/300" },
        { id: 3, title: "Road Trip Mix", description: "The ultimate collection for your journey", tracks: 60, duration: "3hr 45min", imageUrl: "/api/placeholder/300/300" },
        { id: 4, title: "Study Focus", description: "Concentration-boosting instrumental tracks", tracks: 40, duration: "3hr 20min", imageUrl: "/api/placeholder/300/300" },
        { id: 5, title: "Party Hits", description: "Top party anthems to get the crowd moving", tracks: 55, duration: "3hr 30min", imageUrl: "/api/placeholder/300/300" },
        { id: 6, title: "Morning Coffee", description: "Start your day with these uplifting tunes", tracks: 35, duration: "2hr 10min", imageUrl: "/api/placeholder/300/300" },
        { id: 8, title: "Indie Discoveries", description: "Fresh finds from the indie music scene", tracks: 42, duration: "2hr 45min", imageUrl: "/api/placeholder/300/300" },
        { id: 9, title: "Classic Rock", description: "Timeless rock hits from the legends", tracks: 50, duration: "3hr 15min", imageUrl: "/api/placeholder/300/300" },
    ];

    return (
        <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{title}</h2>
                <div className="flex gap-1.5 sm:gap-2">
                    {showPlaylistLeftArrow && (
                        <button
                            onClick={() => scroll('left', playlistScrollRef)}
                            className="p-1 sm:p-1.5 lg:p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>
                    )}
                    {showPlaylistRightArrow && (
                        <button
                            onClick={() => scroll('right', playlistScrollRef)}
                            className="p-1 sm:p-1.5 lg:p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>
                    )}
                </div>
            </div>

            <div
                ref={playlistScrollRef}
                onScroll={checkPlaylistScrollButtons}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {playlists.map((playlist) => (
                    <div
                        key={playlist.id}
                        className="flex-none snap-start group w-[140px] sm:w-[240px] lg:w-[280px]"
                    >
                        <div className="relative aspect-square mb-2 sm:mb-3 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm">
                            <img
                                src={playlist.imageUrl}
                                alt={playlist.title}
                                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                            <button
                                className="absolute bottom-2 right-2 w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-400 shadow-xl"
                                aria-label={`Play ${playlist.title}`}
                            >
                                <Play className="h-3 sm:h-5 lg:h-6 w-3 sm:w-5 lg:w-6 text-black fill-black" />
                            </button>
                        </div>
                        <div className="px-1">
                            <h3 className="font-semibold text-white text-xs sm:text-base lg:text-lg mb-1 truncate">
                                {playlist.title}
                            </h3>
                            <p className="text-[10px] lg:text-sm text-gray-400 mb-1.5 line-clamp-2 leading-relaxed">
                                {playlist.description}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
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

export default SectionGrid;
