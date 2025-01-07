// FeaturedSection.js
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Clock } from 'lucide-react';

const FeaturedSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const playlistScrollRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showPlaylistLeftArrow, setShowPlaylistLeftArrow] = useState(false);
  const [showPlaylistRightArrow, setShowPlaylistRightArrow] = useState(true);

  // Check scroll position for artists
  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

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
    checkScrollButtons();
    checkPlaylistScrollButtons();
    window.addEventListener('resize', () => {
      checkScrollButtons();
      checkPlaylistScrollButtons();
    });
    return () => window.removeEventListener('resize', () => {
      checkScrollButtons();
      checkPlaylistScrollButtons();
    });
  }, []);

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement | null>) => {
    const container = ref.current;
    if (container) {
      const scrollAmount = window.innerWidth < 640 ? 150 : 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const artists = [
    { id: 1, name: "Taylor Swift", imageUrl: "/api/placeholder/200/200", listeners: "82M" },
    { id: 2, name: "Drake", imageUrl: "/api/placeholder/200/200", listeners: "75M" },
    { id: 3, name: "Ed Sheeran", imageUrl: "/api/placeholder/200/200", listeners: "70M" },
    { id: 4, name: "The Weeknd", imageUrl: "/api/placeholder/200/200", listeners: "68M" },
    { id: 5, name: "Ariana Grande", imageUrl: "/api/placeholder/200/200", listeners: "65M" },
    { id: 6, name: "Bad Bunny", imageUrl: "/api/placeholder/200/200", listeners: "62M" },
    { id: 7, name: "Billie Eilish", imageUrl: "/api/placeholder/200/200", listeners: "60M" },
    { id: 8, name: "Post Malone", imageUrl: "/api/placeholder/200/200", listeners: "58M" },
  ];

  const playlists = [
    { id: 1, title: "Chill Vibes", description: "Perfect playlist for relaxation and unwinding", tracks: 45, duration: "2hr 55min", imageUrl: "/api/placeholder/300/300" },
    { id: 2, title: "Workout Beats", description: "High-energy tracks to fuel your workout", tracks: 32, duration: "2hr 15min", imageUrl: "/api/placeholder/300/300" },
    { id: 3, title: "Road Trip Mix", description: "The ultimate collection for your journey", tracks: 60, duration: "3hr 45min", imageUrl: "/api/placeholder/300/300" },
    { id: 4, title: "Study Focus", description: "Concentration-boosting instrumental tracks", tracks: 40, duration: "3hr 20min", imageUrl: "/api/placeholder/300/300" },
    { id: 5, title: "Party Hits", description: "Top party anthems to get the crowd moving", tracks: 55, duration: "3hr 30min", imageUrl: "/api/placeholder/300/300" },
    { id: 6, title: "Morning Coffee", description: "Start your day with these uplifting tunes", tracks: 35, duration: "2hr 10min", imageUrl: "/api/placeholder/300/300" },
    { id: 8, title: "Indie Discoveries", description: "Fresh finds from the indie music scene", tracks: 42, duration: "2hr 45min", imageUrl: "/api/placeholder/300/300" },
    { id: 9, title: "Classic Rock", description: "Timeless rock hits from the legends", tracks: 50, duration: "3hr 15min", imageUrl: "/api/placeholder/300/300" }
  ];

  return (
    <div className="">
      {/* Popular Artists Section */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Popular Artists</h2>
          <div className="flex gap-1.5 sm:gap-2">
            {showLeftArrow && (
              <button
                onClick={() => scroll('left', scrollContainerRef)}
                className="p-1 sm:p-1.5 lg:p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            )}
            {showRightArrow && (
              <button
                onClick={() => scroll('right', scrollContainerRef)}
                className="p-1 sm:p-1.5 lg:p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            )}
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="flex-none snap-start group"
            >
              <div className="relative w-24 sm:w-32 lg:w-40 aspect-square mb-2">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover rounded-full transition duration-300 group-hover:shadow-xl"
                  loading="lazy"
                />
                <button
                  className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-400"
                  aria-label={`Play ${artist.name} music`}
                >
                  <Play className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 text-black fill-black" />
                </button>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white text-xs sm:text-sm lg:text-base mb-0.5 truncate max-w-[6rem] sm:max-w-[8rem] lg:max-w-[10rem] mx-auto">
                  {artist.name}
                </h3>
                <p className="text-xs text-gray-400">{artist.listeners} monthly listeners</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Playlist Card */}
      <div className="relative overflow-hidden rounded-lg sm:rounded-xl backdrop-blur-sm mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-3 sm:p-4 lg:p-6">
          <img
            src="/api/placeholder/300/300"
            alt="Featured Playlist"
            className="w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 rounded-lg shadow-xl ring-1 ring-white/10"
            loading="lazy"
          />
          <div className="flex-1 text-center sm:text-left">
            <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 bg-white/10 rounded-full text-xs font-medium mb-2 sm:mb-3">
              FEATURED PLAYLIST
            </span>
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-3">Today&apos;s Top Hits</h2>
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 max-w-2xl">
              Catch all the latest music from the hottest artists worldwide. Updated every Friday.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 bg-green-500 px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 rounded-full hover:bg-green-400 transition">
                <Play className="h-3.5 sm:h-4 lg:h-5 w-3.5 sm:w-4 lg:w-5 text-black fill-black" />
                <span className="text-black font-semibold text-sm lg:text-base">Play Now</span>
              </button>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Clock className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                  <span>3hr 45min</span>
                </div>
                <span>•</span>
                <span>50 tracks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Playlists Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Popular Playlists</h2>
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
                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span>{playlist.duration}</span>
                  </div>
                  <span>•</span>
                  <span>{playlist.tracks} tracks</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
