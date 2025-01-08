import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SectionGrid from '@/components/_dashboard/SectionGrid';
import LikedTracksHeader from '@/components/_dashboard/LikedTracksHeader';
import Image from 'next/image';
import Footer from '@/components/_dashboard/Footer';
import HeaderNav from '@/components/_dashboard/_home/HeaderNav';

const FeaturedSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScrollButtons();
    // window.addEventListener('resize', () => {
    //   checkScrollButtons();
    // });
    // return () => window.removeEventListener('resize', () => {
    //   checkScrollButtons();
    // });
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

  return (
    <div className="">
      <HeaderNav/>

      <LikedTracksHeader />

      {/* Popular Artists Section */}
      <div className="mt-8 mb-8">
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
              className="flex-none snap-start group w-24 sm:w-32 lg:w-40"
            >
              <div className="relative aspect-square mb-2">
                <Image
                  src={"https://www.bollywoodhungama.com/wp-content/uploads/2022/12/Arijjit-Singh-Concert.jpeg"}
                  alt={artist.name}
                  className="w-full h-full object-cover rounded-full transition duration-300 group-hover:shadow-xl"
                  loading="lazy"
                  width={500}
                  height={500}
                />
                <button
                  className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-400"
                  aria-label={`Play ${artist.name} music`}
                >
                  <Play className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 text-black fill-black" />
                </button>
              </div>
              <div className="w-full text-center">
                <h3 className="font-semibold text-white text-xs sm:text-sm lg:text-base mb-0.5 truncate w-full px-1">
                  {artist.name}
                </h3>
                <p className="text-xs text-gray-400">{artist.listeners} monthly listeners</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Playlists Section */}
      <SectionGrid title='Popular playlists' showTotalTracks={true} />

      <Footer />
    </div>
  );
};

export default FeaturedSection;