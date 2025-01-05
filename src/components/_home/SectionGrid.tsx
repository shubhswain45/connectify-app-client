import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import SectionCard from './SectionCard';

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

function SectionGrid({title}: {title: string}) {
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

    const scroll = (direction: 'left' | 'right'): void => {
        if (scrollContainerRef.current) {
            const scrollAmount = 800;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
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

    return (
        <section className="pt-8 relative">
            <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
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
                            <SectionCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionGrid