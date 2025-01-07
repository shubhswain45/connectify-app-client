import React from 'react';

interface PlaylistCard {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
}

const SectionCard: React.FC<PlaylistCard> = ({ title, description }) => (
    <div className="p-4 rounded-lg cursor-pointer hover:bg-neutral-800/50 transition-all group/item">
        <div className="relative">
            {/* Image container */}
            <div className="aspect-square bg-gray-700 mb-4 rounded-md overflow-hidden relative">
                {/* Play button - visible on card hover */}
                <div className="opacity-0 group-hover/item:opacity-100 transition-all absolute bottom-2 right-2 z-10 translate-y-2 group-hover/item:translate-y-0 duration-200">
                    <button 
                        className="bg-green-500 rounded-full p-3 hover:scale-105 hover:bg-green-400 transition-all shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/item:opacity-100 transition-all" />
            </div>
        </div>
        {/* Card content */}
        <h3 className="text-white font-semibold text-base mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-400 truncate">{description}</p>
    </div>
);

export default SectionCard;