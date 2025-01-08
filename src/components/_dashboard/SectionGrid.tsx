import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionCard from './SectionCard';

interface Track {
    id: number;
    title: string;
    artist: string;
}

const SectionGrid = ({ title, showTotalTracks }: { title: string, showTotalTracks: boolean }) => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
    const [showRightArrow, setShowRightArrow] = useState<boolean>(false);

    // Dummy tracks data
    const tracks: Track[] = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        title: `Track ${i + 1}`,
        artist: `Artist ${i + 1}`,
    }));

    const checkScrollButtons = (): void => {
        const container = scrollContainerRef.current;
        if (container) {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollLeft < container.scrollWidth - container.clientWidth
            );
        }
    };

    useEffect(() => {
        checkScrollButtons();
    }, []);

    const scroll = (direction: 'left' | 'right'): void => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.clientWidth * 0.8;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className="space-y-4">
                {/* Header Section */}
                <div className="flex items-end justify-between px-0 md:px-0">
                    <div>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                            {title}
                        </h2>
                    </div>
                    <button
                        className="text-xs md:text-sm font-bold text-gray-400 hover:underline"
                    // onClick={() => setShowModal(true)}
                    >
                        Show all
                    </button>
                </div>

                {/* Tracks Grid Section */}
                <div className="relative w-full">
                    <style jsx global>{`
                        .hide-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                        .hide-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {showLeftArrow && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#121212] text-white rounded-full p-1 md:p-2 shadow-md hover:bg-[#121212] transition-colors"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-5 w-5 md:h-5 md:w-5" />
                        </button>
                    )}

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-0 overflow-x-scroll px-0 scrollbar-hide hide-scrollbar"
                        onScroll={checkScrollButtons}
                    >
                        {tracks.map((track) => (
                            <div key={track.id}>
                                <SectionCard showTotalTracks={false} title={track.title} />
                            </div>
                        ))}
                    </div>

                    {showRightArrow && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#121212] text-white rounded-full p-1 md:p-2 shadow-md hover:bg-[#121212] transition-colors"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-5 w-5 md:h-5 md:w-5" />
                        </button>
                    )}
                </div>
            </div>

            {showTotalTracks && <></>}
        </>
    );
};

export default SectionGrid;